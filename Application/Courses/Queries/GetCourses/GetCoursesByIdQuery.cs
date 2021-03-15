using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Dto;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Courses.Queries.GetCourses;
using E_Learning.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Courses.Queries
{
    public class GetCoursesByIdQuery : IRequest<CourseByIdDto>
    {
        public int Id { get; set; }

        public GetCoursesByIdQuery(int id)
        {
            this.Id = id;
        }


        public class GetCourseByIdHandler : IRequestHandler<GetCoursesByIdQuery, CourseByIdDto>
        {
            private readonly IContext _context;

            public IMapper _mapper { get; }

            public GetCourseByIdHandler(IContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<CourseByIdDto> Handle(GetCoursesByIdQuery request, CancellationToken cancellationToken)
            {
                var course = await _context
                       .Courses.Include(c => c.Lessons)
                       .FirstOrDefaultAsync(c => c.Id == request.Id);

                if (course == null)
                {
                    throw new NotFoundException(nameof(Course), request.Id);
                }

                return _mapper.Map<Course, CourseByIdDto>(course);
            }

        }

    }
}
