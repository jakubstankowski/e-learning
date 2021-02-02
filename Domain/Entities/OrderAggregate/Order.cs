using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Learning.Domain.Entities.OrderAggregate
{
    public class Order
    {
        public Order()
        {

        }

        public Order(IReadOnlyList<OrderItem> orderItems, string buyerEmail)
        {
            BuyerEmail = buyerEmail;
            OrderItems = orderItems;
        }

        public int Id { get; set; }

        public string BuyerEmail { get; set; }

        public DateTimeOffset OrderDate { get; set; } = DateTimeOffset.Now;

        public IReadOnlyList<OrderItem> OrderItems { get; set; }

        public OrderStatus Status { get; set; } = OrderStatus.Pending;

        public string PaymentIntentId { get; set; }
    }
}
