using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Learning.Application.Common.Interfaces;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Infrastructure.Identity
{
    public class IdentityService : IIdentityService
    {
        public string GenerateToken(IdentityUser identityUser)
        {
            return "token";
        }
    }
}
