﻿using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Dto;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Interfaces;
using E_Learning.Application.Lessons.Queries.GetLessons;
using E_Learning.Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace E_Learning.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CoursesController : ControllerBase
    {
        private readonly ICourseService _courseService;
        private readonly IMapper _mapper;
        private readonly IIdentityService _identityService;
        private readonly ILogger<CoursesController> _logger;

        public CoursesController(ICourseService courseService, IMapper mapper, IIdentityService identityService, ILogger<CoursesController> logger)
        {
            _courseService = courseService;
            _mapper = mapper;
            _identityService = identityService;
            _logger = logger;
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<CourseDto>> GetCourse(int id)
        {
            var course = await _courseService.GetCourseByIdAsync(id);

            if (course == null)
            {
                return NotFound();
            }

            _logger.LogInformation($"Success get course with id {id}");

            return _mapper.Map<Course, CourseDto>(course);
        }

        [HttpGet("Home")]
        public async Task<ActionResult<IEnumerable<CourseDto>>> GetHomeCourses()
        {
            var course = await _courseService.GetCoursesAsync();

            _logger.LogInformation("Success get home courses");

            return Ok(_mapper.Map<IEnumerable<Course>, IEnumerable<CourseDto>>(course));
        }


        [Authorize(Roles = "Admin")]
        [HttpGet("Admin")]
        public async Task<ActionResult<IEnumerable<CourseDto>>> GetAdminCourses()
        {
            var course = await _courseService.GetCoursesAsync();

            _logger.LogInformation("Success get admin courses");

            return Ok(_mapper.Map<IEnumerable<Course>, IEnumerable<CourseDto>>(course));
        }

        [Authorize]
        [HttpGet("User")]
        public async Task<ActionResult<IEnumerable<CourseDto>>> GetUserCourses()
        {
            string userId = _identityService.GetUserId();

            var course = await _courseService.GetCourseByUserIdAsync(userId);

            _logger.LogInformation("Success get user courses");

            return Ok(_mapper.Map<IEnumerable<Course>, IEnumerable<CourseDto>>(course));
        }



        [HttpPost]
        public async Task<ActionResult<IEnumerable<CourseDto>>> CreateCourse(CourseDto courseDto)
        {
            var courseToCreate = new Course
            {
                Title = courseDto.Title,
                Description = courseDto.Description,
                Price = courseDto.Price,
                ImageUrl = courseDto.ImageUrl
            };

            var courses = await _courseService.CreateCourseAsync(courseToCreate);

            await _courseService.SaveChangesAsync();

            _logger.LogInformation("Success create new course");

            return Ok(courses);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteCourse(int id)
        {
            var course = await _courseService.GetCourseByIdAsync(id);

            if (course == null)
            {
                return NotFound();
            }

            _courseService.DeleteCourse(course);
            await _courseService.SaveChangesAsync();

            _logger.LogInformation("Success delete course");

            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<CourseDto>> UpdateCourse(int id, CourseDto courseDto)
        {
            if (id != courseDto.Id)
            {
                return BadRequest();
            }

            var course = await _courseService.GetCourseByIdAsync(id);

            if (course == null)
            {
                return NotFound();
            }

            var updatedCourse = await _courseService.UpdateCourseAsync(course, courseDto);

            await _courseService.SaveChangesAsync();

            _logger.LogInformation($"Success update course with id {id}");

            return Ok(_mapper.Map<IEnumerable<Course>, IEnumerable<CourseDto>>(updatedCourse));
        }


    }
}
