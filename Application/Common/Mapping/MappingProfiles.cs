using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
