using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Interfaces;
using E_Learning.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using StackExchange.Redis;

namespace E_Learning.Application.Services
{
    public class BasketService : IBasketService
    {
        private readonly IDatabase _database;
        private readonly IContext _context;

        public BasketService(IConnectionMultiplexer redis, IContext context)
        {
            _database = redis.GetDatabase();
            _context = context;
        }


        public async Task<bool> DeleteBasketAsync(string basketId)
        {
            return await _database.KeyDeleteAsync(basketId);
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

        public async Task<CustomerBasket> UpdateBasketAsync(string Id, List<BasketItem> Items)
        {
            foreach (var item in Items)
            {
                var course = await _context
                         .Courses.FirstOrDefaultAsync(c => c.Id == item.Id);

                if (course == null)
                {
                    throw new NotFoundException(nameof(Course), item.Id);
                }

            }

            var basket = new CustomerBasket
            {
                Id = Id,
                Items = Items,
            };

            var created = await _database.StringSetAsync(Id,
                JsonSerializer.Serialize(basket), TimeSpan.FromDays(30));

            if (!created)
            {
                return null;
            }

            return basket;
        }
    }
}
