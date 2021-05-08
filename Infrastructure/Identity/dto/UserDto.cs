using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Identity.dto
{
    public class UserDto
    {
        public string Email { get; set; }

        public string Token { get; set; }

        public IEnumerable<string> Roles { get; set; }
    }
}
