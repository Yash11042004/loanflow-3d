import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { loanProducts } from "@/content/site";

const mainLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel border-b" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8"
      >
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {mainLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-md px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-navy data-[status=active]:text-navy"
            >
              {link.label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors outline-none hover:text-navy focus-visible:ring-2 focus-visible:ring-ring">
              Loans
              <ChevronDown className="h-4 w-4" aria-hidden />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              {loanProducts.map((product) => (
                <DropdownMenuItem key={product.slug} asChild>
                  <Link to={`/${product.slug}`} className="cursor-pointer">
                    {product.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/contact"
            className="rounded-md px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-navy data-[status=active]:text-navy"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild size="lg" className="hidden sm:inline-flex">
            <Link to="/apply">Apply Now</Link>
          </Button>
          <Button asChild size="sm" className="sm:hidden">
            <Link to="/apply">Apply</Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-md border border-border text-navy lg:hidden"
          >
            {open ? <Menu className="hidden" /> : null}
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t bg-background lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            {mainLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-navy hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
            <p className="px-3 pt-3 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
              Loans
            </p>
            {loanProducts.map((product) => (
              <Link
                key={product.slug}
                to={`/${product.slug}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-navy hover:bg-secondary"
              >
                {product.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-medium text-navy hover:bg-secondary"
            >
              Contact Us
            </Link>
            <Button asChild size="lg" className="mt-2 w-full">
              <Link to="/apply" onClick={() => setOpen(false)}>
                Apply Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
