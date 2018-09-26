using System;
using System.Collections.Generic;

public class TaskLine
{
    public int Id { get; set; }
    public string Title { get; set; }
    public int Order { get; set; }
    public DateTime Created { get; set; }
    public ICollection<Task> Tasks { get; set; }

    public void Edit(string title)
    {
        this.Title = title;
    }
}