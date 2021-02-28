using System.Collections.Generic;
using System.Linq;
using KanbanSoft.Models;

namespace KanbanSoft.Services
{
    public class TasksTrackManage// : IDataRepository<TaskTrack>
    {
    //     readonly AppDB context;
    //     public TasksTrackManage(AppDB _C)
    //     {
    //         context = _C;
    //     }
    //     IEnumerable<TaskTrack> IDataRepository<TaskTrack>.GetAll()
    //     {
    //         return context.taskTracks.ToList();
    //     }
    //     TaskTrack IDataRepository<TaskTrack>.GetEntity(int id)
    //     {
    //         return context.taskTracks.FirstOrDefault(e => e.Id == id);
    //     }
    //     bool IDataRepository<TaskTrack>.Add(TaskTrack et)
    //     {
    //         try
    //         {
    //             context.taskTracks.Add(et);
    //             context.SaveChanges();
    //             return true;
    //         }
    //         catch (System.Exception)
    //         {
    //             return false;
    //         }
    //     }
    //     bool IDataRepository<TaskTrack>.Update(TaskTrack prevEt, TaskTrack et)
    //     {
    //         try
    //         {
    //             prevEt.Id = et.Id;
    //             prevEt.IdUser = et.IdUser;
    //             prevEt.IdTask = et.IdTask;
    //             prevEt.DeliveryDate = et.DeliveryDate;
    //             prevEt.TrackDate = et.TrackDate;

    //             context.SaveChanges();
    //             return true;
    //         }
    //         catch (System.Exception)
    //         {
    //             return false;
    //         }
    //     }
    //     bool IDataRepository<TaskTrack>.Delete(TaskTrack et)
    //     {
    //         try
    //         {
    //             context.taskTracks.Remove(et);
    //             context.SaveChanges();
    //             return true;
    //         }
    //         catch (System.Exception)
    //         {
    //             return false;
    //         }
    //     }
    }
}