using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Learning.Domain.Entities;

namespace E_Learning.Application.Common.Interfaces
{
    public interface IBasketRepository
    {
        public Task<CustomerBasket> GetBasketByIdAsync(string basketId);

        public Task<CustomerBasket> UpdateBasketAsync(CustomerBasket basket);

        public Task<bool> DeleteBasketAsync(string basketId);
    }
}
