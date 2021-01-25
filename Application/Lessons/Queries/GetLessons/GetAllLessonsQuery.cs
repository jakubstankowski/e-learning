using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Interfaces;
using MediatR;

namespace E_Learning.Application.Lessons.Queries.GetLessons
{
    public class GetAllLessonsQuery : IRequest<IEnumerable<LessonDto>>
    {
      
    }

    public class GetAllLessonsHandler : IRequestHandler<GetAllLessonsQuery, IEnumerable<LessonDto>>
    {
        public Task<IEnumerable<LessonDto>> Handle(GetAllLessonsQuery request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }

}
