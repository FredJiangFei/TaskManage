using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace TaskManage.API.Data
{
    public class TaskLineRepository : ITaskLineRepository
    {
        private readonly DataContext _context;
        public TaskLineRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<TaskLine> Add(TaskLine line)
        {
            line.Created = DateTime.Now;
            await _context.TaskLines.AddAsync(line);
            await _context.SaveChangesAsync();
            return line;
        }

        public async Task<TaskLine> Edit(TaskLine line)
        {
            var lineGet = await _context.TaskLines.SingleOrDefaultAsync(x=>x.Id == line.Id);
            lineGet.Edit(line.Title);
            await _context.SaveChangesAsync();
            return lineGet;
        }

        public void Delete(int id)
        {
            var lineGet = _context.TaskLines.SingleOrDefault(x=>x.Id == id);
            _context.Remove(lineGet);
            _context.SaveChangesAsync();
        }

        public async Task<TaskLine[]> GetAll()
        {
            var lines = await _context.TaskLines.Include(x => x.Tasks).ToArrayAsync();
            return lines;
        }
    }
}