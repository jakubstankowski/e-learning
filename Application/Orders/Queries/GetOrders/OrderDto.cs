using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Learning.Domain.Entities.OrderAggregate;

namespace E_Learning.Application.Orders.Queries.GetOrders
{
    public class OrderDto
    {
        public int Id { get; set; }

        public decimal SubTotal { get; set; }

        public DateTimeOffset OrderDate { get; set; } = DateTimeOffset.Now;

        public IReadOnlyList<OrderItem> OrderItems { get; set; }

        public OrderStatus Status { get; set; } = OrderStatus.Pending;
    }
}
