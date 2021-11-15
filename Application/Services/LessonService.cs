using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Interfaces;
using E_Learning.Application.Lessons.Queries.GetLessons;
using E_Learning.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Services
{
    public class LessonService : ILessonService
    {
        private readonly IContext _context;

        public LessonService(IContext context)
        {
            _context = context;
        }


        public async Task<IEnumerable<Lesson>> AddLessonToCourseAsync(Lesson lesson, Course course)
        {
            course.Lessons.Add(lesson);

            return await _context.Lessons
                 .Where(l => l.CourseId == lesson.CourseId)
                 .ToListAsync();
        }

        public void DeleteLesson(Lesson lesson)
        {
            _context.Lessons.Remove(lesson);
        }

        public async Task<Lesson> GetLessonByIdAsync(int id)
        {
            return await _context.Lessons.FirstOrDefaultAsync(l => l.Id == id);
        }

        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync() >= 0);
        }

        public async Task<IEnumerable<Lesson>> UpdateLessonAsync(Lesson lesson, LessonDto lessonDto)
        {
            lesson.Title = lessonDto.Title;
            lesson.Description = lessonDto.Description;
            lesson.VideoUrl = lessonDto.VideoUrl;
            lesson.CourseId = lessonDto.CourseId;
            lesson.IsDemo = lessonDto.IsDemo && lessonDto.IsDemo;

            return await _context.Lessons
                .Where(l => l.CourseId == lessonDto.CourseId)
                .ToListAsync();
        }

    }
}
