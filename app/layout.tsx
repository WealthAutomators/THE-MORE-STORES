import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/navbar/site-header";
import { Footer } from "@/components/footer/footer";
import { Providers } from "@/components/providers/Providers";
import { company } from "@/data/company";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  openGraph: {
    title: `${company.name} — ${company.tagline}`,
    description: company.description,
    type: "website",
    locale: "en_US",
    siteName: company.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — ${company.tagline}`,
    description: company.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: company.name,
    description: company.description,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: "US",
    },
    url: "https://themorestores.com",
  };

  return (
    <html lang="en" className={`${inter.variable} ${archivoBlack.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
