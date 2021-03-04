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
                var tempTask = context.tasks.Select(x=> new {x.Title,x.Status}).FirstOrDefault(x => x.Title == et.Title && (x.Status == 0 || x.Status == 1 ||x.Status == 2));

                if(tempTask is not null)
                    return false;
                
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
            catch (System.Exception)
            {

                throw;
            }
        }
        bool IDataRepository<Task>.Update(Task prevEt, Task et)
        {
            try
            {
                prevEt.Name = et.Name;
                prevEt.Title = et.Title;
                prevEt.Description = et.Description;
                prevEt.Status = et.Status;
                prevEt.DateRelease = et.DateRelease;
                prevEt.DeliveryDate = et.DeliveryDate;
                prevEt.IdUser = et.IdUser;
                prevEt.TrackDate = et.TrackDate;
                prevEt.Level = et.Level;

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