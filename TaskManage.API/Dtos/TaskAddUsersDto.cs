
using System;
using System.Collections.Generic;

namespace TaskManage.API.Dtos
{
    public class TaskAddUsersDto
    {
        public ICollection<int> UserIds { get; set; }
    }
}