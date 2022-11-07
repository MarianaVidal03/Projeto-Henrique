using Microsoft.EntityFrameworkCore;

namespace CatalogoDeProdutos.Models
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options)
            : base(options)
        {
        }

        public DbSet<DecoracaoDeCasa> DecoracaoDeCasas { get; set; }
        public DbSet<Livro> Livros { get; set; }
        public DbSet<Roupa> Roupas { get; set; }
        public DbSet<UtensiliosDeCozinha> UtensiliosDeCozinhas { get; set; }

    }
}