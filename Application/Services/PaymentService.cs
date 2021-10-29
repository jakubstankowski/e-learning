using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Learning.Application.Interfaces;
using E_Learning.Domain.Entities;

namespace E_Learning.Application.Services
{
    public class PaymentService : IPaymentService
    {
        public Task<CustomerBasket> CreateOrUpdatePaymentIntent()
        {
            throw new NotImplementedException();
        }
    }
}
