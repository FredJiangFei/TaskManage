
using System;
using System.Collections.Generic;

namespace TaskManage.API.Dtos
{
    public class UpdateTaskUsersDto
    {
        public ICollection<int> UserIds { get; set; }
    }
}