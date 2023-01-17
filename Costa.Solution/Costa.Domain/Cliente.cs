using Costa.Domain.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Costa.Domain
{
    public class Cliente
    {
        public long ID { get; set; }
        public string Nome { get; set; }
        public long CPF { get; set; }
        public DateTime DataNascimento { get; set; }

        public Cliente(long id, string nome, long cpf, DateTime dataNascimento)
        {
            this.ID = id;
            this.Nome = nome;
            this.CPF = cpf;
            this.DataNascimento = dataNascimento;
        }
        public void Validar()
        {
            if (CPF == 0)
                throw new ClienteDomainException("CPF é obrigatório!");
            if (string.IsNullOrEmpty(Nome))
                throw new ClienteDomainException("Nome é obrigatório!");
            if (DataNascimento >= DateTime.Now)
                throw new ClienteDomainException("A data de nascimento não pode ser maior que a atual");
        }
    }



}
