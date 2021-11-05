using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Interfaces;
using E_Learning.Application.Lessons.Queries.GetLessons;
using E_Learning.Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace E_Learning.Controllers
{
    [ApiController]
    [Authorize(Roles = "User")]
    [Route("api/[controller]")]
    public class LessonController : ControllerBase
    {
        private readonly ILessonService _lessonService;
        private readonly ICourseService _courseService;
        private readonly IMapper _mapper;

        public LessonController(ILessonService lessonService, ICourseService courseService, IMapper mapper)
        {
            _lessonService = lessonService;
            _courseService = courseService;
            _mapper = mapper;
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<ActionResult<IEnumerable<LessonDto>>> Create(LessonDto lessonDto)
        {
            var course = await _courseService.GetCourseWithLessonsByLessonCourseIdAsync(lessonDto.CourseId);

            if (course == null)
            {
                return NotFound();
            }

            Lesson lessonToCreate = new()
            {
                CourseId = lessonDto.CourseId,
                Description = lessonDto.Description,
                Title = lessonDto.Title,
                VideoUrl = lessonDto.VideoUrl
            };


            var lessons = await _lessonService.AddLessonToCourseAsync(lessonToCreate, course);

            await _lessonService.SaveChangesAsync();

            return Ok(_mapper.Map<IEnumerable<Lesson>, IEnumerable<LessonDto>>(lessons));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<LessonDto>> GetLesson(int id)
        {
            var lesson = await _lessonService.GetLessonByIdAsync(id);

            if (lesson == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<Lesson, LessonDto>(lesson));
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var lesson = await _lessonService.GetLessonByIdAsync(id);

            if (lesson == null)
            {
                return NotFound();
            }

            _lessonService.DeleteLesson(lesson);

            return Ok();
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public async Task<ActionResult<LessonDto>> UpdateLesson(int id, LessonDto lessonDto)
        {
            if (id != lessonDto.Id)
            {
                return BadRequest();
            }

            var lesson = await _lessonService.GetLessonByIdAsync(id);

            if (lesson == null)
            {
                return NotFound();
            }


            var updatedLesson = await _lessonService.UpdateLessonAsync(lesson, lessonDto);

            await _lessonService.SaveChangesAsync();

            return Ok(_mapper.Map<IEnumerable<Lesson>, IEnumerable<LessonDto>>(updatedLesson));
        }
    }
}
