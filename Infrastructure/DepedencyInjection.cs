using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Learning.Application.Basket.Queries.GetBasket;
using E_Learning.Application.Common.Interfaces;
using Infrastructure.Identity;
using Infrastructure.Persistance;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure
{
    public static class DepedencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services)
        {
            services.AddScoped<IContext>(provider => provider.GetService<Context>());
            services.AddScoped<IIdentityService, IdentityService>();
            services.AddScoped<IBasketRepository, BasketRepository>();
          
            return services;
        }
    }
}
