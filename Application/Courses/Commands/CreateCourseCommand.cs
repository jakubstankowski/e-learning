using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Learning.Application.Common.Dto;
using E_Learning.Domain.Entities;
using MediatR;

namespace E_Learning.Application.Courses.Commands
{
    public class CreateCourseCommand : IRequest<CourseDto>
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string VideoUrl { get; set; }



    }
}
