import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Field, zodErrors } from "@/components/site/Field";
import { loanProducts, disclaimers, company } from "@/content/site";
import { loanImages } from "@/components/site/visuals";
import { stepOneSchema, stepTwoSchema, stepThreeSchema, employmentTypes, contactTimes, submitEnquiry } from "@/lib/enquiry";

export const Route = createFileRoute("/apply")({
  validateSearch: (s) => z.object({ type: z.string().optional() }).parse(s),
  head: () => ({
    meta: [
      { title: `Apply for a Loan | ${company.shortName}` },
      { name: "description", content: "Start your loan enquiry in four simple steps." },
      { property: "og:title", content: `Start Your Loan Enquiry | ${company.shortName}` },
      { property: "og:description", content: "A quick, secure 4-step enquiry for home, personal, business loans and overdraft." },
    ],
  }),
  component: Apply,
});

const steps = ["Loan type", "Your details", "Loan details", "Review"];

function Apply() {
  const { type } = Route.useSearch();
  const [step, setStep] = useState(0);
  const [v, setV] = useState({
    loanType: loanProducts.some((p) => p.name === type) ? type! : "",
    fullName: "", mobile: "", email: "", city: "",
    amount: "", employmentType: "", contactTime: "", consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const set = (k: keyof typeof v) => (val: string | boolean) => setV((s) => ({ ...s, [k]: val }));

  const schemas = [stepOneSchema, stepTwoSchema, null, stepThreeSchema];

  async function next() {
    const schema = step === 2 ? stepThreeSchema.omit({ consent: true }) : schemas[step];
    if (schema) {
      const r = schema.safeParse(v);
      if (!r.success) return setErrors(zodErrors(r.error.issues));
    }
    setErrors({});
    if (step < 3) return setStep(step + 1);
    setStatus("loading");
    await submitEnquiry({ ...v, consent: true, source: "apply" });
    setStatus("done");
  }

  if (status === "done") {
    return (
      <section className="mx-auto max-w-xl px-4 py-24 text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-royal" aria-hidden />
        <h1 className="mt-6 font-display text-3xl font-semibold text-navy">Thank you!</h1>
        <p className="mt-3 text-muted-foreground">Your enquiry has been received. Our team will contact you soon.</p>
        <p className="mt-3 text-xs text-muted-foreground">{disclaimers.enquiry}</p>
        <Button asChild size="lg" className="mt-8"><Link to="/">Back to Home</Link></Button>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
      <h1 className="font-display text-4xl font-semibold text-navy">Start your loan enquiry</h1>
      <p className="mt-3 text-muted-foreground">Four quick steps. No PAN, Aadhaar, OTP or banking passwords needed.</p>

      <ol className="mt-8 grid grid-cols-4 gap-2" aria-label="Progress">
        {steps.map((s, i) => (
          <li key={s} className="space-y-2">
            <div className={`h-1.5 rounded-full ${i <= step ? "bg-royal" : "bg-border"}`} />
            <p className={`text-xs font-medium ${i === step ? "text-navy" : "text-muted-foreground"}`}>{i + 1}. {s}</p>
          </li>
        ))}
      </ol>

      <div className="card-3d mt-8 rounded-3xl border bg-card p-6 sm:p-8">
        {step === 0 && (
          <fieldset>
            <legend className="font-display text-xl font-semibold text-navy">Which loan are you looking for?</legend>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {loanProducts.map((p) => (
                <button key={p.slug} type="button" onClick={() => set("loanType")(p.name)} aria-pressed={v.loanType === p.name}
                  className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition-all hover:-translate-y-0.5 ${v.loanType === p.name ? "border-royal bg-royal/5 ring-2 ring-royal" : ""}`}>
                  <img src={loanImages[p.slug]} alt="" width={56} height={56} className="h-14 w-14 object-contain" />
                  <span className="font-semibold text-navy">{p.name}</span>
                </button>
              ))}
            </div>
            {errors.loanType && <p role="alert" className="mt-3 text-xs font-medium text-destructive">{errors.loanType}</p>}
          </fieldset>
        )}

        {step === 1 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="a-name" label="Full name" error={errors.fullName}><Input id="a-name" autoComplete="name" value={v.fullName} onChange={(e) => set("fullName")(e.target.value)} /></Field>
            <Field id="a-mobile" label="Mobile number" error={errors.mobile}><Input id="a-mobile" type="tel" autoComplete="tel" value={v.mobile} onChange={(e) => set("mobile")(e.target.value)} /></Field>
            <Field id="a-email" label="Email address" error={errors.email}><Input id="a-email" type="email" autoComplete="email" value={v.email} onChange={(e) => set("email")(e.target.value)} /></Field>
            <Field id="a-city" label="City" error={errors.city}><Input id="a-city" autoComplete="address-level2" value={v.city} onChange={(e) => set("city")(e.target.value)} /></Field>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="a-amount" label="Required loan amount (₹)" error={errors.amount}><Input id="a-amount" inputMode="numeric" value={v.amount} onChange={(e) => set("amount")(e.target.value)} /></Field>
            <Field id="a-emp" label="Employment / business type" error={errors.employmentType}>
              <Select value={v.employmentType} onValueChange={set("employmentType")}>
                <SelectTrigger id="a-emp" className="w-full"><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>{employmentTypes.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
              </Select>
            </Field>
            <Field id="a-time" label="Preferred contact time (optional)">
              <Select value={v.contactTime} onValueChange={set("contactTime")}>
                <SelectTrigger id="a-time" className="w-full"><SelectValue placeholder="Any time" /></SelectTrigger>
                <SelectContent>{contactTimes.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
              </Select>
            </Field>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="font-display text-xl font-semibold text-navy">Review your enquiry</h2>
            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              {[["Loan type", v.loanType], ["Name", v.fullName], ["Mobile", v.mobile], ["Email", v.email], ["City", v.city], ["Amount", `₹${v.amount}`], ["Employment", v.employmentType], ["Contact time", v.contactTime || "Any time"]].map(([k, val]) => (
                <div key={k} className="rounded-xl bg-secondary/60 p-3"><dt className="text-xs text-muted-foreground">{k}</dt><dd className="font-medium text-navy">{val}</dd></div>
              ))}
            </dl>
            <label className="mt-6 flex items-start gap-3 text-sm">
              <Checkbox checked={v.consent} onCheckedChange={(c) => set("consent")(c === true)} className="mt-0.5" />
              <span>I agree to be contacted by {company.shortName} about this enquiry and accept the <Link to="/privacy-policy" className="font-semibold text-royal">Privacy Policy</Link>.</span>
            </label>
            {errors.consent && <p role="alert" className="mt-2 text-xs font-medium text-destructive">{errors.consent}</p>}
            <p className="mt-4 text-xs text-muted-foreground">{disclaimers.privacy}</p>
            <p className="mt-2 text-xs font-medium text-navy">{disclaimers.enquiry}</p>
          </div>
        )}

        <div className="mt-8 flex justify-between gap-3">
          <Button type="button" variant="outline" onClick={() => setStep(step - 1)} disabled={step === 0}>Back</Button>
          <Button type="button" size="lg" onClick={next} disabled={status === "loading"}>
            {status === "loading" ? <><Loader2 className="h-4 w-4 animate-spin" /> Submitting…</> : step === 3 ? "Submit Enquiry" : "Continue"}
          </Button>
        </div>
      </div>
    </section>
  );
}
