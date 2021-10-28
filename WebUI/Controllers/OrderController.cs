using System.Threading.Tasks;
using E_Learning.Application.Interfaces;
using E_Learning.Application.Orders.Queries.GetOrders;
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

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpPost]
        public async Task<ActionResult> Create(string basketId)
        {
            var order = await _orderService.CreateOrderAsync(basketId);

            return Ok(order);
        }

        [HttpGet]
        public async Task<ActionResult<OrderDto>> GetOrderByUser()
        {
            var order = await _orderService.GetOrdersByUserAsync();

            return Ok(order);
        }
    }
}