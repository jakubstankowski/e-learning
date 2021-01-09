using E_Learning.Application.Common.Dto;
using MediatR;

namespace E_Learning.Application.Courses.Queries
{
    public class GetCoursesByIdQuery : IRequest<CourseDto>
    {
        public int Id { get; set; }

        public GetCoursesByIdQuery(int id)
        {
            this.Id = id;
        }

    }
}
