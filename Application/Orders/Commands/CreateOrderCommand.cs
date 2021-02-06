using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using E_Learning.Application.Basket.Queries.GetBasket;
using MediatR;

namespace E_Learning.Application.Orders.Commands
{
    public class CreateOrderCommand : IRequest<bool>
    {
        public string BasketId { get; set; }

    }

    public class CreateOrderHandler : IRequestHandler<CreateOrderCommand, bool>
    {
        private readonly IMediator _mediator;

        public CreateOrderHandler(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<bool> Handle(CreateOrderCommand request, CancellationToken cancellationToken)
        {
            var query = new GetBasketByIdQuery(request.BasketId);
            var result = await _mediator.Send(query);




            throw new NotImplementedException();
        }
    }

}
