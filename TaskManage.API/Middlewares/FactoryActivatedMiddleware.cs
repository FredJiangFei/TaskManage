using System;
using Microsoft.AspNetCore.Http;
using TaskManage.API.Data;

public class FactoryActivatedMiddleware : IMiddleware
    {
        private readonly DataContext _db;

        public FactoryActivatedMiddleware(DataContext db)
        {
            _db = db;
        }

        public async System.Threading.Tasks.Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            var keyValue = context.Request.Query["key"];

            if (!string.IsNullOrWhiteSpace(keyValue))
            {
                _db.Add(new Request()
                    {
                        DT = DateTime.UtcNow, 
                        MiddlewareActivation = "FactoryActivatedMiddleware", 
                        Value = keyValue
                    });

                await _db.SaveChangesAsync();
            }

            await next(context);
        }
    }