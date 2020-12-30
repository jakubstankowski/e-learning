using System.Collections.Generic;
using System.Threading.Tasks;
using E_Learning.Domain.Model;

namespace E_Learning.Application.Common.Interfaces
{
    public interface ICoursesServices
    {
        public Task<IEnumerable<Courses>> GetAllCourses();

        public Task AddNewCourses(Courses courses);
    }
}
