using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Costa.Domain.Repositories
{
    public interface IClienteRepository
    {
        void RegistrarCliente(Cliente cliente);
        Cliente BuscarCLientePorCpf(long cpf);
        List<Cliente> BuscarTodosClientes();
        void AtualizarCliente(Cliente cliente);
        void DeletarCliente(long cpf);
    }
}
