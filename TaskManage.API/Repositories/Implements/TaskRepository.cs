using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TaskManage.API.Data
{
    public class TaskRepository : ITaskRepository
    {
        private readonly DataContext _context;
        public TaskRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Task> Add(Task task)
        {
           await _context.Tasks.AddAsync(task);
            await _context.SaveChangesAsync();
            return task;
        }

        public async void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<Task> Edit(Task task)
        {
            throw new NotImplementedException();
        }

        public async Task<Task[]> GetAll()
        {
            throw new NotImplementedException();
        }
    }
}