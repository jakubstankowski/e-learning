using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Dto;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Interfaces;
using E_Learning.Application.Lessons.Queries.GetLessons;
using E_Learning.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Services
{
    public class CourseService : ICourseService
    {
        private readonly IContext _context;
        private readonly IMapper _mapper;
        private readonly IIdentityService _identityService;

        public CourseService(IContext context, IMapper mapper, IIdentityService identityService)
        {
            _context = context;
            _mapper = mapper;
            _identityService = identityService;
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

        public async Task<IEnumerable<CourseDto>> DeleteCourseAsync(int id)
        {
            var course = await _context.Courses.FirstOrDefaultAsync(c => c.Id == id);

            if (course == null)
            {
                throw new NotFoundException(nameof(Course), id);
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

        public async Task<CourseDto> GetCourseByIdAsync(int id)
        {
            var course = await _context
                         .Courses.FirstOrDefaultAsync(c => c.Id == id);

            if (course == null)
            {
                throw new NotFoundException(nameof(Course), id);
            }

            return _mapper.Map<Course, CourseDto>(course);
        }

        public async Task<IEnumerable<LessonDto>> GetCourseLessonsAsync(int id)
        {
            var course = await _context
                         .Courses.FirstOrDefaultAsync(c => c.Id == id);

            if (course == null)
            {
                throw new NotFoundException(nameof(Course), id);
            }

            var lessons = await _context.Lessons
               .Where(l => l.CourseId == id)
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
    }
}
