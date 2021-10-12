using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_Learning.Application.Admin;
using E_Learning.Application.Common.Dto;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace E_Learning.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
    public class AdminController : ControllerBase
    {
        private readonly IMediator _mediator;

        public AdminController(IMediator mediator)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }

        // GET: api/<AdminController>
        [HttpGet("Courses")]
        public async Task<ActionResult<IEnumerable<CourseDto>>> GetAdminCourses()
        {
            var query = new GetAdminCoursesQuery();
            var result = await _mediator.Send(query);

            return Ok(result);
        }

    }
}
