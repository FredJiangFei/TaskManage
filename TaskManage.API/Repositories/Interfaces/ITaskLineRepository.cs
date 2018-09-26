using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TaskManage.API.Data
{
    public interface ITaskLineRepository
    {
       Task<TaskLine> Add(TaskLine line);
       Task<TaskLine> Edit(TaskLine line);
       void Delete(int id);
       Task<TaskLine[]> GetAll();
    }
}