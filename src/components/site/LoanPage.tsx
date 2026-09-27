import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, FileText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getLoanProduct, disclaimers, type LoanSlug } from "@/content/site";
import { loanImages } from "./visuals";
import { Reveal } from "./Reveal";
import { QuickEnquiryForm } from "./QuickEnquiryForm";

export function LoanPage({ slug }: { slug: LoanSlug }) {
  const p = getLoanProduct(slug);
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-royal/15 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.18em] text-royal uppercase">{p.name}</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy sm:text-5xl">{p.heroTitle}</h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">{p.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link to="/apply" search={{ type: p.name }}>Apply Now <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild size="lg" variant="outline"><Link to="/contact">Talk to Us</Link></Button>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex justify-center">
            <img src={loanImages[slug]} alt={`${p.name} illustration`} width={520} height={520} className="float-slow w-full max-w-md drop-shadow-2xl" />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <h2 className="font-display text-3xl font-semibold text-navy">Overview</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{p.overview}</p>
            <h3 className="mt-10 font-display text-xl font-semibold text-navy">Suitable for</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {p.useCases.map((u) => (
                <li key={u} className="flex gap-3 rounded-xl border bg-card p-4 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-royal" aria-hidden />{u}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-3d rounded-2xl border bg-card p-6">
              <QuickEnquiryForm source={slug} defaultLoanType={p.name} title={`Enquire about ${p.name}`} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-navy">Key features</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {p.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <div className="card-3d h-full rounded-2xl border bg-card p-6">
                  <h3 className="font-display font-semibold text-navy">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
        {[
          { title: "Eligibility", items: p.eligibility, Icon: ShieldCheck },
          { title: "Documents required", items: p.documents, Icon: FileText },
        ].map(({ title, items, Icon }) => (
          <Reveal key={title}>
            <div className="h-full rounded-2xl border bg-card p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-royal/10 text-royal"><Icon className="h-5 w-5" aria-hidden /></span>
                <h2 className="font-display text-xl font-semibold text-navy">{title}</h2>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {items.map((it) => (
                  <li key={it} className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-royal" aria-hidden />{it}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-8 sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-navy">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="mt-6">
          {p.faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`f${i}`}>
              <AccordionTrigger className="text-left text-navy">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <CtaBand />
    </>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
      <div className="navy-surface relative overflow-hidden rounded-3xl px-8 py-12 sm:px-12">
        <div aria-hidden className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-cyan/20 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy-foreground sm:text-3xl">Ready to explore your loan options?</h2>
            <p className="mt-2 max-w-xl text-sm text-navy-foreground/70">{disclaimers.enquiry}</p>
          </div>
          <Button asChild size="lg" variant="secondary"><Link to="/apply">Start Your Enquiry</Link></Button>
        </div>
      </div>
    </section>
  );
}
