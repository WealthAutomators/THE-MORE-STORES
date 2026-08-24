import {
  Feature,
  HeroSlide,
  PromoBanner,
} from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-1.jpg",
    headline: "MORE TO LOVE.\nMORE TO DISCOVER.",
    description:
      "A bigger collection of useful finds, everyday upgrades and products worth bringing home.",
    ctaText: "SHOP EVERYTHING",
    ctaLink: "/shop",
    secondaryCtaText: "SEE WHAT'S NEW",
    secondaryCtaLink: "/new-arrivals",
  },
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "layers",
    title: "More Choice",
    description: "A wide marketplace of finds across home, beauty, family, tech, and beyond.",
  },
  {
    id: "2",
    icon: "tag",
    title: "More Value",
    description: "Thoughtful pricing on everyday upgrades and seasonal deals worth opening.",
  },
  {
    id: "3",
    icon: "shopping-bag",
    title: "Easy Shopping",
    description: "Browse, save, and checkout in a smooth department-store experience.",
  },
  {
    id: "4",
    icon: "sparkles",
    title: "Fresh Finds",
    description: "New arrivals and rotating edits so there is always more to discover.",
  },
];

export const dealsEndTime = new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString();

export const homepageDealsSlugs = [
  "portable-led-projector",
  "electric-kettle",
  "countertop-ice-maker",
  "dog-bed",
  "bath-towel-set",
  "canvas-weekender-bag",
] as const;

export const homepageBestsellerSlugs = [
  "ceramic-dutch-oven",
  "portable-led-projector",
  "bath-towel-set",
  "yoga-mat",
  "magnetic-building-tiles",
  "monitor-laptop-stand",
  "dog-bed",
  "electric-kettle",
] as const;

export const homepageFeaturedSlugs = [
  "ceramic-dutch-oven",
  "portable-led-projector",
  "retinol-night-cream",
  "magnetic-building-tiles",
  "cork-desk-organizer",
  "countertop-ice-maker",
  "yoga-mat",
  "dog-bed",
] as const;

export const homepageFindsSlugs = [
  "dual-screen-webcam",
  "bamboo-bath-mat",
  "interactive-cat-feeder",
  "dry-brush-kit",
  "adjustable-jump-rope",
  "weighted-eye-mask",
  "packing-cubes-set",
  "wooden-train-set",
] as const;

export const homepageNewArrivalSlugs = [
  "usb-c-charging-station",
  "compact-massage-gun",
  "silicone-feeding-set",
  "collapsible-soft-cooler",
  "coding-card-game",
  "linen-scarf-set",
] as const;

export const shopMoreCategories = [
  { name: "Electronics", slug: "electronics", span: "wide" },
  { name: "Home & Kitchen", slug: "home-kitchen", span: "tall" },
  { name: "Bathroom", slug: "bathroom", span: "standard" },
  { name: "Beauty", slug: "beauty", span: "standard" },
  { name: "Workspace", slug: "office-supplies", span: "wide" },
  { name: "Family", slug: "baby-products", span: "standard" },
  { name: "Sports", slug: "sports-outdoors", span: "standard" },
  { name: "Outdoor", slug: "sports-outdoors", span: "tall" },
  { name: "Pets", slug: "pet-supplies", span: "standard" },
  { name: "Travel", slug: "fashion-accessories", span: "standard" },
  { name: "Toys & Games", slug: "toys-games", span: "wide" },
  { name: "Wellness", slug: "health-wellness", span: "standard" },
] as const;

export const shopByLife = [
  {
    title: "At Home",
    description: "Comfort upgrades for kitchens, baths, and living spaces.",
    href: "/categories/home-kitchen",
    image: "/banners/life-home.jpg",
    span: "wide",
  },
  {
    title: "At Work",
    description: "Desk essentials that make focus feel easier.",
    href: "/categories/office-supplies",
    image: "/banners/life-work.jpg",
    span: "standard",
  },
  {
    title: "On The Go",
    description: "Bags, coolers, and travel-ready gear.",
    href: "/categories/fashion-accessories",
    image: "/banners/life-go.jpg",
    span: "standard",
  },
  {
    title: "For The Family",
    description: "Toys, baby finds, and shared moments.",
    href: "/categories/baby-products",
    image: "/banners/life-family.jpg",
    span: "tall",
  },
  {
    title: "For The Weekend",
    description: "Outdoor energy and sports-ready picks.",
    href: "/categories/sports-outdoors",
    image: "/banners/life-weekend.jpg",
    span: "standard",
  },
  {
    title: "For Your Space",
    description: "Lighting, storage, and finishing touches.",
    href: "/shop",
    image: "/banners/life-space.jpg",
    span: "wide",
  },
] as const;

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: "EVERYDAY UPGRADES",
  description: "Small upgrades. Better routines. Products you'll actually use.",
  buttonText: "SHOP THE EDIT",
  buttonLink: "/shop",
  image: "/banners/featured.jpg",
};

export const aboutSection = {
  title: "WHY SHOP THE MORE?",
  description:
    "THE MORE STORES brings a department-store energy online — more choice, more useful finds, and a shopping experience built for everyday life.",
  checklist: [
    "Curated finds across a broad marketplace",
    "Fresh arrivals and rotating edits",
    "Clear pricing with deals that feel worth it",
    "Friendly support from browse to delivery",
  ],
  buttonText: "Learn More About Us",
  buttonLink: "/about",
  image: "/banners/about.jpg",
};

export const featuredCollection = {
  title: "THIS WEEK'S EDIT",
  description: "Small upgrades. Better routines. Products you'll actually use.",
  bannerImage: "/banners/featured.jpg",
  categorySlug: "home-kitchen",
  campaignTitle: "EVERYDAY UPGRADES",
};

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Electronics", slug: "electronics" },
  { label: "Home & Kitchen", slug: "home-kitchen" },
  { label: "Beauty", slug: "beauty" },
  { label: "Sports", slug: "sports-outdoors" },
];

export const newsletter = {
  title: "GET MORE GOOD STUFF.",
  description: "Fresh arrivals, useful finds and deals worth opening your inbox for.",
  placeholder: "Enter your email address",
  buttonText: "Subscribe",
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];
