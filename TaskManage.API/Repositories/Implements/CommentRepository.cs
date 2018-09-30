using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace TaskManage.API.Data
{
    public class CommentRepository : BaseRepository, ICommentRepository
    {
        private readonly DataContext _context;
        public CommentRepository(DataContext context) : base(context)
        {
            _context = context;
        }

        public Task<Comment> Edit(Comment task)
        {
            throw new NotImplementedException();
        }

        public async Task<ICollection<Comment>> GetByTaskId(int taskId)
        {
            return await _context.Comments.Include(c => c.Photos).Where(p => p.TaskId == taskId).ToArrayAsync();
        }
    }
}