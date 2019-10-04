using System.Data.Entity;

namespace CrudAspNetMvc1N.Models
{
    public class LojaContext : DbContext
    {
        //Aponta para a String de Conexao
        public LojaContext() : base("Loja") { }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Consultor> Consultores { get; set; }
        public DbSet<Telefone> Telefones { get; set; }
    }
}