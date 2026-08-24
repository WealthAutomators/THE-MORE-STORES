"use client";

import { useState } from "react";
import { newsletter } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-xl bg-primary px-6 py-12 text-center md:px-16 md:py-16">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute -bottom-10 left-10 h-28 w-28 rounded-full bg-accent/25" />
          <div className="absolute bottom-8 right-16 h-3 w-3 rounded-full bg-highlight" />
          <div className="relative">
            <h2 className="font-display text-3xl tracking-tight text-white md:text-5xl">
              {newsletter.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-white/85 sm:text-base">
              {newsletter.description}
            </p>
            {submitted ? (
              <p className="mt-8 text-sm font-semibold text-highlight">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder={newsletter.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 flex-1 rounded-lg border-white/20 bg-white text-near-black placeholder:text-muted-foreground"
                />
                <Button type="submit" size="lg" className="shrink-0 bg-accent text-white hover:bg-accent/90">
                  {newsletter.buttonText}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
