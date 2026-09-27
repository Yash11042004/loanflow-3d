import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/content/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms & Conditions | ${company.shortName}` },
      { name: "description", content: "Terms & Conditions for ${company.shortName} loan enquiries." },
      { property: "og:title", content: `Terms & Conditions | ${company.shortName}` },
      { property: "og:description", content: "Read our Terms & Conditions." },
    ],
  }),
  component: Legal,
});

function Legal() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
      <h1 className="font-display text-4xl font-semibold text-navy">Terms & Conditions</h1>
      <p className="mt-4 text-muted-foreground">Last updated: [Add date]</p>
      <div className="mt-8 space-y-4 rounded-2xl border bg-card p-6 text-muted-foreground">
        <p>[Add company-approved Terms & Conditions content here. This page is a placeholder and must be reviewed by your legal team before going live.]</p>
        <p>Company: {company.name} · Contact: {company.email}</p>
      </div>
    </section>
  );
}
