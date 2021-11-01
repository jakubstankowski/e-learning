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
        private readonly ILogger<PaymentsController> _logger;
        private readonly IConfiguration _configuration;
        private readonly string _whSecret;

        public PaymentsController(IPaymentService paymentService, ILogger<PaymentsController> logger, IConfiguration configuration)
        {
            _paymentService = paymentService;
            _logger = logger;
            _configuration = configuration;
            _whSecret = _configuration["StripeSettings:EndpointSecret"];
        }

        [Authorize]
        [HttpPost("{basketId}")]
        public async Task<ActionResult<CustomerBasket>> CreateOrUpdatePaymentIntent(string basketId)
        {
            var basket = await _paymentService.CreateOrUpdatePaymentIntent(basketId);

            return Ok(basket);
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
                Domain.Entities.OrderAggregate.Order order;

                // Handle the event
                if (stripeEvent.Type == Events.PaymentIntentPaymentFailed)
                {
                    intent = (PaymentIntent)stripeEvent.Data.Object;
                    _logger.LogInformation("Payment Failed");
                    order = await _paymentService.UpdateOrderPaymentSucceeded(intent.Id);
                    _logger.LogInformation("Order updated to payment received: ", order.Id);
                }
                else if (stripeEvent.Type == Events.PaymentIntentSucceeded)
                {
                    intent = (PaymentIntent)stripeEvent.Data.Object;
                    _logger.LogInformation("Payment Succeeded");
                    order = await _paymentService.UpdateOrderPaymentSucceeded(intent.Id);
                    _logger.LogInformation("Order updated to payment received: ", order.Id);
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

