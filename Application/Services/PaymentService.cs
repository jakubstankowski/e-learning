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
        private readonly IOrderService _orderService;

        public PaymentService(IConfiguration configuration, IBasketService basketService, IOrderService orderService)
        {
            _configuration = configuration;
            _basketService = basketService;
            _orderService = orderService;
        }

        public async Task<CustomerBasket> CreateOrUpdatePaymentIntent(string basketId)
        {
            StripeConfiguration.ApiKey = _configuration["StripeSettings:SecretKey"];

            var basket = await _basketService.GetBasketByIdAsync(basketId);

            if (basket == null)
            {
                throw new NotFoundException(nameof(CustomerBasket), basketId);
            }

            var service = new PaymentIntentService();

            PaymentIntent intent;

            long amount = (long)basket.Items.Sum(i => i.Price * 100);

            if (string.IsNullOrEmpty(basket.PaymentIntentId))
            {
                var options = new PaymentIntentCreateOptions
                {
                    Amount = (long)basket.Items.Sum(i => i.Price * 100),
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

       async Task<Domain.Entities.OrderAggregate.Order> IPaymentService.UpdateOrderPaymentFailed(string paymentIntentId)
        {
            var order = await _orderService.GetOrderByPaymentIntentAsync(paymentIntentId);

            if (order == null) return null;

            order.Status = OrderStatus.PaymentFailed;

            await _orderService.SaveChangesAsync();

            return order;
        }

        async Task<Domain.Entities.OrderAggregate.Order> IPaymentService.UpdateOrderPaymentSucceeded(string paymentIntentId)
        {
            var order = await _orderService.GetOrderByPaymentIntentAsync(paymentIntentId);

            if (order == null) return null;

            order.Status = OrderStatus.PaymentRecevied;

            await _orderService.SaveChangesAsync();

            return order;
        }
    }
}
