using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Orders.Queries.GetOrders
{
    public class GetOrderByUserQuery : IRequest<IEnumerable<OrderDto>>
    {

    }

    public class GetOrderByUserQueryHandler : IRequestHandler<GetOrderByUserQuery, IEnumerable<OrderDto>>
    {
        private readonly IIdentityService _identityService;
        private readonly IContext _context;
        private readonly IMapper _mapper;

        public GetOrderByUserQueryHandler(IIdentityService identityService, IContext context, IMapper mapper)
        {
            _identityService = identityService;
            _context = context;
            _mapper = mapper;
        }
        public Task<IEnumerable<OrderDto>> Handle(GetOrderByUserQuery request, CancellationToken cancellationToken)
        {
            string userId = _identityService.GetUserId();

            var orders = _context.Orders.Where(o => o.BuyerId == userId);

            throw new NotImplementedException();
        }
    }

}
