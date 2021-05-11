using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Dto;
using E_Learning.Application.Common.Interfaces;
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
            private readonly IContext _context;
            private readonly IMapper _mapper;

            public GetUserCoursesHandler(IContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public Task<CourseDto> Handle(GetUserCoursesQuery request, CancellationToken cancellationToken)
            {
                throw new NotImplementedException();
            }
        }

    }
}
