using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Learning.Application.Common.Dto;

namespace E_Learning.Application.ApplicationUser.Queries
{
    public class UserCoursesDto
    {
        public IEnumerable<CourseDto> Courses { get; set; }

    }
}
