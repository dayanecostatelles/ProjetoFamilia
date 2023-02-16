using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Costa.Domain.Repositories
{
    public interface IServicoRepository
    {
        void RegistrarServico(Servico servico);
        Servico BuscarServicoPorID(long ID);
        List<Servico> BuscarTodosServico();
        void AtualizarServico(Servico servico);
        void DeletarServico(long ID);
    }
}
