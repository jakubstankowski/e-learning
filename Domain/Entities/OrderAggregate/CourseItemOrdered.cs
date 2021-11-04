using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Learning.Domain.Entities.OrderAggregate
{
    public class CourseItemOrdered
    {
        public CourseItemOrdered()
        {

        }

        public CourseItemOrdered(int courseId, string courseTitle)
        {
            this.CourseId = courseId;
            this.CourseTitle = courseTitle;
        }

        public int CourseId { get; set; }

        public string CourseTitle { get; set; }

    }
}
