import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { footerLinks, paymentMethods } from "@/data/navigation";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="bg-near-black text-white">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Image
              src="/logo/logo.svg"
              alt={company.name}
              width={240}
              height={44}
              className="mb-5 h-10 w-auto brightness-0 invert"
            />
            <p className="max-w-sm text-sm leading-relaxed text-white/65">{company.description}</p>
            <div className="mt-6 space-y-1 text-sm text-white/75">
              <p className="font-semibold text-white">{company.name}</p>
              <a href={`mailto:${company.email}`} className="block transition-colors hover:text-highlight">
                {company.email}
              </a>
              <p>
                {company.address.street}
                <br />
                {company.address.city}, {company.address.state} {company.address.zip}
              </p>
            </div>
          </div>

          {(
            [
              ["Shop", footerLinks.shop],
              ["Categories", footerLinks.categories],
              ["Customer Care", footerLinks.customerCare],
              ["Company", footerLinks.company],
              ["Policies", footerLinks.policies],
            ] as const
          ).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-highlight">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-white/50">{company.copyright}</p>
          <div className="flex items-center gap-2">
            {paymentMethods.map((method) => (
              <Image
                key={method.name}
                src={method.icon}
                alt={method.name}
                width={40}
                height={28}
                className="opacity-80"
              />
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
