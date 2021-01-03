using System.Collections.Generic;
using System.ComponentModel;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Common.Mapping;
using E_Learning.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace E_Learning.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CoursesController : ControllerBase
    {
        private readonly ICoursesServices _coursesServices;
        private readonly IMapper _mapper;

        public CoursesController(ICoursesServices coursesServices, IMapper mapper)
        {
            _coursesServices = coursesServices;
            _mapper = mapper;
        }

        // GET: CoursesController
        [HttpGet]
        [Description("Get courses list")]
        public async Task<ActionResult<IEnumerable<CoursesDto>>> Get()
        {
            var courses = await _coursesServices.GetAllCourses();



            return Ok(_mapper.Map<IEnumerable<Courses>, IEnumerable<CoursesDto>>(courses));
        }

        [HttpPost]
        [Description("Add new courses")]
        public async Task<IActionResult> Create(Courses courses)
        {
            await _coursesServices.AddNewCourses(courses);
            return Ok(200);
        }
    }
}
