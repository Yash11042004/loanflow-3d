import { Link } from "@tanstack/react-router";
import { company } from "@/content/site";

/**
 * Placeholder logo — replace the SVG mark and text with the client's brand asset.
 */
export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const text = variant === "light" ? "text-navy" : "text-navy-foreground";

  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label={`${company.shortName} home`}>
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-royal to-navy shadow-md">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
          <path d="M4 15.5 9.5 10l3.5 3.5L20 6.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M4 19.5h16" stroke="#7dd3fc" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-lg font-semibold ${text}`}>
          {company.shortName}
        </span>
        <span
          className={`block text-[10px] font-medium tracking-[0.18em] uppercase ${
            variant === "light" ? "text-muted-foreground" : "text-navy-foreground/60"
          }`}
        >
          Loan Solutions
        </span>
      </span>
    </Link>
  );
}
