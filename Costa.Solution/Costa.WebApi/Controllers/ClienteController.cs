using Costa.Domain;
using Costa.Domain.Repositories;
using Costa.Infra.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace Costa.WebApi.Controllers
{

    [ApiController]
    [Route("api/clientes")]
    public class ClienteController : ControllerBase
    {
        private readonly IClienteRepository _clienteRepository;
        public ClienteController()
        {
            _clienteRepository = new ClienteRepository();
        }
        [HttpPost]
        public IActionResult PostClientes(Cliente novoCliente)
        {
            try
            {
                if (novoCliente == null)
                    return NoContent();

                novoCliente.Validar();

                if (_clienteRepository.BuscarCLientePorCpf(novoCliente.CPF) != null)
                    return BadRequest("CPF ja cadastrado!");

                _clienteRepository.RegistrarCliente(novoCliente);

                return Ok(novoCliente);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }


        [HttpGet]
        public IActionResult GetClientes()
        {
            try
            {
                List<Cliente> clientes = _clienteRepository.BuscarTodosClientes();
                if (clientes == null)
                    return BadRequest("Nenhum cliente localizado!");
                return Ok(clientes);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpGet("{cpf}")]
        public IActionResult GetClientePorCpf(long cpf)
        {
            try
            {
                var clientesEncontrada = _clienteRepository.BuscarCLientePorCpf(cpf);
                if (clientesEncontrada == null)
                    return BadRequest("Nenhum cliente localizado!");
                return Ok(clientesEncontrada);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpPut()]
        public IActionResult EditarCliente(Cliente novoCliente)
        {
            try
            {
                _clienteRepository.AtualizarCliente(novoCliente);

                return Ok(novoCliente);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpDelete("{cpf}")]
        public IActionResult DeletarCliente(long cpf)
        {
            try
            {
                _clienteRepository.DeletarCliente(cpf);

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}



