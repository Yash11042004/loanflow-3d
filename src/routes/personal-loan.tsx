import { createFileRoute } from "@tanstack/react-router";
import { LoanPage } from "@/components/site/LoanPage";
import { company, getLoanProduct } from "@/content/site";

const p = getLoanProduct("personal-loan");

export const Route = createFileRoute("/personal-loan")({
  head: () => ({
    meta: [
      { title: `Personal Loan | ${company.shortName}` },
      { name: "description", content: p.shortDescription },
      { property: "og:title", content: `Personal Loan | ${company.shortName}` },
      { property: "og:description", content: p.heroSubtitle },
    ],
  }),
  component: () => <LoanPage slug="personal-loan" />,
});
