using System;

public class User
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Avatar { get; set; }
    public DateTime Birthday { get; set; }
    public byte[] PasswordHash { get; set; }
    public byte[] PasswordSalt { get; set; }
}