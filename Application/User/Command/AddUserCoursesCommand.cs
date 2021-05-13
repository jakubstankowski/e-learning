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

namespace E_Learning.Application.User.Command
{
    public class AddUserCoursesCommand : IRequest<IEnumerable<CourseDto>>
    {
        public string UserId { get; set; }

        public string CourseId { get; set; }
    
    }

    public class AddUserCoursesHandler : IRequestHandler<AddUserCoursesCommand, IEnumerable<CourseDto>>
    {
        private readonly IContext _context;
        private readonly IMapper _mapper;

        public AddUserCoursesHandler(IContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }


        public Task<IEnumerable<CourseDto>> Handle(AddUserCoursesCommand request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }

}
