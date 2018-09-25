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

        public async void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<TaskLine> Edit(TaskLine line)
        {
            throw new NotImplementedException();
        }

        public async Task<TaskLine[]> GetAll()
        {
            var lines = await _context.TaskLines.Include(x=>x.Tasks).ToArrayAsync();
            return lines;
        }
    }
}