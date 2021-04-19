
using System.Threading.Tasks;
using E_Learning.Domain.Entities;
using Infrastructure.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace E_Learning.Application.Common.Interfaces
{
    public interface IIdentityService
    {
        public string GenerateToken(ApplicationUser user);

        public string GetUserId();

        public Task<bool> UserExist(string email);

    }
}
