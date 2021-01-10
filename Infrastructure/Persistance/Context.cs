using System;
using System.Linq;
using System.Threading.Tasks;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Domain.Entities;
using Infrastructure.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistance
{
    public class Context : IdentityDbContext<ApplicationUser>, IContext
    {
      

        public Context(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Course> Courses { get; set ; }

        public async Task<int> SaveChangesAsync()
        {
            return await base.SaveChangesAsync(new());
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

        }



    }
}
