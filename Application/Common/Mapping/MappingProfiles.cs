using AutoMapper;
using E_Learning.Application.Common.Dto;
using E_Learning.Application.Lessons.Queries.GetLessons;
using E_Learning.Domain.Entities;

namespace E_Learning.Application.Common.Mapping
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Course, CourseDto>();
            CreateMap<Lesson, LessonDto>();
        }

    }
}
