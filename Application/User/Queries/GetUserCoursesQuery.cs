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

        public class GetUserCoursesHandler : IRequestHandler<GetUserCoursesQuery, IEnumerable<CourseDto>>
        {
            private readonly IContext _context;
            private readonly IMapper _mapper;
            private readonly IIdentityService _identityService;

            public GetUserCoursesHandler(IContext context, IMapper mapper, IIdentityService identityService)
            {
                _context = context;
                _mapper = mapper;
                _identityService = identityService;
            }

            public async Task<IEnumerable<CourseDto>> Handle(GetUserCoursesQuery request, CancellationToken cancellationToken)
            {
                string userId = _identityService.GetUserId();

                var userCourses = await _context.UserCourses
                        .Include(u => u.IdentityUser)
                        .Include(u => u.Course)
                       .Where(u => u.IdentityUser.Id == userId)
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
