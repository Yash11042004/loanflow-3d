import { createFileRoute } from "@tanstack/react-router";
import { LoanPage } from "@/components/site/LoanPage";
import { company, getLoanProduct } from "@/content/site";

const p = getLoanProduct("home-loan");

export const Route = createFileRoute("/home-loan")({
  head: () => ({
    meta: [
      { title: `Home Loan | ${company.shortName}` },
      { name: "description", content: p.shortDescription },
      { property: "og:title", content: `Home Loan | ${company.shortName}` },
      { property: "og:description", content: p.heroSubtitle },
    ],
  }),
  component: () => <LoanPage slug="home-loan" />,
});
