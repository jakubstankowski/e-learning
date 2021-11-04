using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Learning.Application.ApplicationUser.Queries;
using E_Learning.Application.Common.Dto;
using E_Learning.Application.Lessons.Queries.GetLessons;

namespace E_Learning.Application.Interfaces
{
    public interface ICourseService
    {
        public Task<IEnumerable<CourseDto>> CreateCourseAsync(CourseDto courseDto);

        public Task<IEnumerable<CourseDto>> UpdateCourseAsync(CourseDto courseDto);

        public Task<IEnumerable<CourseDto>> DeleteCourseAsync(int courseId);

        public Task<IEnumerable<CourseDto>> GetCoursesAsync();

        public Task<IEnumerable<CourseDto>> GetUserCoursesAsync();

        public Task<CourseDto> GetCourseByIdAsync(int courseId);

        public Task<IEnumerable<LessonDto>> GetCourseLessonsAsync(int courseId);

        public Task<bool> SaveChangesAsync();

    }
}
