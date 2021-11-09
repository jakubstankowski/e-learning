using System.Threading.Tasks;
using E_Learning.Domain.Entities;

namespace E_Learning.Application.Interfaces
{
    public interface IUserCourseService
    {
        public Task AddUserCoursesAsync(int courseId, string buyerId);

        public Task<bool> SaveChangesAsync();
    }
}
