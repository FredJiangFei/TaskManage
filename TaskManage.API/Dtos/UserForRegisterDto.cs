using System;
using System.ComponentModel.DataAnnotations;

namespace TaskManage.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }    
        [Required, RegularExpression(@"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$", ErrorMessage="至少6位，并且包含一个字符和一个数字")]
        public string Password { get; set; }
        public string Avatar { get; set; }

        public DateTime Birthday { get; set; }
    }
}