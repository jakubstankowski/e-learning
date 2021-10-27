using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Exceptions;
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
        private readonly IMapper _mapper;

        public LessonService(IContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<LessonDto>> CreateLessonAsync(LessonDto lessonDto)
        {
            var course = await _context.Courses
                  .Include(c => c.Lessons)
                  .FirstOrDefaultAsync(c => c.Id == lessonDto.CourseId);

            if (course == null)
            {
                throw new NotFoundException(nameof(Course), lessonDto.CourseId);
            }


            Lesson lesson = new Lesson
            {
                CourseId = lessonDto.CourseId,
                Description = lessonDto.Description,
                Title = lessonDto.Title,
                VideoUrl = lessonDto.VideoUrl
            };


            course.Lessons.Add(lesson);

            await _context.SaveChangesAsync();

            var lessons = await _context.Lessons
                .Where(l => l.CourseId == lessonDto.CourseId)
                .ToListAsync();

            return _mapper.Map<IEnumerable<Lesson>, IEnumerable<LessonDto>>(lessons);
        }

        public async Task<IEnumerable<LessonDto>> DeleteLessonByIdAsync(int id)
        {
            var lesson = await _context.Lessons.FirstOrDefaultAsync(l => l.Id == id);

            if (lesson == null)
            {
                throw new NotFoundException(nameof(Lesson), id);
            }

            _context.Lessons.Remove(lesson);

            await _context.SaveChangesAsync();

            var lessons = await _context.Lessons
                .Where(l => l.CourseId == lesson.CourseId)
                .ToListAsync();


            return _mapper.Map<IEnumerable<Lesson>, IEnumerable<LessonDto>>(lessons);
        }

        public async Task<LessonDto> GetLessonByIdAsync(int id)
        {
            var lesson = await _context.Lessons.FirstOrDefaultAsync(l => l.Id == id);

            if (lesson == null)
            {
                throw new NotFoundException(nameof(Lesson), id);
            }

            var lessonDto = _mapper.Map<Lesson, LessonDto>(lesson);

            var lessons = await _context.Lessons
               .Where(l => l.CourseId == lesson.CourseId)
               .ToListAsync();


            int indexOfActiveLesson = lessons.IndexOf(lesson);
            int indexOfNextLesson = indexOfActiveLesson + 1;
            int indexOfPreviousLesson = indexOfActiveLesson - 1;


            if (indexOfNextLesson < lessons.Count)
            {
                lessonDto.NextLessonId = lessons[indexOfNextLesson].Id;
            }


            if (indexOfPreviousLesson >= 0)
            {
                lessonDto.PreviousLessonId = lessons[indexOfPreviousLesson].Id;
            }

            return lessonDto;
        }

        public async Task<IEnumerable<LessonDto>> UpdateLessonAsync(LessonDto lessonDto)
        {
            var course = await _context.Courses
                    .FirstOrDefaultAsync(c => c.Id == lessonDto.CourseId);

            if (course == null)
            {
                throw new NotFoundException(nameof(Course), lessonDto.CourseId);
            }


            var lesson = await _context.Lessons.FirstOrDefaultAsync(c => c.Id == lessonDto.Id);


            if (lesson == null)
            {
                throw new NotFoundException(nameof(Lesson), lessonDto.Id);
            }

            lesson.Title = lessonDto.Title;
            lesson.Description = lessonDto.Description;
            lesson.VideoUrl = lessonDto.VideoUrl;
            lesson.CourseId = lessonDto.CourseId;


            await _context.SaveChangesAsync();

            var lessons = await _context.Lessons
               .Where(l => l.CourseId == lessonDto.CourseId)
               .ToListAsync();

            return _mapper.Map<IEnumerable<Lesson>, IEnumerable<LessonDto>>(lessons);
        }
    }
}
