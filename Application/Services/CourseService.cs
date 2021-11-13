using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_Learning.Application.Common.Dto;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Interfaces;
using E_Learning.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Services
{
    public class CourseService : ICourseService
    {
        private readonly IContext _context;

        public CourseService(IContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Course>> CreateCourseAsync(Course course)
        {
            _context.Courses.Add(course);

            var courses = await _context.Courses.ToListAsync();

            return courses;
        }

        public void DeleteCourse(Course course)
        {
            _context.Courses.Remove(course);
        }

        public async Task<IEnumerable<Course>> GetCoursesAsync()
        {
            return await _context.Courses.ToListAsync();
        }

        public async Task<Course> GetCourseByIdAsync(int courseId)
        {
            return await _context.Courses.Include(c => c.Lessons).FirstOrDefaultAsync(c => c.Id == courseId);
        }

        public async Task<IEnumerable<Lesson>> GetCourseLessonsAsync(int courseId)
        {
            return await _context.Lessons
                .Where(l => l.CourseId == courseId)
                .ToListAsync();
        }

        public async Task<IEnumerable<Course>> UpdateCourseAsync(Course course, CourseDto courseDto)
        {
            course.Title = courseDto.Title;
            course.Description = courseDto.Description;
            course.Price = courseDto.Price;
            course.ImageUrl = courseDto.ImageUrl;

            return await _context.Courses.ToListAsync();
        }

        public async Task<IEnumerable<Course>> GetCourseByUserIdAsync(string userId)
        {
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

            return courses;
        }

        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync() >= 0);
        }

        public async Task<Course> GetCourseWithLessonsByLessonCourseIdAsync(int lessonCourseId)
        {
            return await _context.Courses
                   .Include(c => c.Lessons)
                   .FirstOrDefaultAsync(c => c.Id == lessonCourseId);
        }

    }
}
