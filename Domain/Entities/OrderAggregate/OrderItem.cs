using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Learning.Domain.Entities.OrderAggregate
{
    public class OrderItem
    {
        public OrderItem()
        {
        }

        public OrderItem(CourseItemOrdered itemOrdered, decimal price)
        {
            ItemOrdered = itemOrdered;
            Price = price;
        }

        public int Id { get; set; }

        public CourseItemOrdered ItemOrdered { get; set; }

        public decimal Price { get; set; }



    }
}
