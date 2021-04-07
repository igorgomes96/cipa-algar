using Cipa.Application.Interfaces;
using Cipa.Domain.Entities;
using Cipa.Domain.Exceptions;
using Cipa.Domain.Helpers;
using Cipa.WebApi.ViewModels;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Novell.Directory.Ldap;
using System;
using System.DirectoryServices;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;

namespace Cipa.WebApi.Authentication
{
    public class LoginService : ILoginService
    {
        private readonly IUsuarioAppService _usuarioAppService;
        private readonly SigningConfigurations _signingConfigurations;
        private readonly TokenConfigurations _tokenConfigurations;
        private readonly IContaAppService _contaAppService;
        private readonly IConfiguration _configuration;
        private readonly ILogger _logger;

        public LoginService(
            IUsuarioAppService usuarioAppService,
            SigningConfigurations signingConfigurations,
            TokenConfigurations tokenConfigurations,
            IContaAppService contaAppService,
            IConfiguration configuration,
            ILogger<LoginService> logger)
        {
            _usuarioAppService = usuarioAppService;
            _signingConfigurations = signingConfigurations;
            _tokenConfigurations = tokenConfigurations;
            _contaAppService = contaAppService;
            _configuration = configuration;
            _logger = logger;
        }

        #region Windows
        /*public SearchResult BuscarUsuarioAD(string userName, string passWord)
        {
            userName = userName.Trim().ToLower();
            string dDomain = _configuration.GetSection("LDAP:Domain").Value;
            string domainAndUsername = dDomain + @"\" + userName;
            string LDAP = _configuration.GetSection("LDAP:Path").Value;
            DirectoryEntry entry = new DirectoryEntry(LDAP, domainAndUsername, passWord);
            try
            {
                Object NativeObject = entry.NativeObject;

                DirectorySearcher directorySearcher = new DirectorySearcher(entry);
                directorySearcher.Filter = "(SAMAccountName=" + userName + ")";
                SearchResult searchResult = directorySearcher.FindOne();

                return searchResult;
            }
            catch
            {
                return null;
            }
        }

        public bool AutenticarUsuario(string login, string senha) {
            var search = BuscarUsuarioAD(login, senha);
            if (search == null) return false;

            try
            {
                if ((Int32)search.Properties["userAccountControl"][0] == 512
                   || (Int32)search.Properties["userAccountControl"][0] == 66048
                   || (Int32)search.Properties["userAccountControl"][0] == 544
                   || (Int32)search.Properties["userAccountControl"][0] == 66080
                   || (Int32)search.Properties["userAccountControl"][0] == 262656
                    || (Int32)search.Properties["userAccountControl"][0] == 262688
                    || (Int32)search.Properties["userAccountControl"][0] == 328192
                    || (Int32)search.Properties["userAccountControl"][0] == 328224)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch
            {
                return false;
            }
        }*/
        #endregion

        #region Linux
        public bool AutenticarUsuario(string login, string senha)
        {
            string dDomain = _configuration.GetSection("LDAP:Domain").Value;
            string LDAP = _configuration.GetSection("LDAP:Path").Value;
            string userDn = login + @"\" + dDomain;
            try
            {
                using (var connection = new LdapConnection())
                {
                    connection.Connect(LDAP, LdapConnection.DefaultPort);
                    connection.Bind(userDn, senha);
                    if (connection.Bound)
                        return true;
                }
            }
            catch (LdapException ex)
            {
                _logger.LogError(ex, "Erro ao consultar AD: {0}", ex.Message);
            }
            return false;
        }
        #endregion


        private Usuario ValidaUsuario(string login, string senha)
        {
            senha = CryptoService.ComputeSha256Hash(senha);
            var usuario = _usuarioAppService.BuscarUsuarioPeloLogin(login);
            if (usuario == null) throw new CustomException($"Usuário com login {login} não cadastrado!");
            switch (usuario.MetodoAutenticacao)
            {
                case EMetodoAutenticacao.Email:
                    if (usuario.Senha != senha) throw new CustomException("Senha incorreta.");
                    break;
                case EMetodoAutenticacao.UsuarioRede:
                    if (!AutenticarUsuario(login, senha)) throw new CustomException("Credencias inválidas!");
                    break;
            }
            return usuario;
        }

        public ClaimsIdentity GeraIdentity(Usuario usuario, Conta conta)
        {
            ClaimsIdentity identity = new ClaimsIdentity(
                    new GenericIdentity(usuario.Login, "Login"),
                    new[] {
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString("N")),
                        new Claim(CustomClaimTypes.NomeUsuario, usuario.Nome),
                        new Claim(ClaimTypes.Role, usuario.Perfil),
                        new Claim(CustomClaimTypes.UsuarioId, usuario.Id.ToString())
                    }
                );

            if (usuario.PossuiEmail)
            {
                identity.AddClaim(new Claim(ClaimTypes.Email, usuario.Email));
            }

            if (conta != null)
            {
                identity.AddClaims(
                    new[] {
                        new Claim(CustomClaimTypes.DataExpiracaoConta, conta.DataFim.ToString()),
                        new Claim(CustomClaimTypes.QtdaEstabelecimentos, conta.QtdaEstabelecimentos.ToString()),
                        new Claim(CustomClaimTypes.CodigoConta, conta.Id.ToString()),
                        new Claim(CustomClaimTypes.ContaValida, conta.Ativa.ToString().ToLower())
                    }
                );
            }
            return identity;
        }

        public AuthInfoViewModel AlterarContaTokenAdministrador(int usuarioId, int contaId)
        {
            var usuario = _usuarioAppService.BuscarPeloId(usuarioId);
            var conta = _contaAppService.BuscarPeloId(contaId);
            if (usuario == null) throw new NotFoundException("Usuário não encontrado.");
            if (conta == null) throw new NotFoundException("Conta não encontrada.");

            var identity = GeraIdentity(usuario, conta);
            return GerarToken(usuario, identity);
        }

        public AuthInfoViewModel Login(string login, string senha)
        {
            var usuarioBanco = ValidaUsuario(login, senha);
            var identity = GeraIdentity(usuarioBanco, usuarioBanco.Conta);
            return GerarToken(usuarioBanco, identity);
        }

        private AuthInfoViewModel GerarToken(Usuario usuario, ClaimsIdentity identity)
        {
            DateTime dataCriacao = DateTime.Now.HorarioBrasilia();
            DateTime dataExpiracao = dataCriacao + TimeSpan.FromSeconds(_tokenConfigurations.Seconds);

            var handler = new JwtSecurityTokenHandler();
            var securityToken = handler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = _tokenConfigurations.Issuer,
                Audience = _tokenConfigurations.Audience,
                SigningCredentials = _signingConfigurations.SigningCredentials,
                Subject = identity,
                NotBefore = dataCriacao,
                Expires = dataExpiracao
            });
            var token = handler.WriteToken(securityToken);

            return new AuthInfoViewModel
            {
                AccessToken = token,
                Criacao = dataCriacao,
                Expiracao = dataExpiracao,
                Roles = identity.Claims.Where(x => x.Type == ClaimTypes.Role).Select(x => x.Value).ToArray(),
                UsuarioEmail = usuario.Email,
                Login = usuario.Login
            };
        }

        public AuthInfoViewModel CadastrarNovaSenha(Guid codigoRecuperacao, string senha)
        {
            var usuario = _usuarioAppService.CadastrarNovaSenha(codigoRecuperacao, CryptoService.ComputeSha256Hash(senha));
            return Login(usuario.Login, senha);
        }

        public void ResetarSenha(string email)
            => _usuarioAppService.ResetarSenha(email);

        public Usuario BuscarUsuarioPeloCodigoRecuperacao(Guid codigoRecuperacao)
            => _usuarioAppService.BuscarUsuarioPeloCodigoRecuperacao(codigoRecuperacao);
    }
}