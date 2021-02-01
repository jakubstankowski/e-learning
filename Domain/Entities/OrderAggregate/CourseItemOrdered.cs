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


        public CourseItemOrdered(int courseItemId, string courseTitle)
        {
            this.CourseItemId = courseItemId;
            this.CourseTitle = courseTitle;
        }

        public int Id { get; set; }

        public int CourseItemId { get; set; }

        public string CourseTitle { get; set; }

    }
}
