using System;
using Microsoft.AspNetCore.Http;
using TaskManage.API.Data;

public class ConventionalMiddleware
{
    private readonly RequestDelegate _next;

    public ConventionalMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async System.Threading.Tasks.Task InvokeAsync(HttpContext context, DataContext db)
    {
        var keyValue = context.Request.Query["key"];

        if (!string.IsNullOrWhiteSpace(keyValue))
        {
            db.Add(new Request()
            {
                DT = DateTime.UtcNow,
                MiddlewareActivation = "ConventionalMiddleware",
                Value = keyValue
            });

            await db.SaveChangesAsync();
        }

        await _next(context);
    }
}