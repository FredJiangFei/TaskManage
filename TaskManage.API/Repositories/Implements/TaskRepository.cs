using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

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
            task.Created = DateTime.Now;
            await _context.Tasks.AddAsync(task);
            await _context.SaveChangesAsync();
            return task;
        }

        public void Delete(int id)
        {
            var lineGet = _context.Tasks.SingleOrDefault(x=>x.Id == id);
            _context.Remove(lineGet);
            _context.SaveChangesAsync();
        }

        public async Task<Task> Edit(Task task)
        {
            var taskGet = await _context.Tasks.SingleOrDefaultAsync(x => x.Id == task.Id);
            taskGet.Edit(task.Title, task.Description, task.DueDate);
            await _context.SaveChangesAsync();
            return taskGet;
        }

        public async Task<Task[]> GetAll()
        {
            throw new NotImplementedException();
        }
    }
}