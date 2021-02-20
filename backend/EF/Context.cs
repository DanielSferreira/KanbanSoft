using Microsoft.EntityFrameworkCore;

namespace KanbanSoft.EF
{
    public class AppDB : DbContext
    {
        public AppDB(DbContextOptions<AppDB> db)
            : base(db) { }
        public DbSet<User> users {get;set;}
    }
}