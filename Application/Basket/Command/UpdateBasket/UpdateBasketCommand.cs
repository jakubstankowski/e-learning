using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Basket.Queries.GetBasket;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
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
        private readonly IBasketRepository _basketRepository;

        public UpdateBasketHandler(IBasketRepository basketRepository)
        {
            _basketRepository = basketRepository;
        }

        public async Task<CustomerBasket> Handle(UpdateBasketCommand request, CancellationToken cancellationToken)
        {
            var basket = new CustomerBasket
            {
                Id = request.Id,
                Items = request.Items,
            };

            return await _basketRepository.UpdateBasketAsync(basket);
        }
    }

}
