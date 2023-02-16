using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Costa.Domain.Exceptions
{
    public class ServicoDomainException : Exception
    {
        public ServicoDomainException(string mensagem) : base(mensagem)
        {

        }
    }
}
