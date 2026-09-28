using Core.Entities;
using System.Reflection;
using System.Text.Json;

namespace Infrastructure.Data
{
    public class StoreContextSeed
    {
        public static async Task SeedAsync(StoreContext storeContext)
        {
            var path = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);

            if (!storeContext.Products.Any())
            {
                var productsData = await File.ReadAllBytesAsync(path + @"/Data/SeedData/products.json");
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
                var deliveryData = await File.ReadAllBytesAsync(path + @"/Data/SeedData/delivery.json");
                var deliveryMethods = JsonSerializer.Deserialize<List<DeliveryMethod>>(deliveryData, new JsonSerializerOptions { PropertyNameCaseInsensitive = true }
);

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
