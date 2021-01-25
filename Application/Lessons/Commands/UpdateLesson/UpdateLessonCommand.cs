using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Lessons.Queries.GetLessons;
using E_Learning.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Lessons.Commands.UpdateLesson
{
    public class UpdateLessonCommand : IRequest<LessonDto>
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string VideoUrl { get; set; }

        public int CourseId { get; set; }

    }

    public class UpdateLessonHandler : IRequestHandler<UpdateLessonCommand, LessonDto>
    {
        private readonly IContext _context;
        private readonly IMapper _mapper;

        public UpdateLessonHandler(IContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<LessonDto> Handle(UpdateLessonCommand request, CancellationToken cancellationToken)
        {
            var lesson = await _context.Lessons.FirstOrDefaultAsync(c => c.Id == request.Id);


            if (lesson == null)
            {
                throw new NotFoundException(nameof(Lesson), request.Id);
            }

            lesson.Title = request.Title;
            lesson.Description = request.Description;
            lesson.VideoUrl = request.VideoUrl;

            await _context.SaveChangesAsync();

            return _mapper.Map<Lesson, LessonDto>(lesson);


        }
    }
}
