using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Learning.Application.Common.Dto;
using E_Learning.Application.Lessons.Queries.GetLessons;

namespace E_Learning.Application.Interfaces
{
    public interface ICourseService
    {
        public Task<IEnumerable<CourseDto>> CreateCourseAsync(CourseDto courseDto);

        public Task<IEnumerable<CourseDto>> UpdateCourseAsync(CourseDto courseDto);

        public Task<IEnumerable<CourseDto>> DeleteCourseAsync(int id);

        public Task<IEnumerable<CourseDto>> GetAllCourseAsync();

        public Task<CourseDto> GetCourseByIdAsync(int id);

        public Task<IEnumerable<LessonDto>> GetCourseLessonsAsync(int id);

    }
}
