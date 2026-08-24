import { Layers, Sparkles, ShoppingBag, Tag } from "lucide-react";
import { features } from "@/data/homepage";
import { Container } from "@/components/ui/container";

const iconMap = {
  layers: Layers,
  tag: Tag,
  "shopping-bag": ShoppingBag,
  sparkles: Sparkles,
};

export function WhyShopTheMore() {
  return (
    <section className="border-y border-border bg-white py-12 md:py-16">
      <Container>
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Benefits</p>
          <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
            WHY SHOP THE MORE?
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] ?? Sparkles;
            return (
              <div key={feature.id} className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl tracking-tight">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
