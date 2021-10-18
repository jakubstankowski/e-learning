using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using E_Learning.Application.Basket.Command.UpdateBasket;
using E_Learning.Application.Basket.Queries.GetBasket;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Domain.Entities;
using MediatR;
using Microsoft.Extensions.Configuration;
using Stripe;

namespace E_Learning.Application.Payments
{
    public class CreateOrUpdatePaymentIntentCommand : IRequest<CustomerBasket>
    {
        public string BasketId { get; set; }
    }

    public class CreateOrUpdatePaymentIntentCommandHandler : IRequestHandler<CreateOrUpdatePaymentIntentCommand, CustomerBasket>
    {
        public IConfiguration Configuration { get; }

        private readonly IMediator _mediator;
        private readonly IBasketRepository _basketRepository;
        private readonly IConfiguration _configuration;

        public CreateOrUpdatePaymentIntentCommandHandler(IConfiguration configuration, IMediator mediator, IBasketRepository basketRepository)
        {
            _mediator = mediator;
            _basketRepository = basketRepository;
            _configuration = configuration;
        }

        public async Task<CustomerBasket> Handle(CreateOrUpdatePaymentIntentCommand request, CancellationToken cancellationToken)
        {
            StripeConfiguration.ApiKey = _configuration.GetConnectionString("StripeSettings:SecretKey");

            var basket = await _basketRepository.GetBasketByIdAsync(request.BasketId);

            if (basket == null) return null;

            var service = new PaymentIntentService();

            PaymentIntent intent;

            if (string.IsNullOrEmpty(basket.PaymentIntentId))
            {
                var options = new PaymentIntentCreateOptions
                {
                    Amount = (long?)basket.SubTotal,
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
                    Amount = (long?)basket.SubTotal,
                };
                await service.UpdateAsync(basket.PaymentIntentId, options);
            }


            //use there a update basket command? 


            return basket;
        }
    }


}
