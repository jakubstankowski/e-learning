using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Dto;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Courses.Commands
{
    public class CreateCourseCommand : IRequest<IEnumerable<CourseDto>>
    {

        public string Title { get; set; }

        public string Description { get; set; }

        public decimal Price { get; set; }

    }


    public class CreateCourseHandler : IRequestHandler<CreateCourseCommand, IEnumerable<CourseDto>>
    {
        private readonly IContext _context;
        private readonly IMapper _mapper;

        public CreateCourseHandler(IContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<CourseDto>> Handle(CreateCourseCommand request, CancellationToken cancellationToken)
        {

            var course = new Course
            {
                Title = request.Title,
                Description = request.Description,
            };



            _context.Courses.Add(course);
            await _context.SaveChangesAsync();

            var courses = await _context.Courses.ToListAsync();

            return _mapper.Map<IEnumerable<Course>, IEnumerable<CourseDto>>(courses);

        }
    }

}
