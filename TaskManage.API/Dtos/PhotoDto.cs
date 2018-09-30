
using System;

namespace TaskManage.API.Dtos
{
    public class PhotoDto
    {
        public int Id { get; set; }
        public DateTime Created { get; set; }
        public string Url { get; set; }
    }
}