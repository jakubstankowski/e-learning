using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Learning.Domain.Entities.OrderAggregate;

namespace E_Learning.Application.Interfaces
{
    public interface IOrderService
    {
        public Task<Order> CreateOrderAsync(string basketId);


    }
}
