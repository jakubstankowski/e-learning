using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Lessons.Queries.GetLessons
{
    public class GetLessonByIdQuery : IRequest<LessonDto>
    {
        public int Id { get; set; }

        public GetLessonByIdQuery(int id)
        {
            this.Id = id;
        }

    }

    public class GetLessonByIdHandler : IRequestHandler<GetLessonByIdQuery, LessonDto>
    {
        private readonly IContext _context;
        private readonly IMapper _mapper;

        public GetLessonByIdHandler(IContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<LessonDto> Handle(GetLessonByIdQuery request, CancellationToken cancellationToken)
        {
            var lesson = await _context.Lessons.FirstOrDefaultAsync(l => l.Id == request.Id);

            if (lesson == null)
            {
                throw new NotFoundException(nameof(Course), request.Id);
            }

            return _mapper.Map<Lesson, LessonDto>(lesson);
        }
    }


}
