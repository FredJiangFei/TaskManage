using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TaskManage.API.Data
{
    public interface ITaskRepository: IBaseRepository
    {
        Task<Task> Edit(Task task);
        void ToggleComplete(int id);
        void MoveTask(int id, int lineId);
        System.Threading.Tasks.Task UpdateUsers(int taskId, ICollection<int> userIds);
    }
}