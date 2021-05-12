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
    [Authorize(Roles = "User")]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IMapper _mapper;

        public IMediator _mediator { get; }

        public UserController(IMapper mapper, IMediator mediator)
        {
            _mapper = mapper;
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }

        [HttpGet("{id}/Courses")]
        public async Task<ActionResult<UserCoursesDto>> GetUserCourses(int userId)
        {
            var query = new GetUserCoursesQuery(userId);
            var result = await _mediator.Send(query);

            return Ok(result);
        }

    }
}
