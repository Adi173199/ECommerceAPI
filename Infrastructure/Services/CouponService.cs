using Core.Entities;
using Core.Interfaces;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Stripe;
using System.Net.Http.Headers;

namespace Infrastructure.Services
{
    public class CouponService : ICouponService
    {
        public CouponService(IConfiguration config)
        {
            StripeConfiguration.ApiKey = config["StripeSettings:SecretKey"];
        }
        public async Task<AppCoupon?> GetCouponFromPromoCode(string code)
        {
            var promotionService = new PromotionCodeService();
            var options = new PromotionCodeListOptions { Code = code };

            var promotionCodes = await promotionService.ListAsync(options);
            var promotionCode = promotionCodes.FirstOrDefault();

            if (promotionCode != null)
            {
                using var client = new HttpClient();
                client.DefaultRequestHeaders.Authorization =
                    new AuthenticationHeaderValue("Bearer", StripeConfiguration.ApiKey);

                var response = await client.GetAsync($"https://api.stripe.com/v1/promotion_codes?code={code}");
                if (!response.IsSuccessStatusCode) return null;

                var json = await response.Content.ReadAsStringAsync();
                dynamic promoData = JsonConvert.DeserializeObject(json);

                if (promoData == null || promoData.data == null || promoData.data.Count == 0)
                    return null;

                string couponId = promoData.data[0].promotion.coupon;

                var couponService = new Stripe.CouponService();
                var coupon = await couponService.GetAsync(couponId);

                return new AppCoupon
                {
                    Name = coupon.Name,
                    AmountOff = coupon.AmountOff,
                    PercentOff = coupon.PercentOff,
                    CouponId = coupon.Id,
                    PromotionCode = promotionCode.Code
                };
            }

            return null;
        }

    }
}
