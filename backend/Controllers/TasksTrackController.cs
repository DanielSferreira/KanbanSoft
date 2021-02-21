using System.Linq;
using Microsoft.AspNetCore.Mvc;
using KanbanSoft.Models;
using KanbanSoft.Helpers;
using System.Collections.Generic;
using KanbanSoft.Services;

namespace KanbanSoft.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TasksTrackController : ControllerBase
    {

        IDataRepository<TaskTrack> tasksTrackManager;

        public TasksTrackController(AppDB db)
        {
            tasksTrackManager = new TasksTrackManage(db);
        }

        [HttpGet]
        public IEnumerable<TaskTrack> get()
        {
            return tasksTrackManager.GetAll();
        }
        [HttpPost]
        public ActionResult<TaskTrack> Post([FromBody] TaskTrack data)
        {
            tasksTrackManager.Add(data);
            return Ok(data);
        }
        [HttpPut]
        public ActionResult<TaskTrack> Put([FromBody] TaskTrack data)
        {
            TaskTrack prevData = tasksTrackManager.GetEntity(data.Id);
            tasksTrackManager.Update(prevData, data);

            return Ok(data);
        }
        [HttpDelete]
        public ActionResult<TaskTrack> Delete([FromBody] TaskTrack data)
        {
            tasksTrackManager.Delete(data);
            return Ok(data);
        }
    }
}
