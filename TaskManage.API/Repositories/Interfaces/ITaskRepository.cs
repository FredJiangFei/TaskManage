using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TaskManage.API.Data
{
    public interface ITaskRepository
    {
        Task<Task> Add(Task task);
        Task<Task> Edit(Task task);
        void ToggleComplete(int id);
        void MoveTask(int id, int lineId);
        void Delete(int id);
        System.Threading.Tasks.Task UpdateUsers(int taskId, ICollection<int> userIds);
    }
}