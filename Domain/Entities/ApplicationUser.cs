using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace E_Learning.Domain.Entities
{
    public class ApplicationUser : IdentityUser
    {
     
        public ICollection<Course> Courses { get; set; }

    }
}
