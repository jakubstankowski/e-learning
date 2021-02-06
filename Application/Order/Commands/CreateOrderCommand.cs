using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using E_Learning.Application.Basket.Queries.GetBasket;
using MediatR;

namespace E_Learning.Application.Order.Commands
{
    public class CreateOrderCommand : IRequest<bool>
    {
        public string BasketId { get; set; }

    }

    public class CreateOrderHandler : IRequestHandler<CreateOrderCommand, bool>
    {
        public Task<bool> Handle(CreateOrderCommand request, CancellationToken cancellationToken)
        {
            var basket = new GetBasketByIdQuery(request.BasketId);




            throw new NotImplementedException();
        }
    }

}
