using System.Threading.Tasks;
using E_Learning.Application.ApplicationUser.Queries;
using E_Learning.Domain.Entities.OrderAggregate;

namespace E_Learning.Application.Interfaces
{
    public interface IUserCourseService
    {
        public Task<UserCoursesDto> AddUserCoursesFromOrderAsync(Order order);
    }
}
