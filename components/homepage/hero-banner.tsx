"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroSlides } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  const slide = heroSlides[0];

  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <Container className="py-6 md:py-8 lg:py-10">
        <div className="grid min-h-[520px] overflow-hidden rounded-xl border border-border lg:grid-cols-[0.95fr_1.05fr] lg:min-h-[560px]">
          <motion.div
            className="relative flex flex-col justify-center bg-near-black px-6 py-10 text-white sm:px-10 lg:px-12"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="mb-5 inline-flex w-fit items-center rounded-md bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
              The More Edit
            </span>
            <h1 className="font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl lg:text-[3.4rem] whitespace-pre-line">
              {slide.headline}
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
              {slide.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
                <Link href={slide.ctaLink}>{slide.ctaText}</Link>
              </Button>
              {slide.secondaryCtaText && slide.secondaryCtaLink && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/35 bg-transparent text-white hover:bg-white hover:text-near-black"
                >
                  <Link href={slide.secondaryCtaLink}>{slide.secondaryCtaText}</Link>
                </Button>
              )}
            </div>
            <div className="mt-10 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-highlight" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                More for everyday life
              </span>
            </div>
          </motion.div>

          <div className="relative min-h-[320px] bg-[#E8E6E1]">
            <Image
              src={slide.image}
              alt={slide.headline.replace(/\n/g, " ")}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-near-black/25 via-transparent to-transparent" />

            <motion.div
              className="absolute bottom-6 left-6 hidden h-28 w-28 overflow-hidden rounded-lg border-2 border-white shadow-lg sm:block lg:h-32 lg:w-32"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              <Image
                src="/products/ceramic-dutch-oven-1.jpg"
                alt="Featured find"
                fill
                className="object-cover"
                sizes="128px"
              />
            </motion.div>

            <motion.div
              className="absolute right-6 top-6 hidden h-24 w-24 overflow-hidden rounded-lg border-2 border-highlight shadow-lg sm:block lg:h-28 lg:w-28"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Image
                src="/products/portable-led-projector-1.jpg"
                alt="Featured tech find"
                fill
                className="object-cover"
                sizes="112px"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
