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
        public Task<IEnumerable<CourseDto>> CreateCourse(CourseDto courseDto);

        public Task<IEnumerable<CourseDto>> UpdateCourse(CourseDto courseDto);

        public Task<IEnumerable<CourseDto>> DeleteCourse(int id);

        public Task<IEnumerable<CourseDto>> GetAllCourse();

        public Task<CourseDto> GetCourseById(int id);

        public Task<IEnumerable<LessonDto>> GetCourseLessons(int id);

    }
}
