using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Learning.Domain.Entities
{
    public class UserCourses
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public ApplicationUser ApplicationUser { get; set; }

        public int CourseId { get; set; }

        public Course Course { get; set; }


    }
}
