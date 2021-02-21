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
using KanbanSoft.Services;

namespace KanbanSoft.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        private AppDB context;
        private LoginService loginService;
        private readonly IOptions<Configs> config;
        public LoginController(IOptions<Configs> _config, AppDB _context)
        {
            config = _config;
            context = _context;
            loginService = new LoginService(config, context);
        }

        [HttpGet]
        public ActionResult Get()
        {
            return Ok();
        }

        [HttpPost]
        public ActionResult Login([FromBody] User a)
        {
            LoginHelper user = loginService.Login(a.email, a.pass);
            
            if (user.status)
                return Ok(user);
            else
                return BadRequest(user);
        }
        [HttpPost("Logout")]
        public ActionResult Logout([FromBody] LoginHelper login)
        {
            bool user = loginService.Logout();
            
            if (!user)
                return Ok(login.user+" Deslogado com Sucesso");
            else
                return BadRequest("Erro ");
        }

        [HttpGet]
        [Route("DashBoard")]
        [Authorize]
        public string logado() => "BatataDoce";

    }
}
