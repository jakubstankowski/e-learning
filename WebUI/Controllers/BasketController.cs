using System.Threading.Tasks;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Dtos.Basket;
using E_Learning.Application.Interfaces;
using E_Learning.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace E_Learning.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BasketController : ControllerBase
    {
        private readonly IBasketService _basketService;
        private readonly ILogger<BasketController> _logger;

        public BasketController(IBasketService basketService, ILogger<BasketController> logger)
        {
            _basketService = basketService;
            _logger = logger;
        }


        [HttpPost]
        public async Task<ActionResult<CustomerBasket>> Create(CustomerBasketDto basketDto)
        {
            var basket = new CustomerBasket
            {
                Id = basketDto.Id,
                Items = basketDto.Items,
            };

            var updatedBasket = await _basketService.UpdateBasketAsync(basket);

            return updatedBasket;
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<CustomerBasket>> Get(string id)
        {
            var basket = await _basketService.GetBasketByIdAsync(id);

            if (basket == null)
            {
                throw new NotFoundException(nameof(CustomerBasket), id);
            }

            _logger.LogInformation($"Success get basket with id: {id}");

            return basket;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> Delete(string id)
        {
            var result = await _basketService.DeleteBasketAsync(id);

            if (result)
            {
                _logger.LogInformation($"Success delete basket with id: {id}");
                return Ok();
            }

            return BadRequest(new ProblemDetails { Title = "Problem removing item from the basket" });
        }
    }
}
