using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using E_Learning.Application.Basket.Queries.GetBasket;
using E_Learning.Domain.Entities;
using MediatR;
using StackExchange.Redis;

namespace E_Learning.Application.Basket.Command.UpdateBasket
{
    public class UpdateBasketCommand : IRequest<CustomerBasket>
    {
        public string Id { get; set; }
        public List<BasketItem> Items { get; set; } = new List<BasketItem>();
    }

    public class UpdateBasketHandler : IRequestHandler<UpdateBasketCommand, CustomerBasket>
    {
        private readonly IDatabase _database;

        public UpdateBasketHandler(IConnectionMultiplexer redis)
        {
            _database = redis.GetDatabase();
        }

        public async Task<CustomerBasket> Handle(UpdateBasketCommand request, CancellationToken cancellationToken)
        {
            var basket = new CustomerBasket
            {
                Id = request.Id,
                Items = request.Items
            };

            var created = await _database.StringSetAsync(request.Id,
                JsonSerializer.Serialize(basket), TimeSpan.FromDays(30));

            if (!created)
            {
                return null;
            }

            return basket;

        }
    }

}
