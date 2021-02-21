using System.Collections.Generic;
using System.Linq;
using KanbanSoft.Models;

namespace KanbanSoft.Services
{
    public class TasksManager : IDataRepository<Task>
    {
        readonly AppDB context;
        public TasksManager(AppDB _C)
        {
            context = _C;
        }
        IEnumerable<Task> IDataRepository<Task>.GetAll()
        {
            return context.tasks.ToList();
        }
        Task IDataRepository<Task>.GetEntity(int id)
        {
            return context.tasks.FirstOrDefault(e => e.Id == id);
        }
        bool IDataRepository<Task>.Add(Task et)
        {
            try
            {
                context.tasks.Add(et);
                context.SaveChanges();
                return true;
            }
            catch (System.Exception)
            {
                return false;
            }
        }
        bool IDataRepository<Task>.Update(Task prevEt, Task et)
        {
            try
            {
                prevEt.name = et.name;
                prevEt.title = et.title;
                prevEt.description = et.description;
                prevEt.status = et.status;
                prevEt.role = et.role;

                context.SaveChanges();
                return true;
            }
            catch (System.Exception)
            {
                return false;
            }
        }
        bool IDataRepository<Task>.Delete(Task et)
        {
            try
            {
                context.tasks.Remove(et);
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