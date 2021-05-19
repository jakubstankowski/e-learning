using System;
using System.Threading.Tasks;
using E_Learning.Application.ApplicationUser.Queries;
using E_Learning.Application.Common.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace E_Learning.Controllers
{
    [ApiController]
    [Authorize(Roles = "User")]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        public IMediator _mediator { get; }

        public UserController(IMediator mediator)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }

        
        [HttpGet("Courses")]
        public async Task<ActionResult<UserCoursesDto>> GetUserCourses()
        {

            var query = new GetUserCoursesQuery();
            var result = await _mediator.Send(query);

            return Ok(result);
        }

        [HttpPost("Courses")]
        public async Task<ActionResult<UserCoursesDto>> PostUserCourses()
        {
            var query = new GetUserCoursesQuery();
            var result = await _mediator.Send(query);

            return Ok(result);
        }

    }
}
