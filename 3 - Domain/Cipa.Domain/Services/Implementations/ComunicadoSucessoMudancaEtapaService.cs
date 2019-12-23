using System.Collections.Generic;
using Cipa.Domain.Entities;
using Cipa.Domain.Enums;

namespace Cipa.Domain.Services.Implementations
{
    public class ComunicadoSucessoMudancaEtapaService : ComunicadoEleicaoBaseService
    {
        public ComunicadoSucessoMudancaEtapaService(Eleicao eleicao) : base(eleicao)
        {
            MapeamentoParametros.Add("@ETAPA_ATUAL", () => eleicao.EtapaAtual?.Nome ?? "N/A - Processo não iniciado");
            MapeamentoParametros.Add("@ETAPA_POSTERIOR", () => eleicao.EtapaPosterior?.Nome ?? "Finalização da Eleição");
            ParametrosUtilizados.Add("@EMPRESA_CNPJ");
            ParametrosUtilizados.Add("@ETAPA_ATUAL");
            ParametrosUtilizados.Add("@ETAPA_POSTERIOR");
        }

        protected override ICollection<Email> FormatarEmailPadrao(TemplateEmail templateEmail)
        {
            var mensagem = SubstituirParametrosTemplate(templateEmail.Template);
            return new List<Email> {
                new Email(Eleicao.Usuario.Email, null, templateEmail.Assunto, mensagem)
            };
        }

        public override ICollection<Email> FormatarEmails()
        {
            var templateEmail = BuscarTemplateEmail(ETipoTemplateEmail.SucessoMudancaEtapaCronograma);
            return FormatarEmailPadrao(templateEmail);
        }
    }
}