using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Learning.Application.ApplicationUser.Queries;
using E_Learning.Application.Interfaces;
using E_Learning.Domain.Entities.OrderAggregate;

namespace E_Learning.Application.Services
{
    public class UserCourseService : IUserCourseService
    {
        public Task<UserCoursesDto> AddUserCoursesFromOrderAsync(Order order)
        {
            throw new NotImplementedException();
        }
    }
}
