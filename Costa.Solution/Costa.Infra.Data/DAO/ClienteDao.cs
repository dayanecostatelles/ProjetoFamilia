using Costa.Domain;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Costa.Infra.Data.DAO
{ 
public class ClienteDAO
{

    private readonly string _connectionString =
     @"server=.\SQLexpress;initial catalog=COSTADB;integrated security=true;";
    public void RegistrarCliente(Cliente cliente)
    {
        using (var conexao = new SqlConnection(_connectionString))
        {
            conexao.Open();
            using (var comando = new SqlCommand())
            {
                comando.Connection = conexao;

                string sql = @"INSERT INTO CLIENTE 
                                    (CPF,NOME, DATANASCIMENTO) VALUES ( @CPF, @NOME, @DATANASCIMENTO)";

                comando.Parameters.AddWithValue("@CPF", cliente.CPF);
                comando.Parameters.AddWithValue("@NOME", cliente.Nome);
                comando.Parameters.AddWithValue("@DATANASCIMENTO", cliente.DataNascimento);


                comando.CommandText = sql;

                comando.ExecuteNonQuery();
            }
        }
    }
    public void DeletarCliente(long cpf)
    {
        using (var conexao = new SqlConnection(_connectionString))
        {
            conexao.Open();

            using (var comando = new SqlCommand())
            {
                comando.Connection = conexao;

                string sql = @"DELETE FROM CLIENTE WHERE CPF = @CPF";

                comando.Parameters.AddWithValue("@CPF", cpf);

                comando.CommandText = sql;

                comando.ExecuteNonQuery();
            }
        }
    }
    public void AtualizarCliente(Cliente cliente)
    {
        using (var conexao = new SqlConnection(_connectionString))
        {
            conexao.Open();

            using (var comando = new SqlCommand())
            {
                comando.Connection = conexao;

                string sql = @"UPDATE CLIENTE 
                                    SET NOME = @NOME, DATANASCIMENTO = @DATANASCIMENTO WHERE CPF = @CPF";

                comando.Parameters.AddWithValue("@CPF", cliente.CPF);
                comando.Parameters.AddWithValue("@NOME", cliente.Nome);
                comando.Parameters.AddWithValue("@DATANASCIMENTO", cliente.DataNascimento);


                comando.CommandText = sql;

                comando.ExecuteNonQuery();

            }
        }
    }
    public List<Cliente> BuscarTodos()
    {
        var listaCliente = new List<Cliente>();

        using (var conexao = new SqlConnection(_connectionString))
        {
            conexao.Open();

            using (var comando = new SqlCommand())
            {

                comando.Connection = conexao;

                string sql = @"SELECT ID, CPF, NOME, DATANASCIMENTO FROM CLIENTE";

                comando.CommandText = sql;

                var leitor = comando.ExecuteReader();

                while (leitor.Read())
                {
                    var clienteBuscado = new Cliente
                    (
                        long.Parse(leitor["ID"].ToString()),
                        leitor["NOME"].ToString(),
                        long.Parse(leitor["CPF"].ToString()),
                        Convert.ToDateTime(leitor["DATANASCIMENTO"])

                    );
                    listaCliente.Add(clienteBuscado);
                }
            }
        }
        return listaCliente;
    }
    public Cliente BuscarPorCpf(long cpf)
    {

        using (var conexao = new SqlConnection(_connectionString))
        {
            conexao.Open();

            using (var comando = new SqlCommand())
            {

                comando.Connection = conexao;

                string sql = @"SELECT ID, NOME, CPF, DATANASCIMENTO FROM CLIENTE WHERE CPF = @CPF";
                comando.CommandText = sql;

                comando.Parameters.AddWithValue("@CPF", cpf);

                var leitor = comando.ExecuteReader();

                while (leitor.Read())
                {
                    var clienteBuscado = new Cliente
                    (
                        long.Parse(leitor["ID"].ToString()),
                        leitor["NOME"].ToString(),
                        long.Parse(leitor["CPF"].ToString()),
                        Convert.ToDateTime(leitor["DATANASCIMENTO"])

                    );

                    return clienteBuscado;
                }
            }
        }

        return null;
    }
}
}
