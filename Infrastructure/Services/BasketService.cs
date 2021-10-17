using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Domain.Entities;
using StackExchange.Redis;

namespace Infrastructure.Services
{
    public class BasketService : IBasketRepository
    {
        private readonly IDatabase _database;

        public BasketService(IConnectionMultiplexer redis)
        {
            _database = redis.GetDatabase();
        }


        public async Task<CustomerBasket> GetBasketByIdAsync(string basketId)
        {
            var data = await _database.StringGetAsync(basketId);


            if (data.IsNullOrEmpty)
            {
                throw new NotFoundException(nameof(CustomerBasket), basketId);
            }

            return JsonSerializer.Deserialize<CustomerBasket>(data);
        }

        public Task<CustomerBasket> UpdateBasketAsync(CustomerBasket basket)
        {
            throw new NotImplementedException();
        }
    }
}
