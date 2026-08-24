import { NavLink } from "@/types";
import { categories } from "./categories";

export const navigationLinks: NavLink[] = [
  { label: "Shop All", href: "/shop" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Best Sellers", href: "/best-sellers" },
  {
    label: "Collections",
    href: "/categories",
    children: categories.map((c) => ({
      label: c.name,
      href: `/categories/${c.slug}`,
    })),
  },
  { label: "Deals", href: "/shop?sale=true" },
];

export const categoryRail = [
  { label: "Electronics", href: "/categories/electronics" },
  { label: "Home", href: "/categories/home-kitchen" },
  { label: "Kitchen", href: "/categories/home-kitchen" },
  { label: "Beauty", href: "/categories/beauty" },
  { label: "Family", href: "/categories/baby-products" },
  { label: "Sports", href: "/categories/sports-outdoors" },
  { label: "Office", href: "/categories/office-supplies" },
  { label: "Outdoor", href: "/categories/sports-outdoors" },
  { label: "Pets", href: "/categories/pet-supplies" },
  { label: "Toys", href: "/categories/toys-games" },
  { label: "Wellness", href: "/categories/health-wellness" },
];

export const footerLinks = {
  shop: [
    { label: "Shop All", href: "/shop" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Best Sellers", href: "/best-sellers" },
    { label: "Deals", href: "/shop?sale=true" },
  ],
  categories: [
    { label: "Electronics", href: "/categories/electronics" },
    { label: "Home & Kitchen", href: "/categories/home-kitchen" },
    { label: "Beauty", href: "/categories/beauty" },
    { label: "Toys & Games", href: "/categories/toys-games" },
  ],
  customerCare: [
    { label: "Track Order", href: "/track-order" },
    { label: "Returns", href: "/returns" },
    { label: "Shipping Policy", href: "/shipping" },
    { label: "FAQs", href: "/faq" },
    { label: "Support", href: "/contact" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Careers", href: "/contact" },
  ],
  policies: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
  ],
};

export const paymentMethods = [
  { name: "Visa", icon: "/payments/visa.svg" },
  { name: "Mastercard", icon: "/payments/mastercard.svg" },
  { name: "Amex", icon: "/payments/amex.svg" },
  { name: "PayPal", icon: "/payments/paypal.svg" },
  { name: "Apple Pay", icon: "/payments/apple-pay.svg" },
];
