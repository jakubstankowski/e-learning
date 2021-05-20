using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using E_Learning.Application.Common.Dto;
using E_Learning.Application.Home;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace E_Learning.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly IMediator _mediator;

        public HomeController(IMediator mediator)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }

        [HttpGet("Courses")]
        public async Task<ActionResult<IEnumerable<CourseDto>>> GetHomeCourses()
        {
            var query = new GetHomeCoursesQuery();
            var result = await _mediator.Send(query);

            return Ok(result);
        }

    }
}
