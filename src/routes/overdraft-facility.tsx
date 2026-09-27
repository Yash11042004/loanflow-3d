import { createFileRoute } from "@tanstack/react-router";
import { LoanPage } from "@/components/site/LoanPage";
import { company, getLoanProduct } from "@/content/site";

const p = getLoanProduct("overdraft-facility");

export const Route = createFileRoute("/overdraft-facility")({
  head: () => ({
    meta: [
      { title: `Overdraft Facility | ${company.shortName}` },
      { name: "description", content: p.shortDescription },
      { property: "og:title", content: `Overdraft Facility | ${company.shortName}` },
      { property: "og:description", content: p.heroSubtitle },
    ],
  }),
  component: () => <LoanPage slug="overdraft-facility" />,
});
