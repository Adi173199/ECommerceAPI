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
            if (!storeContext.DeliveryMethods.Any())
            {
                var dmData = await File.ReadAllBytesAsync("../Infrastructure/Data/SeedData/delivery.json");
                var deliveryMethods = JsonSerializer.Deserialize<List<DeliveryMethod>>(dmData);
                if (deliveryMethods == null)
                {
                    return;
                }
                storeContext.DeliveryMethods.AddRange(deliveryMethods);
                await storeContext.SaveChangesAsync();
            }
        }
    }
}
