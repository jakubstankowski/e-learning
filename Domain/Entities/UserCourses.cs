using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace E_Learning.Domain.Entities
{
    public class UserCourses
    {
        public int Id { get; set; }

        public IdentityUser IdentityUser { get; set; }

        public Course Course { get; set; }


    }
}
