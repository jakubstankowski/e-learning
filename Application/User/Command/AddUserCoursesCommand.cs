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



namespace E_Learning.Application.User.Command
{
    public class AddUserCoursesCommand : IRequest<IEnumerable<CourseDto>>
    {
        public string UserId { get; set; }

        public int CourseId { get; set; }

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


        public async Task<IEnumerable<CourseDto>> Handle(AddUserCoursesCommand request, CancellationToken cancellationToken)
        {
            var course = await _context
                         .Courses.FirstOrDefaultAsync(c => c.Id == request.CourseId);

            if (course == null)
            {
                throw new NotFoundException(nameof(Course), request.CourseId);
            }



            throw new NotImplementedException();
        }
    }

}
