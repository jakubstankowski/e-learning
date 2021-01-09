using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Dto;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Courses.Queries;
using E_Learning.Domain.Entities;
using MediatR;

namespace E_Learning.Application.Courses.Handlers
{
    public class GetCourseByIdHandler : IRequestHandler<GetCoursesByIdQuery, CourseDto>
    {
        private readonly ICoursesServices _coursesServices;
        private readonly IMapper _mapper;

        public GetCourseByIdHandler(ICoursesServices services, IMapper mapper)
        {
            _coursesServices = services;
            _mapper = mapper;
        }


        public async Task<CourseDto> Handle(GetCoursesByIdQuery request, CancellationToken cancellationToken)
        {
            var course = await _coursesServices.GetCourseById(request.Id);

            if (course == null)
            {
                return null;
            }

            return _mapper.Map<Course, CourseDto>(course);

        }
    }
}
