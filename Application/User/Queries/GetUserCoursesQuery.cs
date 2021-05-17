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

namespace E_Learning.Application.ApplicationUser.Queries
{
    public class GetUserCoursesQuery : IRequest<IEnumerable<CourseDto>>
    {
        public string UserId { get; set; }

        public GetUserCoursesQuery(string userId)
        {
            this.UserId = userId;
        }

        public class GetUserCoursesHandler : IRequestHandler<GetUserCoursesQuery, IEnumerable<CourseDto>>
        {
            private readonly IContext _context;
            private readonly IMapper _mapper;

            public GetUserCoursesHandler(IContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<IEnumerable<CourseDto>> Handle(GetUserCoursesQuery request, CancellationToken cancellationToken)
            {
                var userCourses = await _context.UserCourses
                        .Include(u => u.IdentityUser)
                        .Include(u => u.Course)
                       .Where(u => u.IdentityUser.Id == request.UserId)
                       .ToListAsync();


                List<Course> courses = new();

                foreach (var userCourse in userCourses)
                {
                    courses.Add(userCourse.Course);
                }


                return _mapper.Map<IEnumerable<Course>, IEnumerable<CourseDto>>(courses);
            }
        }

    }
}
