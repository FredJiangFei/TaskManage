using System;

namespace TaskManage.API.Dtos
{
    public class UserDetailDto
    {
        public string Username { get; set; }
        public string Avatar { get; set; }
        public DateTime Birthday { get; set; }
    }
}