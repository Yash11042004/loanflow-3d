import { z } from "zod";
import { loanProducts } from "@/content/site";

const loanNames = loanProducts.map((p) => p.name) as [string, ...string[]];

export const indianMobile = z
  .string()
  .trim()
  .regex(/^(?:\+?91[-\s]?)?[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number");

export const quickEnquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name"),
  mobile: indianMobile,
  loanType: z.enum(loanNames, { required_error: "Select a loan type" }),
  amount: z
    .string()
    .trim()
    .min(1, "Enter the required amount")
    .refine((v) => Number(v.replace(/[,\s]/g, "")) > 0, "Enter a valid amount"),
});

export type QuickEnquiry = z.infer<typeof quickEnquirySchema>;

export const stepOneSchema = z.object({
  loanType: z.enum(loanNames, { required_error: "Select a loan type" }),
});

export const stepTwoSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name"),
  mobile: indianMobile,
  email: z.string().trim().email("Enter a valid email address"),
  city: z.string().trim().min(2, "Enter your city"),
});

export const stepThreeSchema = z.object({
  amount: z
    .string()
    .trim()
    .min(1, "Enter the required loan amount")
    .refine((v) => Number(v.replace(/[,\s]/g, "")) > 0, "Enter a valid amount"),
  employmentType: z.string().min(1, "Select your employment or business type"),
  contactTime: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please allow us to contact you about this enquiry" }),
  }),
});

export const fullEnquirySchema = stepOneSchema.merge(stepTwoSchema).merge(stepThreeSchema);
export type FullEnquiry = z.infer<typeof fullEnquirySchema>;

export const employmentTypes = [
  "Salaried",
  "Self-employed professional",
  "Business owner",
  "Other",
];

export const contactTimes = [
  "Morning (9am - 12pm)",
  "Afternoon (12pm - 4pm)",
  "Evening (4pm - 8pm)",
];

export type EnquiryPayload = Partial<FullEnquiry> & { source: string };

/**
 * Mock submission. Swap the body for a real API/server-function call later —
 * every form in the site funnels through this one function.
 */
export async function submitEnquiry(payload: EnquiryPayload): Promise<{ ok: true }> {
  await new Promise((resolve) => setTimeout(resolve, 900));
  if (import.meta.env.DEV) {
    console.info("[enquiry] mock submission", payload);
  }
  return { ok: true };
}
