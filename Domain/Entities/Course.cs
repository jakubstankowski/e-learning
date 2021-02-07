using System.Collections.Generic;

namespace E_Learning.Domain.Entities
{
    public class Course
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public decimal Price { get; set; }

        public ICollection<Lesson> Lessons { get; set; }

        public ICollection<ApplicationUser> ApplicationUser { get; set; }
    }
}
