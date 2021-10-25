using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_Learning.Application.Basket.Command.DeleteBasket;
using E_Learning.Application.Basket.Command.UpdateBasket;
using E_Learning.Application.Basket.Queries.GetBasket;
using E_Learning.Application.Interfaces;
using E_Learning.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace E_Learning.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BasketController : ControllerBase
    {
        private readonly IBasketService _basketService;

        public BasketController(IBasketService basketService)
        {
            _basketService = basketService;
        }


        [HttpPost]
        public async Task<ActionResult<CustomerBasket>> Create(string Id, List<BasketItem> Items)
        {
            var basket = await _basketService.UpdateBasketAsync(Id, Items);

            return basket;
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<CustomerBasket>> Get(string id)
        {
            var basket = await _basketService.GetBasketByIdAsync(id);

            if (basket == null) return NotFound();

            return basket;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> Delete(string id)
        {
            var result = await _basketService.DeleteBasketAsync(id);

            if (result) return Ok();

            return BadRequest(new ProblemDetails { Title = "Problem removing item from the basket" });
        }
    }
}
