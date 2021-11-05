using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Learning.Application.Orders.Queries.GetOrders;
using E_Learning.Domain.Entities;
using E_Learning.Domain.Entities.OrderAggregate;

namespace E_Learning.Application.Interfaces
{
    public interface IOrderService
    {
        public Task<Order> CreateOrderAsync(CustomerBasket basket);

        public Task<IEnumerable<Order>> GetOrdersByUserIdAsync(string userId);

        public void DeleteOrder(Order order);

        public Task<Order> GetOrderByPaymentIntentAsync(string paymentId);

        public Task<Order> UpdateOrderPaymentFailed(string paymentIntentId);

        public Task<Order> UpdateOrderPaymentSucceeded(string paymentIntentId);

        public Task<bool> SaveChangesAsync();


    }
}
