using AutoMapper;
using E_Learning.Domain.Entities;

namespace E_Learning.Application.Common.Mapping
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Courses, CoursesDto>();
        }
      
    }
}
