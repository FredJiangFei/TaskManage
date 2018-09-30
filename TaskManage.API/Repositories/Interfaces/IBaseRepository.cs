using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace TaskManage.API.Data
{
    public interface IBaseRepository
    {
        Task<T> Add<T>(T entity) where T : class;
        System.Threading.Tasks.Task Delete<T>(T entity) where T : class;
    }
}