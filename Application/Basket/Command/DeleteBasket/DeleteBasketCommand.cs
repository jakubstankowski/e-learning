using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using E_Learning.Application.Common.Interfaces;
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
        private readonly IBasketRepository _basketRepository;

        public DeleteBasketHandler(IBasketRepository basketRepository)
        {
            _basketRepository = basketRepository;
        }

        public async Task<bool> Handle(DeleteBasketCommand request, CancellationToken cancellationToken)
        {
            return await _basketRepository.DeleteBasketAsync(request.Id);
        }
    }

}
