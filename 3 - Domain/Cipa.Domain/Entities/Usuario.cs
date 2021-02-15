using Cipa.Domain.Exceptions;
using Cipa.Domain.Helpers;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Cipa.Domain.Entities
{
    public class Usuario : Entity<int>
    {

        public Usuario(string login, string email, string nome, string cargo, EMetodoAutenticacao metodoAutenticacao)
        {
            Login = login.Trim();
            Email = string.IsNullOrWhiteSpace(email) ? null : email.Trim().ToLower();
            Nome = nome;
            Cargo = cargo;
            Perfil = Cipa.Domain.Helpers.PerfilUsuario.Eleitor;
            MetodoAutenticacao = metodoAutenticacao;
            if (metodoAutenticacao == EMetodoAutenticacao.Email)
            {
                CodigoRecuperacao = Guid.NewGuid();
                ExpiracaoCodigoRecuperacao = DateTime.Now.AddDays(1);
                MetodoAutenticacao = EMetodoAutenticacao.Email;
            }
        }

        public EMetodoAutenticacao MetodoAutenticacao { get; set; }
        public string Login { get; set; }
        public string Email { get; set; }
        public string Nome { get; set; }
        public string Senha { get; set; }
        public int? ContaId { get; set; }
        public string Perfil { get; set; }
        // Código utilizado para criar uma conta (sem data de expiração) ou para recuperação de senha esquecida
        public Guid? CodigoRecuperacao { get; private set; }
        public DateTime? ExpiracaoCodigoRecuperacao { get; private set; }
        public string Cargo { get; set; }
        public DateTime DataCadastro { get; private set; }
        public bool PossuiEmail => !string.IsNullOrWhiteSpace(Email);

        public virtual Conta Conta { get; set; }
        private List<Eleitor> _eleitores = new List<Eleitor>();
        public virtual IReadOnlyCollection<Eleitor> Eleitores { get => new ReadOnlyCollection<Eleitor>(_eleitores); }

        public void AlterarParaPerfilEleitor()
        {
            Perfil = PerfilUsuario.Eleitor;
            ContaId = null;
            Conta = null;
        }

        public void AlterarParaPerfilSESMT(Conta conta)
        {
            Perfil = PerfilUsuario.SESMT;
            ContaId = conta.Id;
            Conta = conta;
        }

        public void AlterarParaPerfilAdministrador()
        {
            Perfil = PerfilUsuario.Administrador;
        }

        public bool JaCadastrouSenha => !string.IsNullOrWhiteSpace(Senha);

        public void CadastrarSenha(Guid codigoRecuperacao, string senha)
        {
            if (MetodoAutenticacao == EMetodoAutenticacao.UsuarioRede)
                throw new CustomException("Esse usuário realiza login via usuário e senha de rede.");

            if (codigoRecuperacao != CodigoRecuperacao)
                throw new CustomException("Código de recuperação inválido.");

            if (ExpiracaoCodigoRecuperacao.HasValue && DateTime.Now > ExpiracaoCodigoRecuperacao)
                throw new CustomException("Código de recuperação expirado.");

            CodigoRecuperacao = null;
            ExpiracaoCodigoRecuperacao = null;
            Senha = senha;
        }

        public void ResetarSenha()
        {
            CodigoRecuperacao = Guid.NewGuid();
            ExpiracaoCodigoRecuperacao = DateTime.Now.AddDays(1);
            Senha = null;
        }
    }
}
