using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public interface IIdentityService
    {
        public Task<string> GenerateToken(IdentityUser user);

        public string GetUserId();

        public Task<bool> UserExist(string email);


    }
}
