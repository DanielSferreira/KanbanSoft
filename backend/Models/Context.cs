using Microsoft.EntityFrameworkCore;

namespace KanbanSoft.Models
{
    public class AppDB : DbContext
    {
        public AppDB(DbContextOptions<AppDB> db)
            : base(db) { }
        public DbSet<User> users {get;set;}
        public DbSet<Task> tasks {get;set;}
        public DbSet<TaskTrack> taskTracks {get;set;}
    }
}