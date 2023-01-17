using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Costa.Domain.Exceptions
{
    public class ClienteDomainException : Exception
    {
        public ClienteDomainException(string mensagem) : base(mensagem)
        {

        }
    }
}
