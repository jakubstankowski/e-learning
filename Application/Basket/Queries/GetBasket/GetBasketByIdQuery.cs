﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Domain.Entities;
using MediatR;
using StackExchange.Redis;

namespace E_Learning.Application.Basket.Queries.GetBasket
{
    public class GetBasketByIdQuery : IRequest<CustomerBasket>
    {
        public string Id { get; set; }

        public GetBasketByIdQuery(string id)
        {
            this.Id = id;
        }

    }

    public class GetBasketHandler : IRequestHandler<GetBasketByIdQuery, CustomerBasket>
    {
        private readonly IBasketRepository _basketRepository;

        public GetBasketHandler(IBasketRepository basketRepository)
        {
            _basketRepository = basketRepository;
        }

        public async Task<CustomerBasket> Handle(GetBasketByIdQuery request, CancellationToken cancellationToken)
        {
            return await _basketRepository.GetBasketByIdAsync(request.Id);
        }
    }


}
