import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/content/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${company.shortName}` },
      { name: "description", content: "Privacy Policy for ${company.shortName} loan enquiries." },
      { property: "og:title", content: `Privacy Policy | ${company.shortName}` },
      { property: "og:description", content: "Read our Privacy Policy." },
    ],
  }),
  component: Legal,
});

function Legal() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
      <h1 className="font-display text-4xl font-semibold text-navy">Privacy Policy</h1>
      <p className="mt-4 text-muted-foreground">Last updated: [Add date]</p>
      <div className="mt-8 space-y-4 rounded-2xl border bg-card p-6 text-muted-foreground">
        <p>[Add company-approved Privacy Policy content here. This page is a placeholder and must be reviewed by your legal team before going live.]</p>
        <p>Company: {company.name} · Contact: {company.email}</p>
      </div>
    </section>
  );
}
