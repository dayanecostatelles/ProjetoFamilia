using Costa.Domain.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Costa.Domain
{
    public class Servico
    {
        public long ID { get; set; }
        public string Nome { get; set; }
        public double Valor { get; set; }

        public int Tipo { get; set; }


        public Servico(long id, string nome, double valor, int tipo)
        {
            this.ID = id;
            this.Nome = nome;
            this.Valor = valor;
            this.Tipo = tipo;

        }
        public void Validar()
        {
            if (string.IsNullOrEmpty(Nome))
                throw new ServicoDomainException("Nome é obrigatório!");
            if (Valor < 0)
                throw new ServicoDomainException("O valor do servico é obrigatório");
            if (Tipo <0 || Tipo >1)
                throw new ServicoDomainException("O tipo de serviço invalido");
        }
    }

}



