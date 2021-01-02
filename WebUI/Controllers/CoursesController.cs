using System.ComponentModel;
using System.Threading.Tasks;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Domain.Model;
using Infrastructure.Persistance;
using Microsoft.AspNetCore.Mvc;

namespace E_Learning.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CoursesController : ControllerBase
    {
        private readonly ICoursesServices _coursesServices;

        public CoursesController(ICoursesServices coursesServices)
        {
            _coursesServices = coursesServices;
        }

        // GET: CoursesController
        [HttpGet]
        [Description("Get courses list")]
        public async Task<ActionResult> Get()
        {
            var courses = await _coursesServices.GetAllCourses();
            return Ok(courses);
        }

        [HttpPost]
        [Description("Add new courses")]
        public async Task<IActionResult> Create(Courses courses)
        {
            await _coursesServices.AddNewCourses(courses);
            return Ok(courses);
        }
    }
}
