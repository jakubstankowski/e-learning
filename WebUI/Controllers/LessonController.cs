using System.Collections.Generic;
using System.Threading.Tasks;
using E_Learning.Application.Interfaces;
using E_Learning.Application.Lessons.Commands;
using E_Learning.Application.Lessons.Commands.DeleteLesson;
using E_Learning.Application.Lessons.Commands.UpdateLesson;
using E_Learning.Application.Lessons.Queries.GetLessons;
using MediatR;
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

        public LessonController(ILessonService lessonService)
        {
            _lessonService = lessonService;
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<ActionResult<IEnumerable<LessonDto>>> Create(LessonDto lessonDto)
        {
            var lesson = await _lessonService.CreateLessonAsync(lessonDto);

            return Ok(lesson);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<LessonDto>> GetLesson(int id)
        {
            var lesson = await _lessonService.GetLessonByIdAsync(id);

            return Ok(lesson);
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<ActionResult<int>> Delete(int id)
        {
            var result = await _lessonService.DeleteLessonByIdAsync(id);

            return Ok();
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public async Task<ActionResult<LessonDto>> Update(int id, LessonDto lessonDto)
        {
            if (id != lessonDto.Id)
            {
                return BadRequest();
            }

            var lesson = await _lessonService.UpdateLessonAsync(lessonDto);

            return Ok(lesson);
        }
    }
}
