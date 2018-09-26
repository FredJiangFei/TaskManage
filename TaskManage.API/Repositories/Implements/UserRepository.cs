using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TaskManage.API.Helpers;

namespace TaskManage.API.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;
        public UserRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<User> Register(User user, string password)
        {
            if (await _context.Users.AnyAsync(x => x.Username == user.Username))
             throw new Exception("User exist");

            byte[] passwordHash, passwordSalt;
            password.CreatePasswordHash(out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<User> Login(string username, string password)
        {
            var user = await _context.Users.SingleOrDefaultAsync(x => x.Username == username);

            if (user == null)
                throw new Exception("Username or password is incorrect");

             if (!password.VerifyPasswordHash(user.PasswordHash, user.PasswordSalt))
                throw new Exception("Username or password is incorrect");

            return user;
        }
    }
}