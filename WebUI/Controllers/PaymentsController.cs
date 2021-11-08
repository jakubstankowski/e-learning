using System.IO;
using System.Threading.Tasks;
using E_Learning.Application.Interfaces;
using E_Learning.Domain.Entities;
using E_Learning.Domain.Entities.OrderAggregate;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Stripe;

namespace E_Learning.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentsController : ControllerBase
    {
        private readonly IPaymentService _paymentService;
        private readonly IOrderService _orderService;
        private readonly ILogger<PaymentsController> _logger;
        private readonly IConfiguration _configuration;
        private readonly string _whSecret;
        private readonly IUserCourseService _userCourseService;
        private readonly IBasketService _basketService;

        public PaymentsController(IPaymentService paymentService, IOrderService orderService, ILogger<PaymentsController> logger, IConfiguration configuration, IUserCourseService userCourseService, IBasketService basketService)
        {
            _paymentService = paymentService;
            _orderService = orderService;
            _logger = logger;
            _configuration = configuration;
            _whSecret = _configuration["StripeSettings:EndpointSecret"];
            _userCourseService = userCourseService;
            _basketService = basketService;
        }

        [Authorize]
        [HttpPost("{basketId}")]
        public async Task<ActionResult<CustomerBasket>> CreateOrUpdatePaymentIntent(string basketId)
        {
            var basket = await _basketService.GetBasketByIdAsync(basketId);

            if (basket == null)
            {
                return NotFound();
            }

            var createdBasket = await _paymentService.CreateOrUpdatePaymentIntent(basket);

            return Ok(createdBasket);
        }

        [HttpPost("webhook")]
        public async Task<ActionResult> StripeWebhook()
        {
            var json = await new StreamReader(HttpContext.Request.Body).ReadToEndAsync();

            try
            {
                var stripeEvent = EventUtility.ConstructEvent(json,
                Request.Headers["Stripe-Signature"], _whSecret);

                PaymentIntent intent;

                // Handle the event
                if (stripeEvent.Type == Events.PaymentIntentPaymentFailed)
                {
                    intent = (PaymentIntent)stripeEvent.Data.Object;

                    _logger.LogInformation("Payment Failed");

                    var order = await _orderService.GetOrderByPaymentIntentAsync(intent.Id);

                    _orderService.UpdateOrderPaymentFailed(order);

                    await _orderService.SaveChangesAsync();
                }
                else if (stripeEvent.Type == Events.PaymentIntentSucceeded)
                {
                    intent = (PaymentIntent)stripeEvent.Data.Object;

                    _logger.LogInformation("Payment Succeeded");

                    var order = await _orderService.GetOrderByPaymentIntentAsync(intent.Id);

                    _orderService.UpdateOrderPaymentSuceeded(order);

                    await _orderService.SaveChangesAsync();

                    await _userCourseService.AddUserCoursesFromOrderAsync(order);

                    await _userCourseService.SaveChangesAsync();
                }

                return Ok();
            }
            catch (StripeException e)
            {
                return BadRequest();
            }
        }
    }
}

