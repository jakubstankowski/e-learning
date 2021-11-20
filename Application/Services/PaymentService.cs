using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Interfaces;
using E_Learning.Domain.Entities;
using E_Learning.Domain.Entities.OrderAggregate;
using Microsoft.Extensions.Configuration;
using Stripe;

namespace E_Learning.Application.Services
{
    public class PaymentService : IPaymentService
    {
        private readonly IConfiguration _configuration;
        private readonly IBasketService _basketService;

        public PaymentService(IConfiguration configuration, IBasketService basketService)
        {
            _configuration = configuration;
            _basketService = basketService;
        }

        public async Task<CustomerBasket> CreateOrUpdatePaymentIntent(CustomerBasket basket)
        {
            StripeConfiguration.ApiKey = _configuration["StripeSettings:SecretKey"];

            var service = new PaymentIntentService();

            PaymentIntent intent;

            long amount = (long)basket.Items.Sum(i => i.Price * 100);

            if (string.IsNullOrEmpty(basket.PaymentIntentId))
            {
                var options = new PaymentIntentCreateOptions
                {
                    Amount = CalculatePaymentAmount(basket),
                    Currency = "usd",
                    PaymentMethodTypes = new List<string> { "card" }
                };
                intent = await service.CreateAsync(options);
                basket.PaymentIntentId = intent.Id;
                basket.ClientSecret = intent.ClientSecret;
            }
            else
            {
                var options = new PaymentIntentUpdateOptions
                {
                    Amount = (long)basket.Items.Sum(i => i.Price * 100),
                };
                await service.UpdateAsync(basket.PaymentIntentId, options);
            }

            await _basketService.UpdateBasketAsync(basket);

            return basket;
        }

        static long CalculatePaymentAmount(CustomerBasket basket)
        {
            return (long)basket.Items.Sum(i => i.Price * 100);
        }

    }
}
