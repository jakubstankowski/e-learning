using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Learning.Domain.Entities;

namespace E_Learning.Application.Interfaces
{
    public interface IBasketService
    {
        public Task<CustomerBasket> GetBasketByIdAsync(string basketId);

        public Task<CustomerBasket> UpdateBasketAsync(string Id, List<BasketItem> Items);

        public Task<bool> DeleteBasketAsync(string basketId);
    }
}
