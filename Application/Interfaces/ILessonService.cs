using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Learning.Application.Lessons.Queries.GetLessons;
using E_Learning.Domain.Entities;

namespace E_Learning.Application.Interfaces
{
    public interface ILessonService
    {
        public Task<IEnumerable<Lesson>> AddLessonToCourseAsync(Lesson lesson, Course course);

        public Task<Lesson> GetLessonByIdAsync(int id);

        public Task<IEnumerable<Lesson>> UpdateLessonAsync(Lesson lesson, LessonDto lessonDto);

        public void DeleteLesson(Lesson lesson);

        public Task<bool> SaveChangesAsync();
    }
}
