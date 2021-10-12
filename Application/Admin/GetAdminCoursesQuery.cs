using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Dto;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Admin
{
    public class GetAdminCoursesQuery : IRequest<IEnumerable<CourseDto>>
    {

    }

    public class GetAdminCoursesHandler : IRequestHandler<GetAdminCoursesQuery, IEnumerable<CourseDto>>
    {
        private readonly IContext _context;
        private readonly IMapper _mapper;

        public GetAdminCoursesHandler(IContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<CourseDto>> Handle(GetAdminCoursesQuery request, CancellationToken cancellationToken)
        {
            var courses = await _context.Courses.ToListAsync();

            return _mapper.Map<IEnumerable<Course>, IEnumerable<CourseDto>>(courses);
        }
    }

}
