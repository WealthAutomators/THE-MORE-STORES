import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/container";
import { StarRating } from "@/components/ui/star-rating";

export function CustomerReviews() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Reviews</p>
          <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
            PEOPLE ARE LOVING IT
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          {featured && (
            <div className="rounded-xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <StarRating rating={featured.rating} showCount={false} size="md" />
              <p className="mt-5 text-lg leading-relaxed text-foreground sm:text-xl">
                &ldquo;{featured.text}&rdquo;
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-5">
                <div>
                  <p className="font-semibold">{featured.name}</p>
                  <p className="text-sm text-muted-foreground">{featured.location}</p>
                </div>
                {featured.product && (
                  <span className="rounded-md bg-highlight/30 px-3 py-1 text-xs font-semibold text-near-black">
                    Bought: {featured.product}
                  </span>
                )}
              </div>
            </div>
          )}

          <div className="grid gap-3 sm:grid-cols-2">
            {rest.slice(0, 4).map((t) => (
              <div
                key={t.id}
                className="rounded-xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <StarRating rating={t.rating} showCount={false} size="sm" />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold">{t.name}</p>
                {t.product && (
                  <p className="mt-1 text-xs text-primary">{t.product}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
