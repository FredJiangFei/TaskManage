using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace TaskManage.API.Data
{
    public class TaskLineRepository : BaseRepository, ITaskLineRepository
    {
        private readonly DataContext _context;
        public TaskLineRepository(DataContext context): base(context)
        {
            _context = context;
        }

        public async Task<TaskLine> Edit(TaskLine line)
        {
            var lineGet = await _context.TaskLines.SingleOrDefaultAsync(x => x.Id == line.Id);
            lineGet.Edit(line.Title);
            await _context.SaveChangesAsync();
            return lineGet;
        }

        public async Task<TaskLine[]> GetAll()
        {
            var lines = await _context.TaskLines
            .Include(x => x.Tasks)
            .ThenInclude(t => t.TaskUsers)
            .ThenInclude(u => u.User).ToArrayAsync();
            return lines;
        }
    }
}