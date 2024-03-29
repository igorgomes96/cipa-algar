using AutoMapper;
using AutoMapper.QueryableExtensions;
using Cipa.Application.Interfaces;
using Cipa.Domain.Entities;
using Cipa.WebApi.Authentication;
using Cipa.WebApi.Filters;
using Cipa.WebApi.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace Cipa.WebApi.Controllers
{
    [Authorize(PoliticasAutorizacao.UsuarioSESMT)]
    [Route("api/[controller]")]
    [ApiController]
    public class EmpresasController : Controller
    {
        private readonly IEmpresaAppService _empresaAppService;
        private readonly IMapper _mapper;
        public EmpresasController(IEmpresaAppService empresaAppService, IMapper mapper)
        {
            _empresaAppService = empresaAppService;
            _mapper = mapper;
        }

        [HttpGet]
        [Pagination]
        public IEnumerable<EmpresaViewModel> GetEmpresas() =>
            _empresaAppService.BuscaEmpresasPorConta(ContaId).AsQueryable().ProjectTo<EmpresaViewModel>(_mapper.ConfigurationProvider);

        [HttpGet("{id}")]
        public EmpresaViewModel GetEmpresa(int id) =>
            _mapper.Map<EmpresaViewModel>(_empresaAppService.BuscarPeloId(id));

        [Authorize(PoliticasAutorizacao.UsuarioSESMTContaValida)]
        [HttpPost]
        public EmpresaViewModel PostEmpresa(EmpresaViewModel empresa)
        {
            var novaEmpresa = _mapper.Map<Empresa>(empresa);
            novaEmpresa.ContaId = ContaId;
            return _mapper.Map<EmpresaViewModel>(_empresaAppService.Adicionar(novaEmpresa));
        }

        [Authorize(PoliticasAutorizacao.UsuarioSESMTContaValida)]
        [HttpPut("{id}")]
        public IActionResult PutEmpresa(int id, EmpresaViewModel empresa)
        {
            empresa.Id = id;
            _empresaAppService.Atualizar(_mapper.Map<Empresa>(empresa));
            return NoContent();
        }

        [Authorize(PoliticasAutorizacao.UsuarioSESMTContaValida)]
        [HttpDelete("{id}")]
        public EmpresaViewModel DeleteEmpresa(int id) =>
            _mapper.Map<EmpresaViewModel>(_empresaAppService.Excluir(id));
    }
}