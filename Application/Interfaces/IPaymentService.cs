using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Learning.Domain.Entities;
using E_Learning.Domain.Entities.OrderAggregate;

namespace E_Learning.Application.Interfaces
{
    public interface IPaymentService
    {
        public Task<CustomerBasket> CreateOrUpdatePaymentIntent(string basketId);

        public Task<Order> UpdateOrderPaymentFailed(string paymentIntentId);

        public Task<Order> UpdateOrderPaymentSuccess(string paymentIntentId);
    }
}
