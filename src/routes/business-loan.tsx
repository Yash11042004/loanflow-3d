import { createFileRoute } from "@tanstack/react-router";
import { LoanPage } from "@/components/site/LoanPage";
import { company, getLoanProduct } from "@/content/site";

const p = getLoanProduct("business-loan");

export const Route = createFileRoute("/business-loan")({
  head: () => ({
    meta: [
      { title: `Business Loan | ${company.shortName}` },
      { name: "description", content: p.shortDescription },
      { property: "og:title", content: `Business Loan | ${company.shortName}` },
      { property: "og:description", content: p.heroSubtitle },
    ],
  }),
  component: () => <LoanPage slug="business-loan" />,
});
