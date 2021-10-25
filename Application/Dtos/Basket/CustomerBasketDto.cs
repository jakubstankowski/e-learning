using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Learning.Domain.Entities;
using E_Learning.Domain.Entities.OrderAggregate;

namespace E_Learning.Application.Dtos.Basket
{
    public class CustomerBasketDto
    {
        public string Id { get; set; }

        public List<BasketItem> Items { get; set; }

    }
}
