"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { company } from "@/data/company";
import { categoryRail, navigationLinks } from "@/data/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { searchProducts } from "@/data/products";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();

  const searchResults = searchQuery.length > 0 ? searchProducts(searchQuery).slice(0, 5) : [];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-near-black px-4 py-2 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white sm:text-xs">
          More to discover. Every day.
        </p>
      </div>

      <header className={cn("border-b border-border bg-white transition-all", scrolled && "shadow-sm")}>
        <Container>
          <div className={cn("flex items-center gap-4 transition-all", scrolled ? "h-14" : "h-16 lg:h-[4.25rem]")}>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            <Link href="/" className="flex shrink-0 items-center">
              <Image
                src="/logo/logo.svg"
                alt={company.name}
                width={240}
                height={44}
                priority
                className={cn("w-auto transition-all", scrolled ? "h-8 sm:h-9" : "h-9 sm:h-10 lg:h-11")}
              />
            </Link>

            <nav className="hidden flex-1 justify-center lg:flex">
              <ul className="flex items-center gap-1">
                {navigationLinks.map((link) => (
                  <li
                    key={link.href + link.label}
                    className="relative"
                    onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className="rounded-md px-3 py-2 text-sm font-semibold text-foreground/90 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                    {link.children && activeDropdown === link.label && (
                      <div className="absolute left-0 top-full z-50 mt-1 min-w-[220px] rounded-lg border border-border bg-white py-1.5 shadow-lg">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-foreground hover:bg-muted hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="ml-auto flex items-center gap-0.5 sm:gap-1">
              <div className="relative hidden md:block">
                <form onSubmit={handleSearchSubmit} className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search more finds..."
                    className={cn(
                      "rounded-lg border-border bg-background pl-9 pr-3 text-sm transition-all",
                      scrolled ? "h-9 w-44 lg:w-56" : "h-10 w-52 lg:w-64"
                    )}
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setSearchOpen(true);
                    }}
                    onFocus={() => setSearchOpen(true)}
                    onBlur={() => setTimeout(() => setSearchOpen(false), 150)}
                  />
                </form>
                {searchOpen && searchQuery.trim().length > 0 && (
                  <div className="absolute right-0 top-full z-50 mt-1 w-[320px] overflow-hidden rounded-lg border border-border bg-white py-1 shadow-lg">
                    {searchResults.length > 0 ? (
                      <>
                        {searchResults.map((product) => (
                          <Link
                            key={product.id}
                            href={`/product/${product.slug}`}
                            className="flex items-center gap-3 px-3 py-2 hover:bg-muted"
                            onClick={() => setSearchQuery("")}
                          >
                            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md border border-border">
                              <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="36px" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">{product.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {formatPrice(product.salePrice ?? product.price)}
                              </p>
                            </div>
                          </Link>
                        ))}
                        <button
                          type="button"
                          className="w-full border-t border-border px-3 py-2 text-left text-sm font-medium text-primary hover:bg-muted"
                          onClick={() => {
                            router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
                            setSearchQuery("");
                          }}
                        >
                          View all results for &quot;{searchQuery}&quot;
                        </button>
                      </>
                    ) : (
                      <div className="px-3 py-2.5 text-sm text-muted-foreground">
                        No products found for &quot;{searchQuery}&quot;.
                      </div>
                    )}
                  </div>
                )}
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setSearchOpen((v) => !v)}
                aria-label="Search"
              >
                <Search className="h-[18px] w-[18px]" />
              </Button>

              <Button variant="ghost" size="icon" asChild className="relative hidden sm:inline-flex">
                <Link href="/wishlist" aria-label="Wishlist">
                  <Heart className="h-[18px] w-[18px]" />
                  {wishlist.length > 0 && (
                    <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                      {wishlist.length}
                    </span>
                  )}
                </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
                <Link href="/profile" aria-label="Account">
                  <User className="h-[18px] w-[18px]" />
                </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild className="relative">
                <Link href="/cart" aria-label="Cart">
                  <ShoppingBag className="h-[18px] w-[18px]" />
                  {itemCount > 0 && (
                    <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                      {itemCount}
                    </span>
                  )}
                </Link>
              </Button>
            </div>
          </div>

          {searchOpen && (
            <div className="border-t border-border py-2 md:hidden">
              <form onSubmit={handleSearchSubmit} className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search more finds..."
                  className="h-10 rounded-lg pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </form>
              {searchQuery.trim().length > 0 && (
                <div className="mt-2 rounded-lg border border-border bg-white py-1">
                  {searchResults.length > 0 ? (
                    searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.slug}`}
                        className="flex items-center gap-3 px-3 py-2 hover:bg-muted"
                        onClick={() => setSearchQuery("")}
                      >
                        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md border border-border">
                          <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="36px" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{product.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {formatPrice(product.salePrice ?? product.price)}
                          </p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="px-3 py-2.5 text-sm text-muted-foreground">No products found.</div>
                  )}
                </div>
              )}
            </div>
          )}
        </Container>

        <div className="border-t border-border bg-white">
          <Container>
            <div className="scrollbar-hide -mx-1 flex gap-1 overflow-x-auto py-2">
              {categoryRail.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "relative shrink-0 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                      active ? "text-primary" : "text-foreground/80 hover:text-primary"
                    )}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                    )}
                    {!active && (
                      <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent/0 transition-colors group-hover:bg-accent" />
                    )}
                  </Link>
                );
              })}
            </div>
          </Container>
        </div>

        {mobileOpen && (
          <div className="border-t border-border bg-white lg:hidden">
            <Container className="py-3">
              <ul className="space-y-0.5">
                {navigationLinks.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="block rounded-lg px-3 py-2 text-sm font-semibold hover:bg-muted"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <ul className="ml-3 mt-0.5 space-y-0.5 border-l border-border pl-3">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block rounded-lg px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-primary"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                <li>
                  <Link href="/wishlist" className="block rounded-lg px-3 py-2 text-sm font-semibold hover:bg-muted" onClick={() => setMobileOpen(false)}>
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="block rounded-lg px-3 py-2 text-sm font-semibold hover:bg-muted" onClick={() => setMobileOpen(false)}>
                    Account
                  </Link>
                </li>
              </ul>
            </Container>
          </div>
        )}
      </header>
    </div>
  );
}
