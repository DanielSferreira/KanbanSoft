using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KanbanSoft.Models
{
    public class TaskTrack: Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] 
        public int Id { get; set; }
        public int IdTask { get; set; }
        public int IdUser { get; set; }
        public System.DateTime TrackDate { get; set; }
        public System.DateTime DeliveryDate { get; set; }
    }
}