using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Dto;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Common.Mapping;
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
        private readonly ICoursesServices _coursesServices;
        private readonly IMapper _mapper;
        private readonly IMediator _mediator;

        public CoursesController(ICoursesServices coursesServices, IMapper mapper, IMediator mediator)
        {
            _coursesServices = coursesServices;
            _mapper = mapper;
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }

        // GET: CoursesController
        [HttpGet]
        [Description("Get courses list")]
        public async Task<ActionResult<IEnumerable<CourseDto>>> Get()
        {
            var query = new GetAllCoursesQuery();
            var result = await _mediator.Send(query);

            return Ok(result);

        }


        [HttpGet("{id}")]
        [Description("Get course")]
        public async Task<ActionResult<CourseDto>> GetCourse(int id)
        {
            var query = new GetCoursesByIdQuery(id);

            var result = await _mediator.Send(query);

            return Ok(result);
        }

        [HttpPost]
        [Description("Add new courses")]
        public async Task<IActionResult> Create(Course courses)
        {
            await _coursesServices.AddNewCourses(courses);
            return Ok(200);
        }


    }
}
