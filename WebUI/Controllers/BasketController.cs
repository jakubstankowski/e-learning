using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_Learning.Application.Basket.Command.DeleteBasket;
using E_Learning.Application.Basket.Command.UpdateBasket;
using E_Learning.Application.Basket.Queries.GetBasket;
using E_Learning.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace E_Learning.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BasketController : ControllerBase
    {
        private readonly IMediator _mediator;

        public BasketController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<ActionResult<CustomerBasket>> Create(UpdateBasketCommand command)
        {
            var result = await _mediator.Send(command);

            return Ok(result);
        }


        [HttpGet]
        public async Task<ActionResult<CustomerBasket>> Get(string id)
        {
            var query = new GetBasketByIdQuery(id);
            var result = await _mediator.Send(query);

            return Ok(result);
        }

        [HttpDelete]
        public async Task<ActionResult<bool>> Delete(string id)
        {
            var query = new DeleteBasketCommand(id);
            var result = await _mediator.Send(query);

            return Ok(result);
        }
    }
}
