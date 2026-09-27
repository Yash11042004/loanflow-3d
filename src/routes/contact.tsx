import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { QuickEnquiryForm } from "@/components/site/QuickEnquiryForm";
import { company } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact Us | ${company.shortName}` },
      { name: "description", content: "Get in touch about home, personal, business loans or overdraft facilities." },
      { property: "og:title", content: `Contact ${company.shortName}` },
      { property: "og:description", content: "Send an enquiry and our team will call you back." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const items = [
    { Icon: MapPin, label: "Address", value: company.address },
    { Icon: Phone, label: "Phone", value: company.phone },
    { Icon: Mail, label: "Email", value: company.email },
    { Icon: Clock, label: "Business hours", value: company.hours },
  ];
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.18em] text-royal uppercase">Contact Us</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-navy sm:text-5xl">Let's talk about your requirement</h1>
        <p className="mt-5 text-lg text-muted-foreground">Share a few details and our team will get back to you.</p>
        <h2 className="mt-10 font-display text-xl font-semibold text-navy">{company.name}</h2>
        <ul className="mt-5 space-y-4">
          {items.map(({ Icon, label, value }) => (
            <li key={label} className="flex gap-4 rounded-2xl border bg-card p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-royal/10 text-royal"><Icon className="h-5 w-5" aria-hidden /></span>
              <div><p className="text-xs font-semibold text-muted-foreground uppercase">{label}</p><p className="text-navy">{value}</p></div>
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="glass-panel card-3d rounded-3xl border p-6 sm:p-8">
          <QuickEnquiryForm source="contact" withMessage title="Send an enquiry" />
        </div>
      </Reveal>
    </section>
  );
}
