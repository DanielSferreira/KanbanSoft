using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using KanbanSoft.Models;
using KanbanSoft.Helpers;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using System;

namespace KanbanSoft.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserLoginController : ControllerBase
    {
        private AppDB context;
        private readonly IOptions<Configs> config;
        public UserLoginController(IOptions<Configs> _config, AppDB _context)
        {
            this.config = _config;
            context = _context;
        }

        [HttpGet]
        public string Get(User user)
        {
            var a = context.users.Where(p => p.email == user.email).Count();
            if (a > 0)
                return "null";
            else
            {
                var result = context.users.Add(new User()
                {
                    pass = user.pass,
                    email = user.email,
                    name = user.name,
                    nick = user.nick
                });
                context.SaveChanges();

                return "Confia!" + a.ToString();
            }
        }

        [HttpGet("logar/{usuario}/{senha}")]
        public object login(string usuario, string senha)
        {
            var user_autenticado = context.users
               .Where(p => p.email == usuario)
               .AsEnumerable()
               .Where(p => Crypt.Decrypt(senha, p.pass) == true)
               .Select(p => new User
               {
                   nick = p.nick,
                   email = p.email,
                   name = p.name
               })
               .First();
            
            senha = "";

            string tk = GenerateToken.set(user_autenticado, config.Value.JwtKey.ToString());

            return new { 
                user = user_autenticado.nick,
                token = tk
            };
        }
        
        [HttpGet]
        [Route("logado")]
        [Authorize]
        public string logado() => "BatataDoce";

    }
}
