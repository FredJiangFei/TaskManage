
using System;
using System.Collections.Generic;

namespace TaskManage.API.Dtos
{
    public class CommentAddDto
    {
        public string Description { get; set; }
        public int CreatedById { get; set; }
        public int TaskId { get; set; }
        public ICollection<PhotoAddDto> Photos { get; set; }
    }
}