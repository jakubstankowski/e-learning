using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Learning.Application.Lessons.Queries.GetLessons;

namespace E_Learning.Application.Interfaces
{
    public interface ILessonService
    {
        public Task<IEnumerable<LessonDto>> CreateLessonAsync(LessonDto lessonDto);

        public Task<LessonDto> GetLessonByIdAsync(int id);

        public Task<IEnumerable<LessonDto>> UpdateLessonAsync(LessonDto lessonDto);

        public Task<IEnumerable<LessonDto>> DeleteLessonByIdAsync(int id);
    }
}
