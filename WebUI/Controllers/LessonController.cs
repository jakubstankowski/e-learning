using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Lessons.Commands;
using E_Learning.Application.Lessons.Commands.DeleteLesson;
using E_Learning.Application.Lessons.Commands.UpdateLesson;
using E_Learning.Application.Lessons.Queries.GetLessons;
using MediatR;
using Microsoft.AspNetCore.Authorization;
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

        [Authorize]
        [HttpPost]
        public async Task<ActionResult<LessonDto>> Create(CreateLessonCommand command)
        {
            var result = await _mediator.Send(command);

            return Ok(result);
        }


        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<LessonDto>> GetLesson(int id)
        {
            var query = new GetLessonByIdQuery(id);
            var result = await _mediator.Send(query);

            return Ok(result);
        }

        [Authorize]
        [HttpDelete("{id}")]
        public async Task<ActionResult<int>> Delete(int id)
        {
            var result = await _mediator.Send(new DeleteLessonCommand { Id = id });

            return Ok(result);
        }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<ActionResult<LessonDto>> Update(int id, UpdateLessonCommand command)
        {
            if (id != command.Id)
            {
                return BadRequest();
            }


            var result = await _mediator.Send(command);

            return Ok(result);
        }
    }
}
