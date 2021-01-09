using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Learning.Application.Common.Dto;
using MediatR;

namespace E_Learning.Application.Courses1.Queries
{
    public class GetAllCoursesQuery : IRequest<IEnumerable<CourseDto>>
    {
    }
}
