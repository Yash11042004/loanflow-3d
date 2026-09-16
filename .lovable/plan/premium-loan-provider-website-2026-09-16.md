# Premium Loan Provider Website

A modern, 3D-accented fintech site for a lender offering Home Loan, Personal Loan, Business Loan and Overdraft Facility. No credit cards, no blog, no invented company facts.

## Design system

- Palette: deep navy, royal blue, white, soft gray, cyan accent with a restrained gold highlight — all as semantic tokens.
- Typography: one confident display face for headings plus a clean grotesque for body text.
- Glassmorphism panels, soft depth shadows, generous whitespace, rounded-but-crisp cards.
- Motion: entrance and scroll reveals, floating hero elements, card hover lift. All motion respects reduced-motion settings.

## Pages

1. **Home** (`/`)
   - Sticky nav: Home, About Us, Loans (dropdown of the four products), Contact Us, plus an Apply Now button. Mobile hamburger keeps Apply Now visible.
   - Hero: "Your Financial Goals. Our Loan Solutions." with both CTAs, a 3D house/geometry visual with floating loan-document cards and subtle particles, and a short 4-field enquiry form (name, mobile, loan type, amount).
   - "Loan Solutions Designed Around You" — exactly four cards with the given titles, descriptions and CTAs, each with its own illustration.
   - About: "Financial Solutions Built Around Your Needs" with a premium visual and placeholder copy.
   - Why Choose Us: the four given points, no approval or rate claims.
   - Contact teaser and footer.
2. **About Us** (`/about`) — expanded version of the home section, placeholder company details.
3. **Loan pages** — `/home-loan`, `/personal-loan`, `/business-loan`, `/overdraft-facility`. Each: hero, overview, suitable use cases, key features, eligibility, required documents, FAQs, Apply Now. Every factual slot is a clearly marked placeholder such as "[Add company-approved eligibility criteria]".
4. **Apply** (`/apply`) — 4-step enquiry flow: loan type; personal details (name, mobile, email, city); loan details (amount, employment/business type, preferred contact time); consent checkbox, privacy notice and a clear line that an enquiry is not an approval. Ends in a thank-you state.
5. **Contact Us** (`/contact`) — placeholder company name, address, phone, email, business hours, plus an enquiry form.
6. **Privacy Policy** and **Terms & Conditions** — placeholder legal pages linked from the footer.

## Forms

Validated on the client: required fields, email format, Indian mobile number (10 digits starting 6-9, optional +91), amount as a positive number, consent required. Submission is mocked with a loading state and success screen; the submit call sits behind a single function so a real backend can replace it later. No PAN, Aadhaar, OTP or banking credentials collected.

## Visuals

Generated illustrations for the hero and each loan product, styled consistently (navy/blue, soft light, subtle depth). Lightweight 3D: CSS transforms and animated layered artwork for most surfaces; a small React Three Fiber scene only in the hero, lazy-loaded on the client with a static image fallback so nothing breaks or slows mobile.

## Technical notes

- TanStack Start file routes; each page gets its own `head()` with unique title, description and og tags. Semantic headings, single H1 per page, alt text on images.
- Framer Motion (Motion for React) for animation; shadcn/ui for form controls, dialog, accordion (FAQs) and select; Lucide icons.
- Content lives in typed constants per page so text and placeholders are easy to edit in one place.
- 3D hero mounted client-only; heavy assets lazy-loaded; reduced-motion honoured throughout.

## Not included

Credit cards, blog or news sections, unrelated financial products, invented rates, fees, eligibility numbers, statistics, awards or registrations.
