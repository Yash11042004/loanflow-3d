import home from "@/assets/loan-home.png";
import personal from "@/assets/loan-personal.png";
import business from "@/assets/loan-business.png";
import overdraft from "@/assets/loan-overdraft.png";
import type { LoanSlug } from "@/content/site";

export const loanImages: Record<LoanSlug, string> = {
  "home-loan": home,
  "personal-loan": personal,
  "business-loan": business,
  "overdraft-facility": overdraft,
};
