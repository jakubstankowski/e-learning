using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.ApplicationUser.Queries;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace E_Learning.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        public IMediator _mediator { get; }

        public UserController(IMediator mediator)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }

        [HttpGet("{id}/Courses")]
        public async Task<ActionResult<UserCoursesDto>> GetUserCourses(string id)
        {
            var query = new GetUserCoursesQuery(id);
            var result = await _mediator.Send(query);

            return Ok(result);
        }

    }
}
