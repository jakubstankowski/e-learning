﻿using System.Threading.Tasks;
using E_Learning.Domain.Entities;
using E_Learning.Domain.Entities.OrderAggregate;

namespace E_Learning.Application.Interfaces
{
    public interface IPaymentService
    {
        public Task<CustomerBasket> CreateOrUpdatePaymentIntent(CustomerBasket basket);

    }
}
