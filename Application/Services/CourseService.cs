using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.ApplicationUser.Queries;
using E_Learning.Application.Common.Dto;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Interfaces;
using E_Learning.Application.Lessons.Queries.GetLessons;
using E_Learning.Domain.Entities;
using Microsoft.AspNetCore.Identity;
/*using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;*/
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Services
{
    public class CourseService : ICourseService
    {
        private readonly IContext _context;
        private readonly IMapper _mapper;
        private readonly IIdentityService _identityService;
        private readonly UserManager<IdentityUser> _userManager;

        public CourseService(IContext context, IMapper mapper, IIdentityService identityService, UserManager<IdentityUser> userManager)
        {
            _context = context;
            _mapper = mapper;
            _identityService = identityService;
            _userManager = userManager;
        }

        public async Task<IEnumerable<CourseDto>> CreateCourseAsync(CourseDto courseDto)
        {
            var course = new Course
            {
                Title = courseDto.Title,
                Description = courseDto.Description,
                Price = courseDto.Price,
                ImageUrl = courseDto.ImageUrl
            };

            _context.Courses.Add(course);
            await _context.SaveChangesAsync();

            var courses = await _context.Courses.ToListAsync();

            return _mapper.Map<IEnumerable<Course>, IEnumerable<CourseDto>>(courses);
        }

        public async Task<IEnumerable<CourseDto>> DeleteCourseAsync(int courseId)
        {
            var course = await _context.Courses.FirstOrDefaultAsync(c => c.Id == courseId);

            if (course == null)
            {
                throw new NotFoundException(nameof(Course), courseId);
            }

            _context.Courses.Remove(course);

            await _context.SaveChangesAsync();

            var courses = await _context.Courses.ToListAsync();

            return _mapper.Map<IEnumerable<Course>, IEnumerable<CourseDto>>(courses);
        }

        public async Task<IEnumerable<CourseDto>> GetCoursesAsync()
        {
            var courses = await _context.Courses.ToListAsync();

            return _mapper.Map<IEnumerable<Course>, IEnumerable<CourseDto>>(courses);
        }

        public async Task<CourseDto> GetCourseByIdAsync(int courseId)
        {
            var course = await _context
                         .Courses.FirstOrDefaultAsync(c => c.Id == courseId);

            if (course == null)
            {
                throw new NotFoundException(nameof(Course), courseId);
            }

            return _mapper.Map<Course, CourseDto>(course);
        }

        public async Task<IEnumerable<LessonDto>> GetCourseLessonsAsync(int courseId)
        {
            var course = await _context
                         .Courses.FirstOrDefaultAsync(c => c.Id == courseId);

            if (course == null)
            {
                throw new NotFoundException(nameof(Course), courseId);
            }

            var lessons = await _context.Lessons
               .Where(l => l.CourseId == courseId)
               .ToListAsync();

            return _mapper.Map<IEnumerable<Lesson>, IEnumerable<LessonDto>>(lessons);
        }

        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync() >= 0);
        }

        public async Task<IEnumerable<CourseDto>> UpdateCourseAsync(CourseDto courseDto)
        {
            var course = await _context.Courses.FirstOrDefaultAsync(c => c.Id == courseDto.Id);


            if (course == null)
            {
                throw new NotFoundException(nameof(Course), courseDto.Id);
            }

            course.Title = courseDto.Title;
            course.Description = courseDto.Description;
            course.Price = courseDto.Price;
            course.ImageUrl = courseDto.ImageUrl;

            await _context.SaveChangesAsync();

            var courses = await _context.Courses.ToListAsync();

            return _mapper.Map<IEnumerable<Course>, IEnumerable<CourseDto>>(courses);
        }

        public async Task<IEnumerable<CourseDto>> GetUserCoursesAsync()
        {
            string userId = _identityService.GetUserId();

            var userCourses = await _context.UserCourses
                    .Include(u => u.IdentityUser)
                    .Include(u => u.Course)
                   .Where(u => u.IdentityUser.Id == userId)
                   .ToListAsync();


            List<Course> courses = new();

            foreach (var userCourse in userCourses)
            {
                courses.Add(userCourse.Course);
            }


            return _mapper.Map<IEnumerable<Course>, IEnumerable<CourseDto>>(courses);
        }

        public async Task<UserCoursesDto> AddUserCourses(int courseId)
        {
            var course = await _context
                           .Courses.FirstOrDefaultAsync(c => c.Id == courseId);

            if (course == null)
            {
                throw new NotFoundException(nameof(Course), courseId);
            }

            string userId = _identityService.GetUserId();
            var user = await _userManager.FindByIdAsync(userId);

            var userCourses = new UserCourses
            {
                Course = course,
                IdentityUser = user
            };

            _context.UserCourses.Add(userCourses);

            await _context.SaveChangesAsync();


            return _mapper.Map<UserCourses, UserCoursesDto>(userCourses);
        }
    }
}
