import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, loanProducts } from "@/content/site";

export function Footer() {
  return (
    <footer className="navy-surface mt-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4 lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                <path d="M4 15.5 9.5 10l3.5 3.5L20 6.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M4 19.5h16" stroke="#7dd3fc" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </span>
            <span className="font-display text-lg font-semibold text-navy-foreground">
              {company.shortName}
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-navy-foreground/70">
            {company.description}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[0.14em] text-navy-foreground uppercase">
            Loan Services
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {loanProducts.map((product) => (
              <li key={product.slug}>
                <Link
                  to={`/${product.slug}`}
                  className="text-navy-foreground/70 transition-colors hover:text-cyan"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[0.14em] text-navy-foreground uppercase">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact Us" },
              { to: "/apply", label: "Apply Now" },
              { to: "/privacy-policy", label: "Privacy Policy" },
              { to: "/terms", label: "Terms & Conditions" },
            ].map((link) => (
              <li key={link.to + link.label}>
                <Link
                  to={link.to}
                  className="text-navy-foreground/70 transition-colors hover:text-cyan"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[0.14em] text-navy-foreground uppercase">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden />
              <span>{company.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden />
              <span>{company.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Loans are subject to eligibility, documentation and lender approval.</p>
        </div>
      </div>
    </footer>
  );
}
