using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Lessons.Queries.GetLessons;
using MediatR;

namespace E_Learning.Application.Lessons.Commands
{
    public class CreateLessonCommand : IRequest<LessonDto>
    {
        public string Title { get; set; }

        public string Description { get; set; }

        public string VideoUrl { get; set; }

        public int CourseId { get; set; }

    }

    public class CreateLessonHandler : IRequestHandler<CreateLessonCommand, LessonDto>
    {
        public CreateLessonHandler(IContext context, IMapper mapper)
        {

        }

        public Task<LessonDto> Handle(CreateLessonCommand request, CancellationToken cancellationToken)
        {



            throw new NotImplementedException();
        }
    }


}
