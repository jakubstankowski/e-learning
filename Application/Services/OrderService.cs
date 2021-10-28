using System.Threading.Tasks;
using E_Learning.Application.Interfaces;
using E_Learning.Domain.Entities.OrderAggregate;

namespace E_Learning.Application.Services
{
    public class OrderService : IOrderService
    {
        public Task<Order> CreateOrderAsync(string basketId)
        {
            throw new System.NotImplementedException();
        }
    }
}
