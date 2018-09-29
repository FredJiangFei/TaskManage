
using System;
using System.Collections.Generic;

namespace TaskManage.API.Dtos
{
    public class TaskDto
    {
       public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Order { get; set; }
        public int LineId { get; set; }
        public bool Completed { get; set; }
        public DateTime DueDate { get; set; }
        public DateTime Created { get; set; }
        public ICollection<UserDetailDto> Users { get; set; }
    }
}