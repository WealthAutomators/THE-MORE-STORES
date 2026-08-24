"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { shopMoreCategories } from "@/data/homepage";
import { getCategoryBySlug } from "@/data/categories";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function ShopMoreCategories() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Categories</p>
          <h2 className="mt-2 font-display text-3xl tracking-tight text-foreground md:text-4xl">
            MORE WAYS TO SHOP
          </h2>
        </div>

        <div className="grid auto-rows-[180px] gap-3 sm:grid-cols-2 md:auto-rows-[200px] lg:grid-cols-4 lg:auto-rows-[220px]">
          {shopMoreCategories.map((item) => {
            const category = getCategoryBySlug(item.slug);
            const image = category?.image ?? `/categories/${item.slug}.jpg`;
            return (
              <Link
                key={`${item.name}-${item.slug}`}
                href={`/categories/${item.slug}`}
                className={cn(
                  "group relative overflow-hidden rounded-xl border border-border",
                  item.span === "wide" && "sm:col-span-2",
                  item.span === "tall" && "row-span-2"
                )}
              >
                <Image
                  src={image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/80 via-near-black/25 to-transparent transition-colors group-hover:from-primary/80" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                  <h3 className="font-display text-xl text-white sm:text-2xl">{item.name}</h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-near-black transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-accent group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
