using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Domain.Entities.OrderAggregate;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Orders.Queries.GetOrders
{
    public class GetOrdersByUserQuery : IRequest<IEnumerable<Order>>
    {

    }

    public class GetOrdersByUserQueryHandler : IRequestHandler<GetOrdersByUserQuery, IEnumerable<Order>>
    {
        private readonly IIdentityService _identityService;
        private readonly IContext _context;
        private readonly IMapper _mapper;

        public GetOrdersByUserQueryHandler(IIdentityService identityService, IContext context, IMapper mapper)
        {
            _identityService = identityService;
            _context = context;
            _mapper = mapper;
        }
        public async Task<IEnumerable<Order>> Handle(GetOrdersByUserQuery request, CancellationToken cancellationToken)
        {
            string userId = _identityService.GetUserId();

            var order = await _context.Orders
                .Where(o => o.BuyerId == userId)
                .Include(o => o.OrderItems)
                .Include(o => o.Status)
                .ToListAsync();

            return order;
        }
    }

}
