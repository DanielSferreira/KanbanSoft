namespace KanbanSoft.Entity
{
    public class User : IEntity
    {
        public string name {get; set;}
        public string nick {get; set;}
        public string email {get; set;}
        public string senha {get; set;}
    }
}