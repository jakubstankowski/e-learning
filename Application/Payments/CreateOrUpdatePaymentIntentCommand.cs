using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
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

        public CreateOrUpdatePaymentIntentCommandHandler(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public Task<CustomerBasket> Handle(CreateOrUpdatePaymentIntentCommand request, CancellationToken cancellationToken)
        {
            StripeConfiguration.ApiKey = Configuration.GetConnectionString("StripeSettings:SecretKey");

            throw new NotImplementedException();
        }
    }


}
