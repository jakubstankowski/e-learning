using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Dto;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Common.Mapping;
using E_Learning.Application.Courses.Commands;
using E_Learning.Application.Courses.Commands.DeleteCourse;
using E_Learning.Application.Courses.Commands.UpdateCourse;
using E_Learning.Application.Courses.Queries;
using E_Learning.Application.Courses1.Queries;
using E_Learning.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace E_Learning.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CoursesController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IMediator _mediator;

        public CoursesController(IMapper mapper, IMediator mediator)
        {
            _mapper = mapper;
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }

      
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseDto>>> Get()
        {
            var query = new GetAllCoursesQuery();
            var result = await _mediator.Send(query);

            return Ok(result);

        }


        [HttpGet("{id}")]
        public async Task<ActionResult<CourseDto>> GetCourse(int id)
        {
            var query = new GetCoursesByIdQuery(id);
            var result = await _mediator.Send(query);

            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<CourseDto>> Create(CreateCourseCommand command)
        {
            var result = await _mediator.Send(command);

            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<int>> Delete(int id)
        {
            var result = await _mediator.Send(new DeleteCourseCommand { Id = id });

            return Ok(result);
        }

       [HttpPut("{id}")]
        public async Task<ActionResult<CourseDto>> Update(int id, UpdateCourseCommand command)
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
