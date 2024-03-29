using Cipa.Domain.Entities;
using Cipa.Application.Repositories;
using Cipa.Infra.Data.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using Cipa.Domain.Helpers;

namespace Cipa.Infra.Data.Repositories
{
    public class UsuarioRepository : RepositoryBase<Usuario>, IUsuarioRepository
    {
        public UsuarioRepository(CipaContext db) : base(db) { }

        public Usuario BuscarUsuario(string login, string senha)
        {
            return DbSet.FirstOrDefault(u => u.Login == login && u.Senha == senha);
        }

        public Usuario BuscarUsuarioPeloEmail(string email)
        {
            return DbSet.FirstOrDefault(u => u.Email == email && u.MetodoAutenticacao == EMetodoAutenticacao.Email);
        }

        public Usuario BuscarUsuarioPeloLogin(string login)
        {
            return DbSet.FirstOrDefault(u => u.Login == login);
        }

        public Usuario BuscarUsuarioPeloCodigoRecuperacao(Guid codigo)
        {
            return DbSet.FirstOrDefault(u => u.CodigoRecuperacao == codigo);
        }

        public IEnumerable<Usuario> BuscarUsuariosAdministradores()
        {
            return DbSet.Where(u => u.Perfil == PerfilUsuario.Administrador);
        }

        public IEnumerable<Usuario> BuscarUsuariosPelaConta(int contaId)
        {
            return DbSet.Where(u => u.ContaId == contaId);
        }
    }
}