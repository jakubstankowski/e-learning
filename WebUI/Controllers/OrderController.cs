using System;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Dtos;
using E_Learning.Application.Interfaces;
using E_Learning.Application.Orders.Queries.GetOrders;
using E_Learning.Domain.Entities;
using E_Learning.Domain.Entities.OrderAggregate;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

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

        public OrderController(IOrderService orderService, IMapper mapper, IBasketService basketService)
        {
            _orderService = orderService;
            _mapper = mapper;
            _basketService = basketService;
        }

        [HttpPost]
        public async Task<ActionResult> Create(OrderCreateDto orderCreateDto)
        {
            var basket = await _basketService.GetBasketByIdAsync(orderCreateDto.BasketId);

            if (basket == null)
            {
                return NotFound();
            }

            await _orderService.CreateOrderAsync(basket);

            await _orderService.SaveChangesAsync();

            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<OrderDto>> GetOrderByUser()
        {
            var order = await _orderService.GetOrdersByUserAsync();

            return Ok(order);
        }
    }
}