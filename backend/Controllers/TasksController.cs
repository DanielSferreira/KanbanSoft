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
        IDataRepository<User> usersManager;

        public TasksController(AppDB db)
        {
            tasksManager = new TasksManager(db);
            usersManager = new UserManager(db);
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
            return tasksManager.GetAll().Where(e => e.Status != 4);
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
        [HttpPut("UpdateTaskByAdmin")]
        public ActionResult<Task> UpdateTaskByAdmin([FromBody] Task data)
        {
            var user = usersManager.GetEntity(data.IdUser);
            int prevScore = tasksManager.GetEntity(data.Id).Level;
            if (data.Status == 1)
                user.score -= prevScore;
            data.IdUser = 0;
            data.Status = 0;
            usersManager.Update(user);
            tasksManager.Update(data);
            return Ok(data);
        }
        [HttpPut("AddTasktoUser")]
        public ActionResult<Task> AddTasktoUser([FromBody] Task data)
        {
            var user = usersManager.GetEntity(data.IdUser);
            System.Console.WriteLine($" {user.score} - {data.Level} Status: {data.Status}");
            if (user.score + data.Level > 7 && data.Status == 1)
            {
                System.Console.WriteLine($"SOMA");
                return BadRequest("dados para soma passam do permitido");
            }
            else if (data.Status != 1 && user.score - data.Level < 0)
            {
                System.Console.WriteLine($"SUBT");
                return BadRequest("dados para subtração passam do permitido");
            }

            else
            {
                System.Console.WriteLine($"PASSA");
                if (data.Status == 1)
                    user.score += data.Level;
                else
                    user.score -= data.Level;

                usersManager.Update(user);
                tasksManager.Update(data);
            }

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
