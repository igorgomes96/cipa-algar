using Cipa.Domain.Entities;
using System;
using System.Collections.Generic;

namespace Cipa.Application.Repositories
{
    public interface IUsuarioRepository : IRepositoryBase<Usuario>
    {
        Usuario BuscarUsuarioPeloEmail(string email);
        Usuario BuscarUsuarioPeloLogin(string login);
        Usuario BuscarUsuario(string email, string senha);
        IEnumerable<Usuario> BuscarUsuariosPelaConta(int contaId);
        Usuario BuscarUsuarioPeloCodigoRecuperacao(Guid codigo);
        IEnumerable<Usuario> BuscarUsuariosAdministradores();

    }
}