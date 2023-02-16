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
    public class ServicoRepository : IServicoRepository
    {
        ServicoDAO _servicoDAO;
        public ServicoRepository()
        {
            _servicoDAO = new ServicoDAO();
        }


        public void AtualizarServico(Servico servico)
        {
            _servicoDAO.AtualizarServico(servico);
        }

        public void DeletarServico(long id)
        {
            _servicoDAO.DeletarServico(id);
        }

        public void RegistrarServico(Servico servico)
        {
            _servicoDAO.RegistrarServico(servico);
        }

        public Servico BuscarServicoPorID(long id)
        {
            return _servicoDAO.BuscarServicoPorID(id);
        }

        public List<Servico> BuscarTodosServico()
        {
            return _servicoDAO.BuscarTodos();
        }

        
    }
}
