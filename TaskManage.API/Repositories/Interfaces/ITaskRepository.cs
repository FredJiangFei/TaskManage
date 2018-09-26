using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TaskManage.API.Data
{
    public interface ITaskRepository
    {
        Task<Task> Add(Task task);
        Task<Task> Edit(Task task);
        void Delete(int id);
        Task<Task[]> GetAll();
    }
}