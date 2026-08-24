"use client";

import { homepageNewArrivalSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { Carousel } from "@/components/ui/carousel";
import { ProductCard } from "@/components/product/product-card";
import Link from "next/link";

export function NewArrivals() {
  const products = getProductsBySlugs(homepageNewArrivalSlugs);

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">New</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">JUST IN</h2>
            <p className="mt-3 max-w-lg text-sm text-muted-foreground sm:text-base">
              Fresh products. New ideas. More reasons to browse.
            </p>
          </div>
          <Link href="/new-arrivals" className="text-sm font-semibold text-primary hover:underline">
            View all arrivals →
          </Link>
        </div>

        <Carousel slidesToShow={4} className="px-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
