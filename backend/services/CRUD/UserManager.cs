using System.Collections.Generic;
using System.Linq;
using KanbanSoft.Models;

namespace KanbanSoft.Services
{
    public class UserManager : IDataRepository<User>
    {
        readonly AppDB context;
        public UserManager(AppDB _C)
        {
            context = _C;
        }
        IEnumerable<User> IDataRepository<User>.GetAll()
        {
            return context.users.ToList();
        }
        User IDataRepository<User>.GetEntity(int id)
        {
            return context.users.FirstOrDefault(e => e.Id == id);
        }
        bool IDataRepository<User>.Add(User et)
        {
            try
            {
                context.users.Add(et);
                context.SaveChanges();
                return true;
            }
            catch (System.Exception)
            {
                return false;
            }
        }
        bool IDataRepository<User>.Update(User prevEt, User et)
        {
            try
            {
                prevEt.name = et.name;
                prevEt.nick = et.nick;
                prevEt.email = et.email;
                context.SaveChanges();
                return true;
            }
            catch (System.Exception)
            {
                return false;
            }
        }
        bool IDataRepository<User>.Delete(User et)
        {
            try
            {
                context.users.Remove(et);
                context.SaveChanges();
                return true;
            }
            catch (System.Exception)
            {
                return false;
            }
        }
    }
}