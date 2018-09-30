
using System;
using System.Collections.Generic;

namespace TaskManage.API.Dtos
{
    public class CommentDto
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime Created { get; set; }
        public int CreatedById { get; set; }
        public int TaskId { get; set; }
        public ICollection<PhotoDto> Photos { get; set; }
    }
}