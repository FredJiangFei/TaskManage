using System;

public class Task
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public int Order { get; set; }
    public DateTime DueDate { get; set; }
    public DateTime Created { get; set; }
    public TaskLine Line { get; set; }
    public int LineId { get; set; }
}