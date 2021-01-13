using System.Threading;
using System.Threading.Tasks;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Courses.Commands.DeleteCourse
{
    public class DeleteCourseCommand : IRequest
    {
        public int Id { get; set; }

    }


    public class DeleteCourseHandler : IRequestHandler<DeleteCourseCommand>
    {
        private readonly IContext _context;

        public DeleteCourseHandler(IContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(DeleteCourseCommand request, CancellationToken cancellationToken)
        {
            var course = await _context.Courses.FirstOrDefaultAsync(c => c.Id == request.Id);

            if (course == null)
            {
                throw new NotFoundException(nameof(Course), request.Id);
            }

            _context.Courses.Remove(course);
            await _context.SaveChangesAsync();


            return Unit.Value;
        }
    }
}
