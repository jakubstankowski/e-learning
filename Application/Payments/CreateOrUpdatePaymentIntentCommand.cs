using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using E_Learning.Domain.Entities;
using MediatR;

namespace E_Learning.Application.Payments
{
    public class CreateOrUpdatePaymentIntentCommand : IRequest<CustomerBasket>
    {
        public string BasketId { get; set; }
    }

    public class CreateOrUpdatePaymentIntentCommandHandler : IRequestHandler<CreateOrUpdatePaymentIntentCommand, CustomerBasket>
    {
        public Task<CustomerBasket> Handle(CreateOrUpdatePaymentIntentCommand request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }


}
