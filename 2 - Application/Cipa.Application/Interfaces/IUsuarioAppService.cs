using Cipa.Domain.Entities;
using System;
using System.Collections.Generic;

namespace Cipa.Application.Interfaces
{
    public interface IUsuarioAppService : IAppServiceBase<Usuario>
    {
        Usuario BuscarUsuario(string login, string senha);
        Usuario BuscarUsuarioPeloLogin(string login);
        Usuario BuscarUsuarioPeloCodigoRecuperacao(Guid codigoRecuperacao);
        IEnumerable<Usuario> BuscarUsuariosPelaConta(int contaId);
        Usuario CadastrarNovaSenha(Guid codigoRecuperacao, string senha);
        IEnumerable<Usuario> BuscarUsuariosAdministradores();
        Usuario AdicionarAdministrador(Usuario usuario);
        void ResetarSenha(string email);
    }
}