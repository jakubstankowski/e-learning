using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
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

        public Task<CustomerBasket> Handle(UpdateBasketCommand request, CancellationToken cancellationToken)
        {
            var customerBasket = new CustomerBasket
            {
                Id = request.Id,
                Items = request.Items
            };



            throw new NotImplementedException();
        }
    }

}
