using Costa.Domain;
using Costa.Domain.Repositories;
using Costa.Infra.Data.DAO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Costa.Infra.Data
{
    public class ClienteRepository : IClienteRepository
    {
        ClienteDAO _clienteDAO;
        public ClienteRepository()
        {
            _clienteDAO = new ClienteDAO();
        }


        public void AtualizarCliente(Cliente cliente)
        {
            _clienteDAO.AtualizarCliente(cliente);
        }

        public void DeletarCliente(long cpf)
        {
            _clienteDAO.DeletarCliente(cpf);
        }

        public void RegistrarCliente(Cliente cliente)
        {
            _clienteDAO.RegistrarCliente(cliente);
        }

        public Cliente BuscarCLientePorCpf(long cpf)
        {
            return _clienteDAO.BuscarPorCpf(cpf);
        }

        public List<Cliente> BuscarTodosClientes()
        {
            return _clienteDAO.BuscarTodos();
        }
    }
}
