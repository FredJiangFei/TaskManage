using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TaskManage.API.Data
{
    public interface ICommentRepository: IBaseRepository
    {
        Task<Comment> Edit(Comment task);
        Task<ICollection<Comment>> GetByTaskId(int taskId);
    }
}