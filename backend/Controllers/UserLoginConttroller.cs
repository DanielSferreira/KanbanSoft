using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using KanbanSoft.EF;
using KanbanSoft.Helpers;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace KanbanSoft.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserLoginController : ControllerBase
    {
        private AppDB context;
        private readonly IOptions<Configs> config;
        private Entity.User user;
        public UserLoginController(IOptions<Configs> _config, AppDB _context)
        {
            this.config = _config;
            this.context = _context;
            this.user = new Entity.User()
            {
                email = "d2sferreira@outlook.com",
                name = "Daniel",
                nick = "Dan",
                senha = Crypt.Encrypt("123")
            };

        }
        [HttpGet("Opa")]
        public bool Opa() =>
            Crypt.Decrypt("123", user.senha);

        [HttpGet]
        public string Get()
        {
            var a = context.users.Where(p => p.email == user.email).Count();
            if (a > 0)
                return "null";
            else
            {
                var result = context.users.Add(new EF.User()
                {
                    senha = user.senha,
                    email = user.email,
                    nome = user.name,
                    nick = user.nick
                });
                context.SaveChanges();

                return "Confia!" + a.ToString();
            }
        }

        [HttpGet("logar/{usuario}/{senha}/{hashTest}")]
        public IEnumerable<object> login(string usuario, string senha, string hashTest)
            => context.users
                .Where(p => p.email == usuario)
                .AsEnumerable()
                .Where(p => Crypt.Decrypt(senha, p.senha) == true)
                .Select(p => new { 
                    nick = p.nick, email = p.email 
                })
                .AsEnumerable();

    }
}
