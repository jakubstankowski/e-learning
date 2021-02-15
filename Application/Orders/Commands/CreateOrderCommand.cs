using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using E_Learning.Application.Basket.Queries.GetBasket;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Domain.Entities;
using E_Learning.Domain.Entities.OrderAggregate;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Orders.Commands
{
    public class CreateOrderCommand : IRequest<bool>
    {
        public string BasketId { get; set; }


    }

    public class CreateOrderHandler : IRequestHandler<CreateOrderCommand, bool>
    {
        private readonly IMediator _mediator;
        private readonly IContext _context;

        public CreateOrderHandler(IMediator mediator, IContext context)
        {
            _mediator = mediator;
            _context = context;
        }

        public async Task<bool> Handle(CreateOrderCommand request, CancellationToken cancellationToken)
        {
            // TODO: is that ok to use CQRS in CQRS?
            var query = new GetBasketByIdQuery(request.BasketId);
            var basket = await _mediator.Send(query);



            var items = new List<OrderItem>();
            foreach (var item in basket.Items)
            {
                var courseItem = await _context.Courses.FirstOrDefaultAsync(c => c.Id == item.Id);

                if (courseItem == null)
                {
                    throw new NotFoundException(nameof(Course), item.Id);
                }

                var itemOrdered = new CourseItemOrdered(courseItem.Id, courseItem.Title);

                var orderItem = new OrderItem(itemOrdered, courseItem.Price);

                items.Add(orderItem);

            }

            var order = new Order(items, "email@email.com");

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            throw new NotImplementedException();
        }
    }

}
