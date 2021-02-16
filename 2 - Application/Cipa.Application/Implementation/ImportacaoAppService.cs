using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Reflection;
using Cipa.Application.Events;
using Cipa.Application.Events.EventsArgs;
using Cipa.Application.Interfaces;
using Cipa.Application.Services.Interfaces;
using Cipa.Application.Services.Models;
using Cipa.Domain.Entities;
using Cipa.Domain.Exceptions;
using Cipa.Domain.Helpers;
using Cipa.Application.Repositories;

namespace Cipa.Application
{
    public class ImportacaoAppService : AppServiceBase<Importacao>, IImportacaoAppService
    {
        private readonly IExcelService _excelService;
        private readonly DataColumnValidator[] _dataColumnValidators;
        private readonly IProgressoImportacaoEvent _progressoEvent;
        private const int LINHA_INICIAL_ARQUIVO = 1;
        private const int QTDA_MAX_ERROS = 30;

        public ImportacaoAppService(
            IUnitOfWork unitOfWork,
            IExcelService excelService,
            IImportacaoServiceConfiguration importacaoConfiguration,
            IProgressoImportacaoEvent progressoEvent) : base(unitOfWork, unitOfWork.ImportacaoRepository)
        {
            _excelService = excelService;
            _dataColumnValidators = importacaoConfiguration.Validators;
            _progressoEvent = progressoEvent;
        }

        private IEnumerable<string> ColunasObrigatoriasNaoEncontradas(DataTable dataTable, IEnumerable<DataColumnValidator> colunasObrigatorias)
        {
            foreach (var column in colunasObrigatorias)
                if (!dataTable.Columns.Contains(column.ColumnName))
                    yield return column.ColumnName;
        }

        private IEnumerable<Inconsistencia> ValidarFormatoDataTable(DataTable dataTable, string emailUsuario)
        {
            var inconsistencias = new List<Inconsistencia>();

            // Valida se possui as colunas obrigatórias
            var obrigatorias = _dataColumnValidators.Where(v => v.Required);
            var colunasNaoEncontradas = ColunasObrigatoriasNaoEncontradas(dataTable, obrigatorias);
            if (colunasNaoEncontradas.Any())
                return colunasNaoEncontradas
                    .Select(coluna => new Inconsistencia(
                        coluna, LINHA_INICIAL_ARQUIVO,
                        $"A coluna {coluna} é obrigatória, porém não foi encontrada no arquivo."));

            // Valida os valores
            int linha = LINHA_INICIAL_ARQUIVO + 1;
            var validators = _dataColumnValidators.ToDictionary(k => k.ColumnName);

            foreach (DataRow dr in dataTable.Rows)
            {
                for (int i = 0; i < dataTable.Columns.Count; i++)
                {
                    var validator = validators[dataTable.Columns[i].ColumnName];
                    if (validator == null) continue;
                    object value = dr[validator.ColumnName];
                    var erro = validator.ValidarValor(value);
                    if (!string.IsNullOrWhiteSpace(erro))
                        inconsistencias.Add(new Inconsistencia(validator.ColumnName, linha, erro));
                }
                var countLinhasErros = inconsistencias.Select(i => i.Linha).Distinct().Count();

                var login = ObtemValorFormatoCorreto<string>(dr, ColunasArquivo.Login, validators[ColunasArquivo.Login]).Trim();
                var email = ObtemValorFormatoCorreto<string>(dr, ColunasArquivo.Email, validators[ColunasArquivo.Email]).Trim().ToLower();
                var realizarLoginVia = ObtemValorFormatoCorreto<string>(dr, ColunasArquivo.MetodoAutenticacao, validators[ColunasArquivo.MetodoAutenticacao])?.Trim();
                var metodoAutenticacao = realizarLoginVia == "E-mail" ? EMetodoAutenticacao.Email : EMetodoAutenticacao.UsuarioRede;

                if (metodoAutenticacao == EMetodoAutenticacao.Email)
                {
                    if (string.IsNullOrWhiteSpace(email))
                        inconsistencias.Add(new Inconsistencia(ColunasArquivo.Email, linha, $"O e-mail do eleitor deve ser informado. (Linha {linha})."));
                    
                    dr[ColunasArquivo.Login] = email;
                }
                else if (string.IsNullOrWhiteSpace(login))
                {
                    inconsistencias.Add(new Inconsistencia(ColunasArquivo.Login, linha, $"O usuário de rede do eleitor deve ser informado. (Linha {linha})."));
                }

                if (countLinhasErros > QTDA_MAX_ERROS)
                    break;
                linha++;
                //NotificarProgresso(1, linha - LINHA_INICIAL_ARQUIVO, dataTable.Rows.Count, emailUsuario);
            }
            return inconsistencias;

        }

        private T ObtemValorFormatoCorreto<T>(DataRow dr, string columnName, DataColumnValidator validator)
        {
            if (!dr.Table.Columns.Contains(columnName)) return default(T);
            return (T)validator.ParseValor(dr[columnName]);
        }

        private List<Eleitor> ConverterParaListaDeEleitor(DataTable dataTable, string emailUsuario)
        {
            List<Eleitor> eleitores = new List<Eleitor>();
            int totalLinhas = dataTable.Rows.Count;
            int linha = LINHA_INICIAL_ARQUIVO;
            var validators = _dataColumnValidators.ToDictionary(k => k.ColumnName);
            foreach (DataRow dr in dataTable.Rows)
            {
                var nome = ObtemValorFormatoCorreto<string>(dr, ColunasArquivo.Nome, validators[ColunasArquivo.Nome]).Trim();
                var login = ObtemValorFormatoCorreto<string>(dr, ColunasArquivo.Login, validators[ColunasArquivo.Login]).Trim();
                var email = ObtemValorFormatoCorreto<string>(dr, ColunasArquivo.Email, validators[ColunasArquivo.Email]).Trim().ToLower();
                var cargo = ObtemValorFormatoCorreto<string>(dr, ColunasArquivo.Cargo, validators[ColunasArquivo.Cargo])?.Trim();
                var realizarLoginVia = ObtemValorFormatoCorreto<string>(dr, ColunasArquivo.MetodoAutenticacao, validators[ColunasArquivo.MetodoAutenticacao])?.Trim();
                var metodoAutenticacao = realizarLoginVia == "E-mail" ? EMetodoAutenticacao.Email : EMetodoAutenticacao.UsuarioRede;

                var usuario = _unitOfWork.UsuarioRepository.BuscarUsuarioPeloLogin(login);
                if (usuario == null)
                    usuario = new Usuario(login, email, nome, cargo, metodoAutenticacao);

                var eleitor = new Eleitor(usuario)
                {
                    Cargo = cargo,
                    MetodoAutenticacao = metodoAutenticacao,
                    Area = ObtemValorFormatoCorreto<string>(dr, ColunasArquivo.Area, validators[ColunasArquivo.Area])?.Trim(),
                    DataAdmissao = ObtemValorFormatoCorreto<DateTime?>(dr, ColunasArquivo.DataAdmissao, validators[ColunasArquivo.DataAdmissao]),
                    DataNascimento = ObtemValorFormatoCorreto<DateTime?>(dr, ColunasArquivo.DataNascimento, validators[ColunasArquivo.DataNascimento]),
                    Matricula = ObtemValorFormatoCorreto<string>(dr, ColunasArquivo.Matricula, validators[ColunasArquivo.Matricula])?.Trim(),
                    NomeGestor = ObtemValorFormatoCorreto<string>(dr, ColunasArquivo.NomeGestor, validators[ColunasArquivo.NomeGestor])?.Trim(),
                    EmailGestor = ObtemValorFormatoCorreto<string>(dr, ColunasArquivo.EmailGestor, validators[ColunasArquivo.EmailGestor])?.Trim()
                };

                eleitores.Add(eleitor);
                linha++;
                NotificarProgresso(linha - LINHA_INICIAL_ARQUIVO, dataTable.Rows.Count, emailUsuario);
            }
            return eleitores;
        }

        private IEnumerable<Inconsistencia> RetornarInconsistenciasEmailsDuplicados(List<Eleitor> eleitores) =>
            eleitores.Where(e => e.PossuiEmail).Select(e => e.Email).Distinct()
                .ToDictionary(email => email, email => eleitores.Count(e => e.Email == email))
                .Where(dic => dic.Value > 1)
                .Select(dic => new Inconsistencia(
                    ColunasArquivo.Email, 0,
                    $"Há {dic.Value} linhas no arquivo com o e-mail {dic.Key}."));

        public void RealizarImportacaoEmBrackground()
        {
            Importacao importacao = (_repositoryBase as IImportacaoRepository).BuscarPrimeiraImportacaoPendenteDaFila();
            if (importacao == null) return;
            try
            {
                importacao.IniciarProcessamento();
                base.Atualizar(importacao);
                var arquivoImportacao = Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), importacao.Arquivo.Path);
                var dataTable = _excelService.LerTabela(arquivoImportacao, LINHA_INICIAL_ARQUIVO, 11);
                var inconsistencias = ValidarFormatoDataTable(dataTable, importacao.Arquivo.LoginUsuario);

                if (!FinalizarImportacaoComErro(importacao, inconsistencias))
                {
                    var eleitores = ConverterParaListaDeEleitor(dataTable, importacao.Arquivo.LoginUsuario);
                    inconsistencias = RetornarInconsistenciasEmailsDuplicados(eleitores);

                    if (!FinalizarImportacaoComErro(importacao, inconsistencias))
                    {
                        //var linha = 0;
                        foreach (var eleitor in eleitores)
                        {
                            SalvarEleitor(importacao.Eleicao, eleitor);
                            //NotificarProgresso(3, linha, eleitores.Count, importacao.Arquivo.EmailUsuario);
                        }
                        _unitOfWork.EleicaoRepository.Atualizar(importacao.Eleicao);
                        FinalizarImportacaoComSucesso(importacao);
                        _unitOfWork.Commit();
                    }
                }

            }
            catch (Exception ex)
            {
                _unitOfWork.Rollback();
                FinalizarImportacaoComErro(importacao, new[] { new Inconsistencia(string.Empty, 0, ex.Message) });
            }
        }

        private bool FinalizarImportacaoComErro(Importacao importacao, IEnumerable<Inconsistencia> inconsistencias)
        {
            if (inconsistencias.Any())
            {
                importacao.FinalizarImportacaoComFalha(inconsistencias);
                base.Atualizar(importacao);
                _progressoEvent.OnImportacaoFinalizada(this,
                    new FinalizacaoImportacaoStatusEventArgs
                    {
                        Status = StatusImportacao.FinalizadoComFalha,
                        QtdaErros = inconsistencias.Count(),
                        EmailUsuario = importacao.Arquivo.LoginUsuario
                    });
                return true;
            }
            return false;
        }

        private void FinalizarImportacaoComSucesso(Importacao importacao)
        {
            importacao.FinalizarProcessamentoComSucesso();
            base.Atualizar(importacao);
            _progressoEvent.OnImportacaoFinalizada(this,
                new FinalizacaoImportacaoStatusEventArgs
                {
                    Status = StatusImportacao.FinalizadoComSucesso,
                    QtdaErros = 0,
                    EmailUsuario = importacao.Arquivo.LoginUsuario
                });
        }

        private void NotificarProgresso(int linhasProcessadas, int totalLinhas, string emailUsuario)
        {
            _progressoEvent.OnNotificacaoProgresso(this, new ProgressoImportacaoEventArgs
            {
                EtapaAtual = 1,
                LinhasProcessadas = linhasProcessadas,
                TotalEtapas = 1,
                TotalLinhas = totalLinhas,
                EmailUsuario = emailUsuario
            });
        }

        private void SalvarEleitor(Eleicao eleicao, Eleitor eleitor)
        {
            var eleitorCadastrado = eleicao.BuscarEleitorPeloLogin(eleitor.Login);
            if (eleitorCadastrado == null)
                eleicao.AdicionarEleitor(eleitor);
            else
            {
                eleitor.Id = eleitorCadastrado.Id;
                eleicao.AtualizarEleitor(eleitor);
            }
        }

        public IEnumerable<Inconsistencia> RetornarInconsistenciasDaImportacao(int id)
        {
            var importacao = BuscarPeloId(id);
            return importacao.Inconsistencias;
        }

        public Importacao RetornarUltimaImportacaoDaEleicao(int eleicaoId)
        {
            var eleicao = _unitOfWork.EleicaoRepository.BuscarPeloId(eleicaoId);
            if (eleicao == null) throw new NotFoundException("Eleição não encontrada.");

            return eleicao.Importacoes.OrderBy(i => i.DataCadastro).LastOrDefault();
        }



    }
}