using System.Collections.Generic;
using System.Threading.Tasks;
using E_Learning.Application.Common.Dto;
using E_Learning.Domain.Entities;

namespace E_Learning.Application.Interfaces
{
    public interface ICourseService
    {
        public Task<IEnumerable<Course>> CreateCourseAsync(CourseDto courseDto);

        public Task<IEnumerable<Course>> UpdateCourseAsync(CourseDto courseDto);

        public Task<IEnumerable<Course>> DeleteCourseAsync(int courseId);

        public Task<IEnumerable<Course>> GetCoursesAsync();

        public Task<IEnumerable<Course>> GetUserCoursesAsync();

        public Task<Course> GetCourseByIdAsync(int courseId);

        public Task<IEnumerable<Lesson>> GetCourseLessonsAsync(int courseId);

    }
}
