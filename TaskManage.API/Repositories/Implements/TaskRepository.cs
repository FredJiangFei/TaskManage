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

        public async System.Threading.Tasks.Task UpdateUsers(int taskId, ICollection<int> userIds)
        {
            var taskUsers = _context.TaskUsers.Where(p => p.TaskId == taskId);
            if (taskUsers.Any())
            {
                _context.TaskUsers.RemoveRange(taskUsers);
                await _context.SaveChangesAsync();
            }

            foreach (var userId in userIds)
            {
                _context.Add<TaskUser>(new TaskUser
                {
                    TaskId = taskId,
                    UserId = userId
                });
            }
            await _context.SaveChangesAsync();
        }

        public void Delete(int id)
        {
            var task = _context.Tasks.SingleOrDefault(x => x.Id == id);
            _context.Remove(task);
            _context.SaveChangesAsync();
        }

        public async Task<Task> Edit(Task task)
        {
            var taskGet = await _context.Tasks.SingleOrDefaultAsync(x => x.Id == task.Id);
            taskGet.Edit(task.Title, task.Description, task.DueDate);
            await _context.SaveChangesAsync();
            return taskGet;
        }

        public void MoveTask(int id, int lineId)
        {
            var task = _context.Tasks.SingleOrDefault(x => x.Id == id);
            task.Move(lineId);
            _context.SaveChangesAsync();
        }

        public void ToggleComplete(int id)
        {
            var task = _context.Tasks.SingleOrDefault(x => x.Id == id);
            task.ToggleComplete();
            _context.SaveChangesAsync();
        }
    }
}