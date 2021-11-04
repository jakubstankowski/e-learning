using System.Threading.Tasks;
using E_Learning.Domain.Entities;
using E_Learning.Domain.Entities.OrderAggregate;

namespace E_Learning.Application.Interfaces
{
    public interface IUserCourseService
    {
        public Task<UserCourses> AddUserCoursesFromOrderAsync(Order order);

        public Task<bool> SaveChangesAsync();
    }
}
