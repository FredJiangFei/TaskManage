using System;
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
            CreateMap<TaskLineEditDto, TaskLine>();
            CreateMap<TaskAddDto, Task>();
            CreateMap<TaskEditDto, Task>();
            CreateMap<CommentAddDto, Comment>();
            CreateMap<PhotoAddDto, Photo>();

            CreateMap<Comment, CommentDto>().ForMember(
                dest => dest.CreatedBy, 
                opt => opt.MapFrom(src => src.CreatedBy)
            );
            
            CreateMap<Photo, PhotoDto>();

            CreateMap<TaskLine, TaskLineDto>();

            CreateMap<Task, TaskDto>()
            .ForMember(
                dest => dest.UserIds,
                opt => opt.MapFrom(src => src.TaskUsers.Select(u => u.UserId))
            );
        }
    }
}