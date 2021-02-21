using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KanbanSoft.Models
{
    public class Task: Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] 
        public int Id { get; set; }

        public string name { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public int status { get; set; }
        public string role { get; set; }
    }
}