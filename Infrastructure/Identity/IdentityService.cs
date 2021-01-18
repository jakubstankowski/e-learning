using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using E_Learning.Application.Common.Interfaces;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Infrastructure.Identity
{
    public class IdentityService : IIdentityService
    {
        private readonly IConfiguration _config;

        public IdentityService(IConfiguration config)
        {
            _config = config;
        }

        public string GenerateToken(ApplicationUser user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Expires = DateTime.UtcNow.AddHours(3),
                Subject = new ClaimsIdentity(new[]
           {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email)
            }),
                SigningCredentials = new SigningCredentials(key: securityKey, algorithm: SecurityAlgorithms.HmacSha256Signature)
            };

            var Securitytoken = new JwtSecurityTokenHandler().CreateToken(tokenDescriptor);


            return new JwtSecurityTokenHandler().WriteToken(Securitytoken);
        }
    }
}
