using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KanbanSoft.Models
{
    public class TaskTrack: Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] 
        public int Id { get; set; }
        public string IdTask { get; set; }
        public string IdUser { get; set; }
        public string TrackDate { get; set; }
        public string DeliveryDate { get; set; }
    }
}