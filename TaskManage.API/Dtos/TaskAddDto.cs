
using System;

namespace TaskManage.API.Dtos
{
    public class TaskAddDto
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DueDate { get; set; }
        public int LineId { get; set; }
    }
}