using Costa.Domain;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Costa.Infra.Data.DAO
{ 
public class ServicoDAO
{

    private readonly string _connectionString =
     @"server=.\SQLexpress;initial catalog=COSTADB;integrated security=true;";
    public void RegistrarServico(Servico servico)
    {
        using (var conexao = new SqlConnection(_connectionString))
        {
            conexao.Open();
            using (var comando = new SqlCommand())
            {
                comando.Connection = conexao;

                string sql = @"INSERT INTO SERVICO 
                                    (ID,NOME, VALOR) VALUES ( @ID, @NOME, @VALOR)";

                comando.Parameters.AddWithValue("@ID", servico.ID);
                comando.Parameters.AddWithValue("@NOME", servico.Nome);
                comando.Parameters.AddWithValue("@VALOR", servico.Valor);


                comando.CommandText = sql;

                comando.ExecuteNonQuery();
            }
        }
    }
    public void DeletarServico(long id)
    {
        using (var conexao = new SqlConnection(_connectionString))
        {
            conexao.Open();

            using (var comando = new SqlCommand())
            {
                comando.Connection = conexao;

                string sql = @"DELETE FROM SERVICO WHERE CPF = @ID";

                comando.Parameters.AddWithValue("@ID", id);

                comando.CommandText = sql;

                comando.ExecuteNonQuery();
            }
        }
    }
    public void AtualizarServico(Servico servico)
    {
        using (var conexao = new SqlConnection(_connectionString))
        {
            conexao.Open();

            using (var comando = new SqlCommand())
            {
                comando.Connection = conexao;

                string sql = @"UPDATE SERVICO 
                                    SET NOME = @NOME, VALOR = @VALOR WHERE ID = @ID";

                comando.Parameters.AddWithValue("@ID", servico.ID);
                comando.Parameters.AddWithValue("@NOME", servico.Nome);
                comando.Parameters.AddWithValue("@VALOR", servico.Valor);


                comando.CommandText = sql;

                comando.ExecuteNonQuery();

            }
        }
    }
    public List<Servico> BuscarTodos()
    {
        var listaServico = new List<Servico>();

        using (var conexao = new SqlConnection(_connectionString))
        {
            conexao.Open();

            using (var comando = new SqlCommand())
            {

                comando.Connection = conexao;

                string sql = @"SELECT ID, NOME, VALOR FROM SERVICO";

                comando.CommandText = sql;

                var leitor = comando.ExecuteReader();

                while (leitor.Read())
                {
                    var servicoBuscado = new Servico
                    (
                        long.Parse(leitor["ID"].ToString()),
                        leitor["NOME"].ToString(),
                        double.Parse(leitor["VALOR"].ToString())
                        

                    );
                    listaServico.Add(servicoBuscado);
                }
            }
        }
        return listaServico;
    }
    public Servico BuscarServicoPorID(long id)
    {

        using (var conexao = new SqlConnection(_connectionString))
        {
            conexao.Open();

            using (var comando = new SqlCommand())
            {

                comando.Connection = conexao;

                string sql = @"SELECT ID, NOME, VALOR FROM SERVICO WHERE ID = @ID";
                comando.CommandText = sql;

                comando.Parameters.AddWithValue("@ID", id);

                var leitor = comando.ExecuteReader();

                while (leitor.Read())
                {
                    var servicoBuscado = new Servico
                    (
                        long.Parse(leitor["ID"].ToString()),
                        leitor["NOME"].ToString(),
                        double.Parse(leitor["VALOR"].ToString())

                    );

                    return servicoBuscado;
                }
            }
        }

        return null;
    }
}
}
