using System.Collections.Generic;
using E_Learning.Domain.Model;

namespace E_Learning.Application.Common.Interfaces
{
    public interface ICoursesServices
    {
        public IEnumerable<Courses> GetAllCourses();

        public void AddNewCourses();
    }
}
