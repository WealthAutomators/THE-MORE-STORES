"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { homepageBestsellerSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";
import { QuickViewModal } from "@/components/product/quick-view-modal";
import { StarRating } from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";
import { formatPrice, calculateDiscount } from "@/lib/format";
import { cn } from "@/lib/utils";

export function BestSellers() {
  const products = getProductsBySlugs(homepageBestsellerSlugs);
  const featured = products[0];
  const rest = products.slice(1, 7);
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  if (!featured) return null;

  const hasDiscount = featured.salePrice && featured.salePrice < featured.price;
  const discount = hasDiscount ? calculateDiscount(featured.price, featured.salePrice!) : 0;
  const inWishlist = isInWishlist(featured.id);

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Bestsellers</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
              WHAT EVERYONE&apos;S BUYING
            </h2>
          </div>
          <Link href="/best-sellers" className="text-sm font-semibold text-primary hover:underline">
            Shop bestsellers →
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          <div className="group relative overflow-hidden rounded-xl border border-border bg-white">
            <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-auto lg:min-h-[560px]">
              <Image
                src={featured.images[0]}
                alt={featured.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-near-black/80 via-near-black/10 to-transparent" />
              {hasDiscount && (
                <span className="absolute left-4 top-4 rounded-md bg-accent px-3 py-1 text-xs font-bold text-white">
                  -{discount}%
                </span>
              )}
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <StarRating rating={featured.rating} reviews={featured.reviews} size="sm" />
              <Link href={`/product/${featured.slug}`}>
                <h3 className="mt-3 font-display text-2xl text-white sm:text-3xl">{featured.name}</h3>
              </Link>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-lg font-bold text-white">
                  {formatPrice(featured.salePrice ?? featured.price)}
                </span>
                {hasDiscount && (
                  <span className="text-sm text-white/60 line-through">{formatPrice(featured.price)}</span>
                )}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button
                  size="sm"
                  className="bg-primary text-white hover:bg-primary/90"
                  onClick={() => addToCart(featured)}
                >
                  <ShoppingBag className="h-4 w-4" />
                  Add to Cart
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setQuickViewOpen(true)}
                >
                  <Eye className="h-4 w-4" />
                  Quick View
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className={cn(inWishlist && "text-accent")}
                  onClick={() => toggleWishlist(featured.id)}
                  aria-label="Wishlist"
                >
                  <Heart className={cn("h-4 w-4", inWishlist && "fill-current")} />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {rest.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <QuickViewModal product={featured} open={quickViewOpen} onOpenChange={setQuickViewOpen} />
      </Container>
    </section>
  );
}
