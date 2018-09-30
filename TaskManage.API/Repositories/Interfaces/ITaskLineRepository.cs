using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TaskManage.API.Data
{
    public interface ITaskLineRepository: IBaseRepository
    {
       Task<TaskLine> Edit(TaskLine line);
       Task<TaskLine[]> GetAll();
    }
}