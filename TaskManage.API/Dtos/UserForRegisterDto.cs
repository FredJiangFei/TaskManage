using System;
using System.ComponentModel.DataAnnotations;

namespace TaskManage.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [
         Required, 
         RegularExpression(@"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$", ErrorMessage = "Password must contain at least one number and at least one lowercase letter, and at least 6 characters")
        ]
        public string Password { get; set; }
        public string Avatar { get; set; }
        public DateTime? Birthday { get; set; }
    }
}