using System;
using System.Collections.Generic;

public class TaskUser
{
    public int TaskId { get; set; }
    public Task Task { get; set; }
    public int UserId { get; set; }
    public User User { get; set; }
}