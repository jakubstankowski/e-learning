using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Learning.Application.Lessons.Queries.GetLessons
{
    public class LessonDto
    {
        public int Id { get; set; }

        public bool IsDemo { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string VideoUrl { get; set; }

        public int CourseId { get; set; }

        public int? NextLessonId { get; set; }

        public int? PreviousLessonId { get; set; }
    }
}
