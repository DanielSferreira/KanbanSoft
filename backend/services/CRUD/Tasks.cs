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

        public Task UpdateOnly(Task newTask)
        {
            var original = context.tasks.Single(x => x.Id == newTask.Id);

            if (newTask.IdUser != 0)
                original.IdUser = newTask.IdUser;
            if (newTask.Level != 0)
                original.Level = newTask.Level;
            if (newTask.Name != null)
                original.Name = newTask.Name;
            if (newTask.Description != null)
                original.Description = newTask.Description;
            if (newTask.Title != null)
                original.Title = newTask.Title;
            if (newTask.TrackDate != null)
                original.TrackDate = newTask.TrackDate;
            if (newTask.DateRelease != null)
                original.DateRelease = newTask.DateRelease;
            if (newTask.DeliveryDate != null)
                original.DeliveryDate = newTask.DeliveryDate;

            context.SaveChanges();
            return original;
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
                var tempTask = context.tasks.Select(x => new { x.Title, x.Status }).FirstOrDefault(x => x.Title == et.Title && (x.Status == 0 || x.Status == 1 || x.Status == 2));

                if (tempTask is not null)
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
        bool IDataRepository<Task>.Update(Task newTask)
        {
            try
            {
                var original = context.tasks.Single(x => x.Id == newTask.Id);

                if (newTask.IdUser != 0)
                    original.IdUser = newTask.IdUser;
                if (newTask.Level != 0)
                    original.Level = newTask.Level;
                if (newTask.Name != null)
                    original.Name = newTask.Name;
                if (newTask.Description != null)
                    original.Description = newTask.Description;
                if (newTask.Title != null)
                    original.Title = newTask.Title;
                if (newTask.TrackDate != null)
                    original.TrackDate = newTask.TrackDate;
                if (newTask.DateRelease != null)
                    original.DateRelease = newTask.DateRelease;
                if (newTask.DeliveryDate != null)
                    original.DeliveryDate = newTask.DeliveryDate;

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