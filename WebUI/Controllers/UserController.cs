using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.ApplicationUser.Queries;
using Infrastructure.Identity;
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

        private readonly IIdentityService _identityService;

        public UserController(IMediator mediator, IIdentityService identityService)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
            _identityService = identityService;
        }

            //TODO remove user id
        [HttpGet("Courses")]
        public async Task<ActionResult<UserCoursesDto>> GetUserCourses()
        {
            string userId = _identityService.GetUserId();

            var query = new GetUserCoursesQuery(userId);
            var result = await _mediator.Send(query);

            return Ok(result);
        }

        [HttpPost("Courses")]
        public async Task<ActionResult<UserCoursesDto>> PostUserCourses()
        {
            string userId = _identityService.GetUserId();

            var query = new GetUserCoursesQuery(userId);
            var result = await _mediator.Send(query);

            return Ok(result);
        }

    }
}
