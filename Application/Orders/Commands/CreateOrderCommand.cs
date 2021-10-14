using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Basket.Queries.GetBasket;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Orders.Queries.GetOrders;
using E_Learning.Domain.Entities;
using E_Learning.Domain.Entities.OrderAggregate;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Orders.Commands
{
    public class CreateOrderCommand : IRequest<Order>
    {
        public string BasketId { get; set; }

    }

    public class CreateOrderHandler : IRequestHandler<CreateOrderCommand, Order>
    {
        private readonly IMediator _mediator;
        private readonly IContext _context;
        private readonly IMapper _mapper;
        private readonly IIdentityService _identityService;

        public CreateOrderHandler(IMediator mediator, IContext context, IMapper mapper, IIdentityService identityService)
        {
            _mediator = mediator;
            _context = context;
            _mapper = mapper;
            _identityService = identityService;
        }

        public async Task<Order> Handle(CreateOrderCommand request, CancellationToken cancellationToken)
        {
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


            string userEmail = _identityService.GetUserEmail();
            string userId = _identityService.GetUserId();


            var order = new Order(items, userEmail, userId)
            {
                SubTotal = basket.SubTotal
            };

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();


            return order;

        }
    }

}