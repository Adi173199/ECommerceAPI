using Core.Interfaces;
using StackExchange.Redis;
using System.Text.Json;

namespace Infrastructure.Services
{
    public class ResponseCacheService(IConnectionMultiplexer redis) : IResponseCacheService
    {
        private readonly IDatabase _database = redis.GetDatabase(1);
        public async Task CacheResponseAsync(string cacheKey, object response, TimeSpan timeToLive)
        {
            var option = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };
            var serilizeResponse = JsonSerializer.Serialize(response, option);
            await _database.StringSetAsync(cacheKey, serilizeResponse, timeToLive);
        }

        public async Task<string?> GetCachedResponseAsync(string cacheKey)
        {
            var cacheResponse = await _database.StringGetAsync(cacheKey);
            if (cacheResponse.IsNullOrEmpty) return null;
            return cacheResponse; 
        }

        public async Task RemoveCacheByPattern(string pattern)
        {
            var server = redis.GetServer(redis.GetEndPoints().First());
            var keys = server.Keys(database: 1, pattern: $"*{pattern}*").ToArray();

            if (keys.Length != 0)
            {
                await _database.KeyDeleteAsync(keys);
            }
        }
    }
}
