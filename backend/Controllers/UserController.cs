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
    public class UserController : ControllerBase
    {
        IDataRepository<User> userManager;
        IDataRepository<Task> tasksManager;
        public UserController(AppDB db)
        {
            userManager = new UserManager(db);
            tasksManager = new TasksManager(db);
        }

        [HttpGet]
        public IEnumerable<object> get()
        {
            return userManager.GetAll().Select(x => new
            {
                id = x.Id,
                name = x.name,
                nick = x.nick,
                email = x.email,
                role = x.role,
                active = x.active,
            });
        }
        [HttpPost]
        public ActionResult<User> Post([FromBody] User data)
        {
            data.pass = Crypt.Encrypt(data.pass);
            userManager.Add(data);
            return Ok(data);
        }
        [HttpPost("{id}")]
        public ActionResult<User> getNickName(int id)
        {
            var user = userManager.GetEntity(id);
            if (user != null)
                return Ok(new
                {
                    id = user.Id,
                    name = user.name,
                    nick = user.nick,
                    score = user.score,
                    email = user.email,
                    role = user.role,
                    active = user.active
                });
            else
                return BadRequest("Houve um erro ao buscar o usuario");
        }
        
        [HttpPut]
        public ActionResult<User> Put([FromBody] User data)
        {
            System.Console.WriteLine("A");
            userManager.Update(data);
            return Ok(data);
        }
        [HttpPut("UpdatePasswordByAdmin")]
        public ActionResult<User> UpdatePasswordByAdmin([FromBody] NewPassword data)
        {
            var user = userManager.GetEntity(data.id);
            if (data.newPass != null || data.newPass != "")
                user.pass = Crypt.Encrypt(data.newPass);
            userManager.Update(user);
            return Ok(data);
        }
        [HttpPut("UpdatePasswordByUser")]
        public ActionResult<string> UpdatePasswordByUser([FromBody] NewPassword data)
        {
            var user = userManager.GetEntity(data.id);
            if ((data.newPass != null || data.newPass != "") && data.pass == user.pass)
            {
                user.pass = Crypt.Encrypt(data.newPass);
                userManager.Update(user);
                return Ok("Senha Alterada Com Sucesso");
            }
            return BadRequest("Ok");
        }

        [HttpPut("Deactivate/{id}")]
        public ActionResult<string> Deactivate(int id)
        {
            var user = userManager.GetEntity(id);
            if(user != null)
            {
                user.active = !user.active;
                userManager.Update(user);
                return Ok();
            }
            return BadRequest("Deu Erro ao desativar");
        }

        [HttpDelete]
        public ActionResult<User> Delete([FromBody] User data)
        {
            userManager.Delete(data);
            return Ok(data);
        }
    }
}
