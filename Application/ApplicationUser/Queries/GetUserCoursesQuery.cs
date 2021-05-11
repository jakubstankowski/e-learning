using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using E_Learning.Application.Common.Dto;
using MediatR;

namespace E_Learning.Application.ApplicationUser.Queries
{
    public class GetUserCoursesQuery : IRequest<CourseDto>
    {
        public int UserId { get; set; }

        public GetUserCoursesQuery(int userId)
        {
            this.UserId = userId;
        }

        public class GetUserCoursesHandler : IRequestHandler<GetUserCoursesQuery, CourseDto>
        {
            public Task<CourseDto> Handle(GetUserCoursesQuery request, CancellationToken cancellationToken)
            {
                throw new NotImplementedException();
            }
        }

    }
}
