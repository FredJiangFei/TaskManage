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

        public async Task<ICollection<Comment>> GetByTaskId(int taskId)
        {
            return await _context.Comments
            .Include(c => c.Photos)
            .Include(c => c.CreatedBy)
            .Where(p => p.TaskId == taskId).ToArrayAsync();
        }
    }
}