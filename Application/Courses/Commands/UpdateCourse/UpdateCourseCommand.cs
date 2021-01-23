using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Dto;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Courses.Commands.UpdateCourse
{
    public class UpdateCourseCommand : IRequest<CourseDto>
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public ICollection<Lesson> Lessons { get; set; }

    }

    public class UpdateCourseCommandHandler : IRequestHandler<UpdateCourseCommand, CourseDto>
    {
        private readonly IContext _context;
        private readonly IMapper _mapper;

        public UpdateCourseCommandHandler(IContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }


        public async Task<CourseDto> Handle(UpdateCourseCommand request, CancellationToken cancellationToken)
        {
            var course = await _context.Courses.FirstOrDefaultAsync(c => c.Id == request.Id);


            if (course == null)
            {
                throw new NotFoundException(nameof(Course), request.Id);
            }

            course.Title = request.Title;
            course.Description = request.Description;

            await _context.SaveChangesAsync();

            return _mapper.Map<Course, CourseDto>(course);
        }
    }
}
