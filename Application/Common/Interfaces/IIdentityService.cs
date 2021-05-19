using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace E_Learning.Application.Common.Interfaces
{
    public interface IIdentityService
    {
        public Task<string> GenerateToken(IdentityUser user);

        public string GetUserId();

        public Task<bool> UserExist(string email);
    }
}
