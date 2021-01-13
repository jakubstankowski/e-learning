using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using E_Learning.Application.Common.Dto;
using E_Learning.Application.Common.Interfaces;
using MediatR;

namespace E_Learning.Application.Courses.Commands.UpdateCourse
{
    public class UpdateCourseCommand : IRequest<CourseDto>
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string VideoUrl { get; set; }

    }

    public class UpdateCourseCommandHandler : IRequestHandler<UpdateCourseCommand, CourseDto>
    {
        private readonly IContext _context;

        public UpdateCourseCommandHandler(IContext context)
        {
            _context = context;
        }


        public Task<CourseDto> Handle(UpdateCourseCommand request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();





        }
    }
}
