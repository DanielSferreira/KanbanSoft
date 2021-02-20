using KanbanSoft.Entity;
using Microsoft.EntityFrameworkCore;

namespace KanbanSoft.Models
{
    public class LoginModel
    {
        internal User test;
        public LoginModel(IEntity e)
        {
            test = (User)e;
        }
    }
}