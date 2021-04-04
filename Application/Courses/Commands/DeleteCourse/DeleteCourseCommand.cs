using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Dto;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Courses.Commands.DeleteCourse
{
    public class DeleteCourseCommand : IRequest<IEnumerable<CourseDto>>
    {
        public int Id { get; set; }

    }


    public class DeleteCourseHandler : IRequestHandler<DeleteCourseCommand, IEnumerable<CourseDto>>
    {
        private readonly IContext _context;
        private readonly IMapper _mapper;

        public DeleteCourseHandler(IContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<CourseDto>> Handle(DeleteCourseCommand request, CancellationToken cancellationToken)
        {
            var course = await _context.Courses.FirstOrDefaultAsync(c => c.Id == request.Id);

            if (course == null)
            {
                throw new NotFoundException(nameof(Course), request.Id);
            }

            _context.Courses.Remove(course);

            await _context.SaveChangesAsync();

            var courses = await _context.Courses.ToListAsync();

            return _mapper.Map<IEnumerable<Course>, IEnumerable<CourseDto>>(courses);

        }
     

    }
}
