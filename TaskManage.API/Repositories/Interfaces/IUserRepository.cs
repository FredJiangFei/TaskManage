using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TaskManage.API.Data
{
    public interface IUserRepository
    {
         Task<User> Register(User user);
    }
}