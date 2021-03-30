using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Lessons.Queries.GetLessons;
using E_Learning.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Lessons.Commands
{
    public class CreateLessonCommand : IRequest<IEnumerable<LessonDto>>
    {
        public string Title { get; set; }

        public string Description { get; set; }

        public string VideoUrl { get; set; }

        public int CourseId { get; set; }

    }

    public class CreateLessonHandler : IRequestHandler<CreateLessonCommand, IEnumerable<LessonDto>>
    {
        private readonly IContext _context;
        private readonly IMapper _mapper;

        public CreateLessonHandler(IContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<LessonDto>> Handle(CreateLessonCommand request, CancellationToken cancellationToken)
        {
            var course = await _context.Courses
                   .Include(c => c.Lessons)
                   .FirstOrDefaultAsync(c => c.Id == request.CourseId);

            if (course == null)
            {
                throw new NotFoundException(nameof(Course), request.CourseId);
            }


            var lesson = new Lesson
            {
                CourseId = request.CourseId,
                Description = request.Description,
                Title = request.Title,
                VideoUrl = request.VideoUrl
            };


            course.Lessons.Add(lesson);

            await _context.SaveChangesAsync();

            var lessons = await _context.Lessons.ToListAsync();

            return _mapper.Map<IEnumerable<Lesson>, IEnumerable<LessonDto>>(lessons);
        }

    }


}
