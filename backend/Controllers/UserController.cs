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

        public UserController(AppDB db)
        {
            userManager = new UserManager(db);
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
                    name = user.name,
                    nick = user.nick,
                    email = user.email
                });
            else
                return BadRequest("Houve um erro ao buscar o usuario");
        }
        [HttpPut]
        public ActionResult<User> Put([FromBody] User data)
        {
            userManager.Update(data);
            return Ok(data);
        }
        [HttpDelete]
        public ActionResult<User> Delete([FromBody] User data)
        {
            userManager.Delete(data);
            return Ok(data);
        }
    }
}
