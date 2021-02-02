using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using StackExchange.Redis;

namespace E_Learning.Application.Basket.Command.DeleteBasket
{
    public class DeleteBasketCommand : IRequest<bool>
    {
        public DeleteBasketCommand(string id)
        {
            Id = id;
        }

        public string Id { get; set; }
    }


    public class DeleteBasketHandler : IRequestHandler<DeleteBasketCommand, bool>
    {
        private readonly IDatabase _database;

        public DeleteBasketHandler(IConnectionMultiplexer redis)
        {
            _database = redis.GetDatabase();
        }

        public async Task<bool> Handle(DeleteBasketCommand request, CancellationToken cancellationToken)
        {
            return await _database.KeyDeleteAsync(request.Id);
        }
    }

}
