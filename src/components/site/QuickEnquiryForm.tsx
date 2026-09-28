import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Field, zodErrors } from "./Field";
import { loanTypeNames, disclaimers } from "@/content/site";
import { quickEnquirySchema, submitEnquiry } from "@/lib/enquiry";

type Props = {
  source: string;
  defaultLoanType?: string;
  withMessage?: boolean;
  title?: string;
};

export function QuickEnquiryForm({ source, defaultLoanType = "", withMessage, title }: Props) {
  const [values, setValues] = useState({
    fullName: "",
    mobile: "",
    loanType: defaultLoanType,
    amount: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<"fullName" | "mobile" | "loanType" | "amount", string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const set = (k: keyof typeof values) => (v: string) => setValues((s) => ({ ...s, [k]: v }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = quickEnquirySchema.safeParse(values);
    if (!parsed.success) {
      setErrors(zodErrors<"fullName" | "mobile" | "loanType" | "amount">(parsed.error.issues));
      return;
    }
    setErrors({});
    setStatus("loading");
    await submitEnquiry({ ...parsed.data, source });
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-royal" aria-hidden />
        <h3 className="mt-4 font-display text-xl font-semibold text-navy">Thank you!</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Your enquiry has been received. Our team will contact you soon.
        </p>
      </div>
    );
  }

  const idp = `${source}-`;
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      {title && <h3 className="font-display text-lg font-semibold text-navy">{title}</h3>}
      <Field id={idp + "name"} label="Full name" error={errors.fullName}>
        <Input id={idp + "name"} autoComplete="name" value={values.fullName} onChange={(e) => set("fullName")(e.target.value)} aria-invalid={!!errors.fullName} />
      </Field>
      <Field id={idp + "mobile"} label="Mobile number" error={errors.mobile}>
        <Input id={idp + "mobile"} type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile" value={values.mobile} onChange={(e) => set("mobile")(e.target.value)} aria-invalid={!!errors.mobile} />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id={idp + "type"} label="Loan type" error={errors.loanType}>
          <Select value={values.loanType} onValueChange={set("loanType")}>
            <SelectTrigger id={idp + "type"} aria-invalid={!!errors.loanType} className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {loanTypeNames.map((n) => (
                <SelectItem key={n} value={n}>{n}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field id={idp + "amount"} label="Required amount (₹)" error={errors.amount}>
          <Input id={idp + "amount"} inputMode="numeric" value={values.amount} onChange={(e) => set("amount")(e.target.value)} aria-invalid={!!errors.amount} />
        </Field>
      </div>
      {withMessage && (
        <Field id={idp + "msg"} label="Message (optional)">
          <Textarea id={idp + "msg"} rows={3} value={values.message} onChange={(e) => set("message")(e.target.value)} />
        </Field>
      )}
      <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? <><Loader2 className="h-4 w-4 animate-spin" /> Submitting…</> : "Get a Callback"}
      </Button>
      <p className="text-xs leading-relaxed text-muted-foreground">{disclaimers.enquiry}</p>
    </form>
  );
}
