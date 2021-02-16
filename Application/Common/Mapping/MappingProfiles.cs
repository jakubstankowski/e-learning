using AutoMapper;
using E_Learning.Application.Common.Dto;
using E_Learning.Application.Lessons.Queries.GetLessons;
using E_Learning.Application.Orders.Queries.GetOrders;
using E_Learning.Domain.Entities;
using E_Learning.Domain.Entities.OrderAggregate;

namespace E_Learning.Application.Common.Mapping
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Course, CourseDto>();
            CreateMap<Lesson, LessonDto>();
            CreateMap<Order, OrderDto>();
        }

    }
}
