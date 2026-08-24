"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredCollection, homepageFeaturedSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";

export function FeaturedCollection() {
  const products = getProductsBySlugs(homepageFeaturedSlugs).slice(0, 3);

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-highlight-foreground">
              Campaign
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
              {featuredCollection.title}
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">{featuredCollection.description}</p>
        </div>

        <div className="grid overflow-hidden rounded-xl border border-border lg:grid-cols-[1.35fr_0.65fr]">
          <div className="relative min-h-[360px] lg:min-h-[520px]">
            <Image
              src={featuredCollection.bannerImage}
              alt={featuredCollection.campaignTitle ?? featuredCollection.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-near-black/75 via-near-black/35 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">
              <span className="mb-3 inline-flex w-fit rounded-md bg-highlight px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-near-black">
                Collection
              </span>
              <h3 className="font-display text-3xl text-white sm:text-4xl lg:text-5xl">
                {featuredCollection.campaignTitle}
              </h3>
              <p className="mt-3 max-w-md text-sm text-white/80 sm:text-base">
                {featuredCollection.description}
              </p>
              <Button asChild size="lg" className="mt-6 w-fit bg-accent text-white hover:bg-accent/90">
                <Link href={"/shop"}>SHOP THE EDIT</Link>
              </Button>
            </div>
          </div>

          <div className="grid divide-y divide-border bg-white sm:grid-cols-3 lg:grid-cols-1 lg:divide-x-0">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="group flex items-center gap-4 p-4 transition-colors hover:bg-muted/60 sm:flex-col sm:items-start lg:flex-row lg:items-center"
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-border">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-400 group-hover:scale-105"
                    sizes="96px"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                    {product.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {formatPrice(product.salePrice ?? product.price)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
