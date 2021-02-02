using System.Threading;
using System.Threading.Tasks;
using E_Learning.Domain.Entities;
using E_Learning.Domain.Entities.OrderAggregate;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Common.Interfaces
{
    public interface IContext
    {
        public DbSet<Course> Courses { get; set; }

        public DbSet<Lesson> Lessons { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<OrderItem> OrderItems { get; set; }

        Task<int> SaveChangesAsync();
    }
}
