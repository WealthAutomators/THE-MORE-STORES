import { HeroBanner } from "@/components/homepage/hero-banner";
import { ShopMoreCategories } from "@/components/homepage/shop-more-categories";
import { MoreFinds } from "@/components/homepage/more-finds";
import { FeaturedCollection } from "@/components/homepage/featured-collection";
import { NewArrivals } from "@/components/homepage/new-arrivals";
import { ShopByLife } from "@/components/homepage/shop-by-life";
import { BestSellers } from "@/components/homepage/best-sellers";
import { MoreForLess } from "@/components/homepage/more-for-less";
import { CustomerReviews } from "@/components/homepage/customer-reviews";
import { WhyShopTheMore } from "@/components/homepage/why-shop-the-more";
import { Newsletter } from "@/components/homepage/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <ShopMoreCategories />
      <MoreFinds />
      <FeaturedCollection />
      <NewArrivals />
      <ShopByLife />
      <BestSellers />
      <MoreForLess />
      <CustomerReviews />
      <WhyShopTheMore />
      <Newsletter />
    </>
  );
}
