using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_Learning.Application.Common.Interfaces;
using Infrastructure.Persistance;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace E_Learning.Controllers
{
    [ApiController]
    [Route("[controller]")]
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
        public async Task<ActionResult> Index()
        {
            var courses = await _coursesServices.GetAllCourses();
            return Ok(courses);
        }
    }
}
