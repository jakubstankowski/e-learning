using System.Collections.Generic;
using System.Threading.Tasks;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Domain.Entities;
using Infrastructure.Persistance;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Services
{
    public class CoursesServices : ICoursesServices
    {
        private readonly Context _context;


        public CoursesServices(Context context)
        {
            _context = context;
        }

        public async Task AddNewCourses(Course courses)
        {
            _context.Courses.Add(courses);
           await  _context.SaveChangesAsync();
        }


        public async Task<IEnumerable<Course>> GetAllCourses()
        {
            return await _context.Courses.ToListAsync();
        }

    }
}
