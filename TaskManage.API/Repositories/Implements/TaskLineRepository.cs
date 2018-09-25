using System;
using System.Collections.Generic;
using System.Threading.Tasks;

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
            throw new NotImplementedException();
        }
    }
}