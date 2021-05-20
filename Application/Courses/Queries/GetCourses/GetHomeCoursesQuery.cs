using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Dto;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Courses.Queries.GetCourses
{
    public class GetHomeCoursesQuery : IRequest<IEnumerable<CourseDto>>
    {
    }

    public class GetHomeCoursesHandler : IRequestHandler<GetHomeCoursesQuery, IEnumerable<CourseDto>>
    {
        private readonly IContext _context;
        private readonly IMapper _mapper;

        public GetHomeCoursesHandler(IContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<CourseDto>> Handle(GetHomeCoursesQuery request, CancellationToken cancellationToken)
        {
            var courses = await _context.Courses.ToListAsync();

            return _mapper.Map<IEnumerable<Course>, IEnumerable<CourseDto>>(courses);
        }
    }

}
