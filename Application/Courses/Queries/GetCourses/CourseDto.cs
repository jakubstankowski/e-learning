using System.Collections.Generic;
using E_Learning.Application.Lessons.Queries.GetLessons;
using E_Learning.Domain.Entities;

namespace E_Learning.Application.Common.Dto
{
    public class CourseDto
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public decimal Price { get; set; }

        public string Description { get; set; }

        public IEnumerable<LessonDto> Lessons { get; set; }

    }
}
