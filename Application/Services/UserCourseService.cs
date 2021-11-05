﻿using System.Linq;
using System.Threading.Tasks;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Interfaces;
using E_Learning.Domain.Entities;
using E_Learning.Domain.Entities.OrderAggregate;
using Microsoft.AspNetCore.Identity;

namespace E_Learning.Application.Services
{
    public class UserCourseService : IUserCourseService
    {
        private readonly ICourseService _courseService;
        private readonly IContext _context;
        private readonly UserManager<IdentityUser> _userManager;

        public UserCourseService(ICourseService courseService, IContext context, UserManager<IdentityUser> userManager)
        {
            _courseService = courseService;
            _context = context;
            _userManager = userManager;
        }

        public async Task<UserCourses> AddUserCoursesFromOrderAsync(Order order)
        {
            string userId = order.BuyerId;

            var courseId = order.OrderItems
                .Select(x => x.ItemOrdered.CourseId)
                .FirstOrDefault();

            var course = await _courseService.GetCourseByIdAsync(courseId);

            var user = await _userManager.FindByIdAsync(userId);

            var userCourses = new UserCourses()
            {
                IdentityUser = user,
                Course = course
            };

            _context.UserCourses.Add(userCourses);

            return userCourses;
        }

        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync() >= 0);
        }
    }
}