using Costa.Domain;
using Costa.Domain.Repositories;
using Costa.Infra.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace Costa.WebApi.Controllers
{

    [ApiController]
    [Route("api/servico")]
    public class servicoController : ControllerBase
    {

        private readonly IServicoRepository _servicoRepository;
        public servicoController()
        {
            _servicoRepository = new ServicoRepository();
        }
        [HttpPost]
        public IActionResult PostServico(Servico novoServico)
        {
            try
            {
                if (novoServico == null)
                    return NoContent();

                novoServico.Validar();

                if (_servicoRepository.BuscarServicoPorID(novoServico.ID) != null)
                    return BadRequest("ID ja cadastrado!");

                _servicoRepository.RegistrarServico(novoServico);

                return Ok(novoServico);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }


        [HttpGet]
        public IActionResult Getservico()
        {
            try
            {
                List<Servico> servico = _servicoRepository.BuscarTodosServico();
                if (servico == null)
                    return BadRequest("Nenhum servico localizado!");
                return Ok(servico);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpGet("{id}")]
        public IActionResult GetServicoPorID(long id)
        {
            try
            {
                var servicoEncontrada = _servicoRepository.BuscarServicoPorID(id);
                if (servicoEncontrada == null)
                    return BadRequest("Nenhum servico localizado!");
                return Ok(servicoEncontrada);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpPut()]
        public IActionResult EditarServico(Servico novoServico)
        {
            try
            {
                _servicoRepository.AtualizarServico(novoServico);

                return Ok(novoServico);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpDelete("{id}")]
        public IActionResult DeletarServico(long id)
        {
            try
            {
                _servicoRepository.DeletarServico(id);

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}



