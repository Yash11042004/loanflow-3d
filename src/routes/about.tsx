import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about-3d.png";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/LoanPage";
import { aboutPoints, company } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About Us | ${company.shortName}` },
      { name: "description", content: "Learn how we help individuals and businesses explore suitable loan options." },
      { property: "og:title", content: `About ${company.shortName}` },
      { property: "og:description", content: "A customer-first team guiding you through home, personal and business financing." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-royal uppercase">About Us</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-navy sm:text-5xl">Financial Solutions Built Around Your Needs</h1>
          <p className="mt-5 text-lg text-muted-foreground">{company.description}</p>
          <p className="mt-4 text-muted-foreground">[Add company history, mission and approved registrations here.]</p>
        </Reveal>
        <Reveal delay={0.1}><img src={aboutImg} alt="3D financial district illustration" width={560} height={560} className="float-slow mx-auto w-full max-w-md drop-shadow-2xl" /></Reveal>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
        {aboutPoints.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.05}>
            <div className="card-3d h-full rounded-2xl border bg-card p-7">
              <h2 className="font-display text-xl font-semibold text-navy">{a.title}</h2>
              <p className="mt-2 text-muted-foreground">{a.detail}</p>
            </div>
          </Reveal>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
