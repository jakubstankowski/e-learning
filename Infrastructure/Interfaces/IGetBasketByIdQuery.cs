using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Learning.Domain.Entities;

namespace Infrastructure.Interfaces
{
    public interface IGetBasketByIdQuery
    {
        public CustomerBasket GetBasketByIdQuery();
    }
}
