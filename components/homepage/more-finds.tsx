"use client";

import { homepageFindsSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { Carousel } from "@/components/ui/carousel";
import { ProductCard } from "@/components/product/product-card";
import { cn } from "@/lib/utils";

export function MoreFinds() {
  const products = getProductsBySlugs(homepageFindsSlugs);

  return (
    <section className="border-y border-border bg-white py-12 md:py-16">
      <Container>
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Discover</p>
          <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">MORE FINDS</h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            A rotating selection of useful, unexpected and seriously good finds.
          </p>
        </div>

        <Carousel slidesToShow={4} className="px-8">
          {products.map((product, index) => (
            <div key={product.id} className={cn(index === 0 && "md:scale-[1.03] md:origin-left")}>
              <ProductCard product={product} />
            </div>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
