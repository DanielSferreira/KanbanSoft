using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KanbanSoft.Models
{
    public class Login: Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] 
        public int Id { get; set; }

        public int IdUser { get; set; }
        public string email { get; set; }
        public string pass { get; set; }
        public string nick { get; set; }
        public string role { get; set; }
    }
}