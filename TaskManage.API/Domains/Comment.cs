using System;
using System.Collections;
using System.Collections.Generic;

public class Comment
{
    public int Id { get; set; }
    public string Description { get; set; }
    public DateTime Created { get; set; } = DateTime.Now;
    public User CreatedBy { get; set; }
    public int CreatedById { get; set; }
    public Task Task { get; set; }
    public int TaskId { get; set; }
    public ICollection<Photo> Photos { get; set; }
}