using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Dto;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Domain.Entities;
using MediatR;

namespace E_Learning.Application.Courses1.Queries
{
    public class GetAllCoursesQuery : IRequest<IEnumerable<CourseDto>>
    {
    }

    public class GetAllCoursesHandler : IRequestHandler<GetAllCoursesQuery, IEnumerable<CourseDto>>
    {
        private readonly ICoursesServices _coursesServices;
        private readonly IMapper _mapper;

        public GetAllCoursesHandler(ICoursesServices coursesServices, IMapper mapper)
        {
            _coursesServices = coursesServices;
            _mapper = mapper;
        }

        public async Task<IEnumerable<CourseDto>> Handle(GetAllCoursesQuery request, CancellationToken cancellationToken)
        {
            var courses = await _coursesServices.GetAllCourses();
            return _mapper.Map<IEnumerable<Course>, IEnumerable<CourseDto>>(courses);
        }
    }
}
