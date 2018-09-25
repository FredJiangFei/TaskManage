using System.Linq;
using AutoMapper;
using TaskManage.API.Dtos;

namespace TaskManage.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<UserForRegisterDto, User>();
            CreateMap<User, UserDetailDto>();

            CreateMap<TaskLineAddDto, TaskLine>();
            CreateMap<TaskAddDto, Task>();
        }
    }
}