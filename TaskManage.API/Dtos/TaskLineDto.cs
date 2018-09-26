
using System;
using System.Collections.Generic;

namespace TaskManage.API.Dtos
{
    public class TaskLineDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Order { get; set; }
        public DateTime Created { get; set; }
        public ICollection<TaskDto>  Tasks { get; set; }
    }
}