using System;


public class Photo
{
    public int Id { get; set; }
    public string Url { get; set; }
    public DateTime Created { get; set; } = DateTime.Now;
}