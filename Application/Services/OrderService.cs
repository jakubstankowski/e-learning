using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Interfaces;
using E_Learning.Application.Orders.Queries.GetOrders;
using E_Learning.Domain.Entities;
using E_Learning.Domain.Entities.OrderAggregate;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.Services
{
    public class OrderService : IOrderService
    {
        private readonly IContext _context;
        private readonly IIdentityService _identityService;
        private readonly IMapper _mapper;
        private readonly IPaymentService _paymentService;
        private readonly ICourseService _courseService;

        public OrderService(IContext context, IIdentityService identityService,
            IMapper mapper, IPaymentService paymentService, ICourseService courseService)
        {
            _context = context;
            _identityService = identityService;
            _mapper = mapper;
            _paymentService = paymentService;
            _courseService = courseService;
        }


        public async Task<Order> CreateOrderAsync(CustomerBasket basket)
        {
            var items = new List<OrderItem>();

            foreach (var item in basket.Items)
            {
                var courseItem = await _courseService.GetCourseByIdAsync(item.Id);

                var itemOrdered = new CourseItemOrdered(courseItem.Id, courseItem.Title);

                var orderItem = new OrderItem(itemOrdered, courseItem.Price);

                items.Add(orderItem);
            }


            string userEmail = _identityService.GetUserEmail();
            string userId = _identityService.GetUserId();

            decimal subTotal = items.Sum(item => item.Price);

            var existingOrder = await _context.Orders
                .Where(o => o.PaymentIntentId == basket.PaymentIntentId)
                .FirstOrDefaultAsync();


            var order = new Order(items, userEmail, userId, subTotal, basket.PaymentIntentId);


            if (existingOrder != null)
            {
                _context.Orders.Remove(order);
                await _paymentService.CreateOrUpdatePaymentIntent(basket.PaymentIntentId);
            }

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return order;
        }

        public void DeleteOrder(Order order)
        {
            _context.Orders.Remove(order);
        }

        public Task DeleteOrderByIdAsync(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<Order> GetOrderByPaymentIntentAsync(string paymentId)
        {
            return _context.Orders.Where(o => o.PaymentIntentId == paymentId)
                 .FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<OrderDto>> GetOrdersByUserAsync()
        {
            string userId = _identityService.GetUserId();

            var orders = await _context.Orders
                .Where(o => o.BuyerId == userId)
                .Include(o => o.OrderItems)
                .ToListAsync();


            return _mapper.Map<IEnumerable<Order>, IEnumerable<OrderDto>>(orders);
        }

        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync() >= 0);
        }

        public async Task<Order> UpdateOrderPaymentFailed(string paymentIntentId)
        {
            var order = await _context.Orders.Where(o => o.PaymentIntentId == paymentIntentId)
                .FirstOrDefaultAsync();

            if (order == null) return null;

            order.Status = OrderStatus.PaymentFailed;

            await _context.SaveChangesAsync();

            return order;
        }

        public async Task<Order> UpdateOrderPaymentSucceeded(string paymentIntentId)
        {
            var order = await _context.Orders.Where(o => o.PaymentIntentId == paymentIntentId)
               .FirstOrDefaultAsync();

            if (order == null) return null;

            order.Status = OrderStatus.PaymentRecevied;

            await _context.SaveChangesAsync();

            return order;
        }
    }
}
