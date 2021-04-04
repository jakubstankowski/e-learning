using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Lessons.Queries.GetLessons;
using E_Learning.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Lessons.Commands.DeleteLesson
{
    public class DeleteLessonCommand : IRequest<IEnumerable<LessonDto>>
    {
        public int Id { get; set; }
    }


    public class DeleteLessonHandler : IRequestHandler<DeleteLessonCommand, IEnumerable<LessonDto>>
    {
        private readonly IContext _context;
        private readonly IMapper _mapper;

        public DeleteLessonHandler(IContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<LessonDto>> Handle(DeleteLessonCommand request, CancellationToken cancellationToken)
        {
            var lesson = await _context.Lessons.FirstOrDefaultAsync(l => l.Id == request.Id);
           


            if (lesson == null)
            {
                throw new NotFoundException(nameof(Lesson), request.Id);
            }

            _context.Lessons.Remove(lesson);

            await _context.SaveChangesAsync();

            int courseId = lesson.CourseId;

            var lessons = await _context.Lessons
                .Where(l => l.CourseId == courseId)
                .ToListAsync();


            if (lessons.Count <= 0)
            {
                var course = await _context.Courses.FirstOrDefaultAsync(c => c.Id == courseId);

                if (course == null)
                {
                    throw new NotFoundException(nameof(Course), request.Id);
                }

                _context.Courses.Remove(course);

                await _context.SaveChangesAsync();
            }


            return _mapper.Map<IEnumerable<Lesson>, IEnumerable<LessonDto>>(lessons);
        }

    }

}
