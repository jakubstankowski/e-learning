﻿using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Dtos;
using E_Learning.Application.Interfaces;
using E_Learning.Application.Orders.Queries.GetOrders;
using E_Learning.Domain.Entities.OrderAggregate;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace E_Learning.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;
        private readonly IMapper _mapper;
        private readonly IBasketService _basketService;
        private readonly IIdentityService _identityService;
        private readonly ILogger<OrderController> _logger;

        public OrderController(IOrderService orderService, IMapper mapper, IBasketService basketService, IIdentityService identityService, ILogger<OrderController> logger)
        {
            _orderService = orderService;
            _mapper = mapper;
            _basketService = basketService;
            _identityService = identityService;
            _logger = logger;
        }

        [HttpPost]
        public async Task<ActionResult> CreateOrder(OrderCreateDto orderCreateDto)
        {
            var basket = await _basketService.GetBasketByIdAsync(orderCreateDto.BasketId);

            if (basket == null)
            {
                return NotFound();
            }

            await _orderService.CreateOrderAsync(basket);

            await _orderService.SaveChangesAsync();

            _logger.LogInformation("Success create order");

            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrderDto>>> GetOrderByUser()
        {
            string userId = _identityService.GetUserId();

            var order = await _orderService.GetOrdersByUserIdAsync(userId);

            _logger.LogInformation("Success get user orders");

            return Ok(_mapper.Map<IEnumerable<Order>, IEnumerable<OrderDto>>(order));
        }
    }
}