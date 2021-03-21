using System.Linq;
using Microsoft.AspNetCore.Mvc;
using KanbanSoft.Models;
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

        [HttpGet("{id}")]
        public Task getId(int id)
        {
            return tasksManager.GetEntity(id);
        }
        [HttpGet("getByStatus/{s}")]
        public IEnumerable<Task> getByStatus(int s)
        {
            return tasksManager.GetAll().Where(e => e.Status == s);
        }
        [HttpGet("getDispTasks")]
        public IEnumerable<Task> getDispTasks()
        {
            return tasksManager.GetAll().Where(e => e.Status == 0 || e.Status == 1 || e.Status == 2);
        }
        [HttpGet("getByUser/{s}")]
        public IEnumerable<Task> getByUser(int s)
        {
            return tasksManager.GetAll().Where(e => e.IdUser == s);
        }
        [HttpPost]
        public ActionResult<Task> Post([FromBody] Task data)
        {
            bool result = tasksManager.Add(data);
            if (result)
                return Ok(data);
            else
                return BadRequest(new { StatusCode = 401, Message = "Task já Cadastrada" });
        }
        [HttpPut]
        public ActionResult<Task> Put([FromBody] Task data)
        {
            tasksManager.Update(data);
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
