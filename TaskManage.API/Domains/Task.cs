using System;

public class Task
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public int Order { get; set; }
    public DateTime DueDate { get; set; }
    public DateTime Created { get; set; }
    public bool Completed { get; set; }
    public TaskLine Line { get; set; }
    public int LineId { get; set; }

    public void Edit(string title, string description, DateTime dueDate){
        Title = title;
        Description = description;
        DueDate = dueDate;
    }

    public void ToggleComplete(){
        Completed = !Completed;
    }

    public void Move(int lineId){
        LineId = lineId;
    }
}