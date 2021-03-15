using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Learning.Application.Lessons.Queries.GetLessons;

namespace E_Learning.Application.Courses.Queries.GetCourses
{
    public class CourseByIdDto
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public decimal Price { get; set; }

        public string Description { get; set; }

        public IEnumerable<LessonDto> Lessons { get; set; }
    }
}
