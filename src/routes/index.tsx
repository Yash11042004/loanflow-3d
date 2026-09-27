import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Headset, Layers, Route as RouteIcon, HeartHandshake, FileCheck2, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-3d.png";
import aboutImg from "@/assets/about-3d.png";
import { HeroCanvas } from "@/components/site/HeroCanvas";
import { Reveal } from "@/components/site/Reveal";
import { QuickEnquiryForm } from "@/components/site/QuickEnquiryForm";
import { CtaBand } from "@/components/site/LoanPage";
import { loanImages } from "@/components/site/visuals";
import { loanProducts, whyChooseUs, company } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Home, Personal & Business Loans | ${company.shortName}` },
      { name: "description", content: "Explore home loans, personal loans, business loans and overdraft facilities with guided support." },
      { property: "og:title", content: `Loan Solutions for Every Goal | ${company.shortName}` },
      { property: "og:description", content: "Home, personal, business loans and overdraft facilities with personalised guidance." },
    ],
  }),
  component: Index,
});

const whyIcons = [Headset, Layers, RouteIcon, HeartHandshake];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <HeroCanvas />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8 lg:py-24">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border bg-card/70 px-3 py-1 text-xs font-semibold text-royal backdrop-blur">
              <BadgeCheck className="h-3.5 w-3.5" aria-hidden /> Home · Personal · Business · Overdraft
            </p>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] text-navy sm:text-6xl">
              Your Financial Goals.<br /><span className="text-royal">Our Loan Solutions.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Explore flexible financing options for your home, personal needs, business growth, and short-term cash flow requirements.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link to="/apply">Apply Now <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild size="lg" variant="outline"><a href="#loans">Explore Loan Options</a></Button>
            </div>
            <div className="relative mt-10 hidden max-w-md lg:block">
              <img src={heroImg} alt="3D illustration of a modern home with loan documents" width={560} height={560} className="float-slow w-full drop-shadow-2xl" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass-panel card-3d rounded-3xl border p-6 sm:p-8">
              <QuickEnquiryForm source="home-hero" title="Get a quick callback" />
            </div>
          </Reveal>
          <img src={heroImg} alt="" aria-hidden width={400} height={400} className="mx-auto w-72 lg:hidden" />
        </div>
      </section>

      <section id="loans" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">Loan Solutions Designed Around You</h2>
          <p className="mt-3 text-muted-foreground">Four focused financing options, each with guidance from enquiry to application.</p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {loanProducts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <article className="card-3d group flex h-full flex-col rounded-3xl border bg-card p-6">
                <img src={loanImages[p.slug]} alt={`${p.name} illustration`} width={220} height={220} loading="lazy" className="mx-auto h-40 w-40 object-contain transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
                <h3 className="mt-4 font-display text-xl font-semibold text-navy">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.shortDescription}</p>
                <Link to={`/${p.slug}`} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-royal hover:gap-2.5 transition-all">
                  {p.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal><img src={aboutImg} alt="3D illustration of a financial district" width={560} height={560} loading="lazy" className="float-slower mx-auto w-full max-w-md drop-shadow-2xl" /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">Financial Solutions Built Around Your Needs</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{company.description}</p>
            <p className="mt-3 text-muted-foreground leading-relaxed">[Add company background, history and approved credentials here.]</p>
            <Button asChild variant="outline" size="lg" className="mt-8"><Link to="/about">About Us</Link></Button>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal><h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">Why Choose Us</h2></Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((w, i) => {
            const Icon = whyIcons[i];
            return (
              <Reveal key={w.title} delay={i * 0.06}>
                <div className="card-3d h-full rounded-2xl border bg-card p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-royal text-primary-foreground"><Icon className="h-5 w-5" aria-hidden /></span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{w.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-12 flex items-center gap-3 rounded-2xl border bg-card p-5 text-sm text-muted-foreground">
          <FileCheck2 className="h-5 w-5 shrink-0 text-royal" aria-hidden />
          Have questions first? <Link to="/contact" className="font-semibold text-royal">Contact our team</Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
