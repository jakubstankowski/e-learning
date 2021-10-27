using System.Collections.Generic;
using System.Threading.Tasks;
using E_Learning.Application.Common.Dto;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Interfaces;
using E_Learning.Application.Lessons.Queries.GetLessons;
using E_Learning.Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace E_Learning.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CoursesController : ControllerBase
    {
        private readonly ICourseService _courseService;

        public CoursesController(ICourseService courseService)
        {
            _courseService = courseService;
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<CourseDto>> GetCourse(int id)
        {
            var course = await _courseService.GetCourseById(id);

            return Ok(course);
        }

        [HttpGet("{id}/Lessons")]
        public async Task<ActionResult<IEnumerable<LessonDto>>> GetCourseLessons(int id)
        {
            var courseLessons = await _courseService.GetCourseLessons(id);

            return Ok(courseLessons);
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<ActionResult<IEnumerable<CourseDto>>> Create(CourseDto courseDto)
        {
            var course = await _courseService.CreateCourse(courseDto);

            return Ok(course);
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<ActionResult<int>> Delete(int id)
        {
            await _courseService.DeleteCourse(id);

            return Ok();
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public async Task<ActionResult<CourseDto>> Update(CourseDto courseDto)
        {
            var updatedCourse = await _courseService.UpdateCourse(courseDto);

            return Ok(updatedCourse);
        }


    }
}
