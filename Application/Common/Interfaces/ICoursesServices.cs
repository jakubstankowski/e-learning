using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Learning.Domain.Model;

namespace E_Learning.Application.Common.Interfaces
{
   public  interface ICoursesServices
    {
        public IEnumerable<Courses> GetAllCourses();

        public void AddNewCourses();
    }
}
