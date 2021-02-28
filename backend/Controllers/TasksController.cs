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
    public class TasksController : ControllerBase
    {

        IDataRepository<Task> tasksManager;

        public TasksController(AppDB db)
        {
            tasksManager = new TasksManager(db);
        }

        [HttpGet]
        public IEnumerable<Task> get()
        {
            return tasksManager.GetAll();
        }
        [HttpPost]
        public ActionResult<Task> Post([FromBody] Task data)
        {
            tasksManager.Add(data);
            return Ok(data);
        }
        [HttpPut]
        public ActionResult<Task> Put([FromBody] Task data)
        {
            System.Console.WriteLine($"{data.Name} e {data.Status}");
            Task prevData = tasksManager.GetEntity(data.Id);
            tasksManager.Update(prevData, data);

            return Ok(data);
        }
        [HttpDelete]
        public ActionResult<Task> Delete([FromBody] Task data)
        {
            tasksManager.Delete(data);
            return Ok(data);
        }
    }
}
