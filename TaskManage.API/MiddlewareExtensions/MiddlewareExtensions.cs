using Microsoft.AspNetCore.Builder;

namespace TaskManage.API
{
    public static class MiddlewareExtensions
    {
        public static IApplicationBuilder UseConventionalMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<ConventionalMiddleware>();
        }

        public static IApplicationBuilder UseFactoryActivatedMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<FactoryActivatedMiddleware>();
        }

        public static IApplicationBuilder UseRequestCulture(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<RequestCultureMiddleware>();
        }
    }
}