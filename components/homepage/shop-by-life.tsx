"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { shopByLife } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function ShopByLife() {
  return (
    <section className="border-y border-border bg-white py-12 md:py-16">
      <Container>
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Lifestyle</p>
          <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">MORE FOR YOUR LIFE</h2>
        </div>

        <div className="grid auto-rows-[220px] gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[240px]">
          {shopByLife.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-border",
                item.span === "wide" && "sm:col-span-2 lg:col-span-2",
                item.span === "tall" && "row-span-2 min-h-[460px]"
              )}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-near-black/85 via-near-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl text-white">{item.title}</h3>
                    <p className="mt-2 max-w-sm text-sm text-white/75">{item.description}</p>
                  </div>
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-near-black transition-transform group-hover:translate-x-1 group-hover:bg-primary group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
