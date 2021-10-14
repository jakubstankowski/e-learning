using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;

namespace E_Learning.Application.Orders.Queries.GetOrders
{
    public class GetOrderByUserQuery IRequest<IEnumerable<CourseDto>>
    {

    }
}
