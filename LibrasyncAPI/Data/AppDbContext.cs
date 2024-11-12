using LibrasyncAPI.Entity;
using Microsoft.EntityFrameworkCore;

namespace LibrasyncAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) 
            : base(options) 
        { 
        }

        public DbSet<BookEntity> Books { get; set; }
    }
}
