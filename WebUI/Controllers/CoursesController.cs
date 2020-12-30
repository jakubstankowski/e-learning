using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Domain.Model;
using Infrastructure.Persistance;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace E_Learning.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CoursesController : ControllerBase
    {
        private Context _context;
        private ICoursesServices _coursesServices;

        public CoursesController(Context context, ICoursesServices coursesServices)
        {
            _context = context;
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
