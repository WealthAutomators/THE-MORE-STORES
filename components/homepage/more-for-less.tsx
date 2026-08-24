"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { dealsEndTime, homepageDealsSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Container } from "@/components/ui/container";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { formatPrice, calculateDiscount } from "@/lib/format";
import { Button } from "@/components/ui/button";

export function MoreForLess() {
  const deals = getProductsBySlugs(homepageDealsSlugs);
  const { addToCart } = useCart();

  return (
    <section className="bg-near-black py-12 text-white md:py-16">
      <Container>
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
              Deal Board
            </div>
            <h2 className="font-display text-3xl tracking-tight md:text-5xl">MORE FOR LESS</h2>
            <p className="mt-3 max-w-lg text-sm text-white/65 sm:text-base">
              Bold savings on useful finds — timed deals worth checking before they disappear.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/5 px-4 py-3">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-highlight">
              Ends in
            </span>
            <CountdownTimer endTime={dealsEndTime} light />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {deals.map((product) => {
            const discount =
              product.salePrice && product.salePrice < product.price
                ? calculateDiscount(product.price, product.salePrice)
                : 0;

            return (
              <div
                key={product.id}
                className="group grid grid-cols-[112px_1fr] overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] transition-colors hover:border-accent/50 hover:bg-white/[0.07] sm:grid-cols-[132px_1fr]"
              >
                <Link href={`/product/${product.slug}`} className="relative min-h-[132px]">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-400 group-hover:scale-105"
                    sizes="132px"
                  />
                </Link>
                <div className="flex flex-col justify-between p-4">
                  <div>
                    {discount > 0 && (
                      <span className="mb-2 inline-flex rounded bg-accent px-2 py-0.5 text-[11px] font-bold text-white">
                        -{discount}% OFF
                      </span>
                    )}
                    <Link href={`/product/${product.slug}`}>
                      <h3 className="text-sm font-semibold leading-snug text-white hover:text-highlight">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-base font-bold text-accent">
                        {formatPrice(product.salePrice ?? product.price)}
                      </span>
                      {product.salePrice && (
                        <span className="text-xs text-white/45 line-through">
                          {formatPrice(product.price)}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="mt-3 w-fit bg-accent text-white hover:bg-accent/90"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingBag className="h-3.5 w-3.5" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
