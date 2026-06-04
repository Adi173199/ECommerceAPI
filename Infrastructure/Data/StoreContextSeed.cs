using Core.Entities;
using System.Text.Json;

namespace Infrastructure.Data
{
    public class StoreContextSeed
    {
        public static async Task SeedAsync(StoreContext storeContext)
        {
            if (!storeContext.Products.Any())
            {
                var productsData = await File.ReadAllBytesAsync("../Infrastructure/Data/SeedData/products.json");
                var products = JsonSerializer.Deserialize<List<Product>>(productsData);
                if (products == null)
                {
                    return;
                }
                storeContext.Products.AddRange(products);
                await storeContext.SaveChangesAsync();
            }
        }
    }
}
