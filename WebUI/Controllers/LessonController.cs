using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Lessons.Commands;
using E_Learning.Application.Lessons.Queries.GetLessons;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace E_Learning.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LessonController : ControllerBase
    {
        private readonly IMediator _mediator;

        public LessonController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<ActionResult<LessonDto>> Create(CreateLessonCommand command)
        {
            var result = await _mediator.Send(command);

            return Ok(result);
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<LessonDto>>> GetAll()
        {
            var query = new GetAllLessonsQuery();
            var result = await _mediator.Send(query);

            return Ok(result);
        }
    }
}
