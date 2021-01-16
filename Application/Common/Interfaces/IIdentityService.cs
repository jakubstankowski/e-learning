using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity.EntityFramework;

namespace E_Learning.Application.Common.Interfaces
{
   public interface IIdentityService
    {
        public string GenerateToken(IdentityUser identityUser);

    }
}
