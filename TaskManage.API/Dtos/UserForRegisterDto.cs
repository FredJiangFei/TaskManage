using System;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        public string Username { get; set; }    
        public string Password { get; set; }
        public string Avatar { get; set; }
        public DateTime Birthday { get; set; }
    }
}