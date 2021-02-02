using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Lessons.Commands.DeleteLesson
{
    public class DeleteLessonCommand : IRequest<int>
    {
        public int Id { get; set; }
    }


    public class DeleteLessonHandler : IRequestHandler<DeleteLessonCommand, int>
    {
        private readonly IContext _context;

        public DeleteLessonHandler(IContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(DeleteLessonCommand request, CancellationToken cancellationToken)
        {
            var lesson = await _context.Lessons.FirstOrDefaultAsync(l => l.Id == request.Id);

            if (lesson == null)
            {
                throw new NotFoundException(nameof(Lesson), request.Id);
            }

            _context.Lessons.Remove(lesson);

            await _context.SaveChangesAsync();

            return lesson.Id;
        }
    }

}
