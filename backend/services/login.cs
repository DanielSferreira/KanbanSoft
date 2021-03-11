using System;
using System.Linq;
using KanbanSoft.Helpers;
using KanbanSoft.Models;
using Microsoft.Extensions.Options;

namespace KanbanSoft.Services
{
    public class LoginService
    {
        private AppDB context;
        private readonly IOptions<Configs> config;
        public LoginService(IOptions<Configs> _config, AppDB _context)
        {
            this.config = _config;
            context = _context;
        }
        private bool status = false;
        public LoginHelper Login(string usuario, string senha)
        {
            try
            {
                var user_autenticado = context.users
               .Where(p => p.email == usuario)
               .AsEnumerable()
               .Where(p => Crypt.Decrypt(senha, p.pass) == true)
               .Select(p => new User
               {
                   Id = p.Id,
                   email = p.email,
                   name = p.name
               })
               .First();

                senha = "";

                string tk = GenerateToken.set(user_autenticado, config.Value.JwtKey.ToString());

                status = !status;
                return new LoginHelper()
                {
                    status = true,
                    user = user_autenticado.Id,
                    token = tk
                };
            }
            catch (System.Exception)
            {

                return new LoginHelper()
                {
                    status = false,
                    user = "",
                    token = ""
                };
                throw;
            }
        }

        public bool Logout()
        {
            return status = false;
        }

        public bool Status() => status;
        public bool Status(bool newStatus) => status = newStatus;
    }
}