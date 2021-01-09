using System.Collections.Generic;
using System.Threading.Tasks;
using E_Learning.Domain.Entities;

namespace E_Learning.Application.Common.Interfaces
{
    public interface ICoursesServices
    {
       
        public Task<IEnumerable<Course>> GetAllCourses();

        public Task AddNewCourses(Course courses);

        public Task<Course> GetCourseById(int id);
    }
}
