
using System;

namespace TaskManage.API.Dtos
{
    public class TaskEditDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DueDate { get; set; }
    }
}