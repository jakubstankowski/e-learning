﻿using System.Collections.Generic;
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
        private readonly IBasketService _basketService;
        private readonly IContext _context;
        private readonly IIdentityService _identityService;
        private readonly IMapper _mapper;

        public OrderService(IBasketService basketService, IContext context, IIdentityService identityService, IMapper mapper)
        {
            _basketService = basketService;
            _context = context;
            _identityService = identityService;
            _mapper = mapper;
        }


        public async Task<Order> CreateOrderAsync(string basketId)
        {
            var basket = await _basketService.GetBasketByIdAsync(basketId);

            if (basket == null) return null;

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

            decimal subTotal = items.Sum(item => item.Price);

            var existingOrder = await _context.Orders
                .Where(o => o.PaymentIntentId == basket.PaymentIntentId)
                .FirstOrDefaultAsync();


            var order = new Order(items, userEmail, userId, subTotal, basket.PaymentIntentId);


            if (existingOrder != null)
            {

            }

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();


            return order;
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
    }
}