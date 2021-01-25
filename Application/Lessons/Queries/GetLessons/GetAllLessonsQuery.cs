using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Lessons.Queries.GetLessons
{
    public class GetAllLessonsQuery : IRequest<IEnumerable<LessonDto>>
    {
     
    }

    public class GetAllLessonsHandler : IRequestHandler<GetAllLessonsQuery, IEnumerable<LessonDto>>
    {
        private readonly IMapper _mapper;
        private readonly IContext _context;

        public GetAllLessonsHandler(IMapper mapper, IContext context)
        {
            _mapper = mapper;
            _context = context;
        }
        public async Task<IEnumerable<LessonDto>> Handle(GetAllLessonsQuery request, CancellationToken cancellationToken)
        {
            var lessons = await _context.Lessons.ToListAsync();

            return _mapper.Map<IEnumerable<Lesson>, IEnumerable<LessonDto>>(lessons);

        }
    }

}
