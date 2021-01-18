
using Infrastructure.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace E_Learning.Application.Common.Interfaces
{
    public interface IIdentityService
    {
        public string GenerateToken(ApplicationUser user);

    }
}
