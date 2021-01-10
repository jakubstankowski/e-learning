using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Dto;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Courses.Commands;
using E_Learning.Domain.Entities;
using MediatR;

namespace E_Learning.Application.Courses.Handlers
{
    public class CreateCourseHandler : IRequestHandler<CreateCourseCommand, CourseDto>
    {
        private readonly ICoursesServices _coursesServices;

        public IMapper _mapper { get; }

        public CreateCourseHandler(ICoursesServices coursesServices, IMapper mapper)
        {
            _coursesServices = coursesServices;
            _mapper = mapper;
        }

        public async Task<CourseDto> Handle(CreateCourseCommand request, CancellationToken cancellationToken)
        {
            var course = new Course
            {
                Id = request.Id,
                Title = request.Title,
                Description = request.Description,
                VideoUrl = request.VideoUrl
            };

            course.Title = request.Title;
            course.VideoUrl = request.VideoUrl;
            course.Description = request.Description;

            await _coursesServices.AddNewCourses(course);

            return _mapper.Map<Course, CourseDto>(course);
        }
    }
}
