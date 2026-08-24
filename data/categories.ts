import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "1",
    slug: "electronics",
    name: "Electronics",
    image: "/categories/electronics.jpg",
    description: "Bright tech finds for home, work, and entertainment.",
    productCount: 3,
  },
  {
    id: "2",
    slug: "home-kitchen",
    name: "Home & Kitchen",
    image: "/categories/home-kitchen.jpg",
    description: "Everyday upgrades for cooking, hosting, and living well.",
    productCount: 3,
  },
  {
    id: "3",
    slug: "bathroom",
    name: "Bathroom",
    image: "/categories/bathroom.jpg",
    description: "Soft towels, mats, and spa-ready essentials.",
    productCount: 2,
  },
  {
    id: "4",
    slug: "educational-toys",
    name: "Educational Toys",
    image: "/categories/educational-toys.jpg",
    description: "Playful learning tools that spark curiosity.",
    productCount: 2,
  },
  {
    id: "5",
    slug: "pet-supplies",
    name: "Pet Supplies",
    image: "/categories/pet-supplies.jpg",
    description: "Comfort and enrichment for pets who feel like family.",
    productCount: 2,
  },
  {
    id: "6",
    slug: "beauty",
    name: "Beauty",
    image: "/categories/beauty.jpg",
    description: "Skincare and self-care favorites for daily rituals.",
    productCount: 2,
  },
  {
    id: "7",
    slug: "sports-outdoors",
    name: "Sports & Outdoor",
    image: "/categories/sports-outdoors.jpg",
    description: "Move more with fitness and weekend outdoor gear.",
    productCount: 3,
  },
  {
    id: "8",
    slug: "office-supplies",
    name: "Office",
    image: "/categories/office-supplies.jpg",
    description: "Workspace tools that look sharp and work harder.",
    productCount: 2,
  },
  {
    id: "9",
    slug: "fashion-accessories",
    name: "Fashion & Travel",
    image: "/categories/fashion-accessories.jpg",
    description: "Bags, scarves, and travel-ready accessories.",
    productCount: 3,
  },
  {
    id: "10",
    slug: "baby-products",
    name: "Baby",
    image: "/categories/baby-products.jpg",
    description: "Thoughtful essentials for little ones and parents.",
    productCount: 2,
  },
  {
    id: "11",
    slug: "toys-games",
    name: "Toys & Games",
    image: "/categories/toys-games.jpg",
    description: "Fun finds for kids, families, and playtime.",
    productCount: 2,
  },
  {
    id: "12",
    slug: "health-wellness",
    name: "Health & Wellness",
    image: "/categories/health-wellness.jpg",
    description: "Recovery and rest tools for feeling more like yourself.",
    productCount: 2,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
