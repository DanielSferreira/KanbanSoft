using System.Security.Cryptography;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KanbanSoft.EF
{
    public class User
    {
        [Key]
        public int Key { get; set; }

        public string nome { get; set; }
        public string email { get; set; }
        public string senha { get; set; }
        public string nick { get; set; }
    }
}