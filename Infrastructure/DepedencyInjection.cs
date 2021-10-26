using E_Learning.Application.Common.Interfaces;
using E_Learning.Application.Interfaces;
using E_Learning.Application.Services;
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
            services.AddScoped<IBasketService, BasketService>();
            services.AddScoped<ICourseService, CourseService>();

            return services;
        }
    }
}
