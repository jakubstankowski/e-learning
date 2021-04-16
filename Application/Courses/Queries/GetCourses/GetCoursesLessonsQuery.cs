using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Lessons.Queries.GetLessons;
using E_Learning.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Courses.Queries.GetCourses
{
    public class GetCoursesLessonsQuery : IRequest<IEnumerable<LessonDto>>
    {
        public int Id { get; set; }

        public GetCoursesLessonsQuery(int id)
        {
            this.Id = id;
        }

        public class GetCoursesLessonsHandler : IRequestHandler<GetCoursesLessonsQuery, IEnumerable<LessonDto>>
        {
            private readonly IContext _context;

            public IMapper _mapper { get; }

            public GetCoursesLessonsHandler(IContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<IEnumerable<LessonDto>> Handle(GetCoursesLessonsQuery request, CancellationToken cancellationToken)
            {
                var course = await _context
                        .Courses.FirstOrDefaultAsync(c => c.Id == request.Id);

                if (course == null)
                {
                    throw new NotFoundException(nameof(Course), request.Id);
                }



                var lessons = await _context.Lessons
                .Where(l => l.CourseId == request.Id)
                .ToListAsync();

                return _mapper.Map<IEnumerable<Lesson>, IEnumerable<LessonDto>>(lessons);

            }
        }


    }
}
