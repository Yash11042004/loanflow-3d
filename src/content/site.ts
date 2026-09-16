/**
 * Single source of editable company content.
 * Replace the placeholder values below with client-approved details.
 */

export const company = {
  name: "[Company Name]",
  shortName: "Finlora",
  tagline: "Flexible loan solutions for personal, home and business goals.",
  description:
    "We help individuals and businesses explore suitable loan options and guide them through the application journey with clear, transparent communication.",
  address: "[Office Address]",
  phone: "[Phone Number]",
  email: "[Email Address]",
  hours: "[Business Hours]",
  mapsUrl: "",
};

export const disclaimers = {
  enquiry:
    "Submitting an enquiry does not guarantee loan approval. All loans are subject to eligibility checks, documentation and lender approval.",
  privacy:
    "We use the details you share only to contact you about your loan enquiry. We never ask for PAN, Aadhaar, OTPs or banking credentials in this form.",
};

export type LoanSlug = "home-loan" | "personal-loan" | "business-loan" | "overdraft-facility";

export type LoanProduct = {
  slug: LoanSlug;
  name: string;
  shortDescription: string;
  cta: string;
  heroTitle: string;
  heroSubtitle: string;
  overview: string;
  useCases: string[];
  features: { title: string; detail: string }[];
  eligibility: string[];
  documents: string[];
  faqs: { q: string; a: string }[];
};

export const loanProducts: LoanProduct[] = [
  {
    slug: "home-loan",
    name: "Home Loan",
    shortDescription:
      "Turn your dream of owning a home into reality with suitable home loan solutions.",
    cta: "Explore Home Loans",
    heroTitle: "Home Loans for the place you'll call yours",
    heroSubtitle:
      "Guidance on home loan options for purchase, construction, or transferring an existing home loan.",
    overview:
      "A home loan helps you finance a residential property while repaying the amount over an agreed tenure. Our team helps you understand the options available and prepares your enquiry for lender review.",
    useCases: [
      "Purchasing a new or resale residential property",
      "Construction on an owned plot",
      "Renovation or extension of an existing home",
      "Balance transfer of an existing home loan",
    ],
    features: [
      { title: "Loan amount", detail: "[Add company-approved loan amount range]" },
      { title: "Tenure options", detail: "[Add company-approved tenure details]" },
      { title: "Interest structure", detail: "[Add company-approved interest structure]" },
      { title: "Processing charges", detail: "[Add company-approved fees and charges]" },
    ],
    eligibility: [
      "[Add company-approved eligibility criteria]",
      "[Add applicant age and income requirements]",
      "[Add employment or business vintage requirement]",
      "[Add property and location requirements]",
    ],
    documents: [
      "[Add identity proof requirements]",
      "[Add address proof requirements]",
      "[Add income proof requirements]",
      "[Add property document requirements]",
    ],
    faqs: [
      {
        q: "Can I apply jointly with a family member?",
        a: "Joint applications are commonly permitted. [Add company-approved co-applicant policy]",
      },
      {
        q: "How long does the process take?",
        a: "Timelines depend on documentation and lender review. [Add company-approved timeline guidance]",
      },
      {
        q: "Does submitting an enquiry mean my loan is approved?",
        a: "No. An enquiry only starts a conversation with our team. Approval depends on eligibility, documents and lender decisions.",
      },
    ],
  },
  {
    slug: "personal-loan",
    name: "Personal Loan",
    shortDescription:
      "Access funds for your personal financial needs with convenient loan solutions.",
    cta: "Explore Personal Loans",
    heroTitle: "Personal Loans for life's planned and unplanned needs",
    heroSubtitle:
      "Understand personal loan options and the documentation required, with support at every step.",
    overview:
      "A personal loan is generally an unsecured loan used for a wide range of personal requirements, repaid in monthly instalments over an agreed tenure.",
    useCases: [
      "Planned family expenses such as education or a wedding",
      "Medical or emergency requirements",
      "Home improvement or large purchases",
      "Consolidating existing obligations",
    ],
    features: [
      { title: "Loan amount", detail: "[Add company-approved loan amount range]" },
      { title: "Tenure options", detail: "[Add company-approved tenure details]" },
      { title: "Collateral", detail: "[Add company-approved collateral policy]" },
      { title: "Processing charges", detail: "[Add company-approved fees and charges]" },
    ],
    eligibility: [
      "[Add company-approved eligibility criteria]",
      "[Add minimum income requirement]",
      "[Add employment type requirement]",
      "[Add credit profile requirement]",
    ],
    documents: [
      "[Add identity proof requirements]",
      "[Add address proof requirements]",
      "[Add income proof requirements]",
      "[Add bank statement requirements]",
    ],
    faqs: [
      {
        q: "What can a personal loan be used for?",
        a: "Personal loans are typically used for a range of personal needs. [Add company-approved end-use policy]",
      },
      {
        q: "Is security or collateral needed?",
        a: "[Add company-approved collateral policy]",
      },
      {
        q: "Will you ask for my banking passwords or OTPs?",
        a: "Never. We only request the documents needed for a loan application and never ask for passwords, OTPs or card details.",
      },
    ],
  },
  {
    slug: "business-loan",
    name: "Business Loan",
    shortDescription:
      "Support your business plans, expansion, and working capital requirements with business financing solutions.",
    cta: "Explore Business Loans",
    heroTitle: "Business Loans built around your growth plans",
    heroSubtitle:
      "From working capital to expansion, explore financing options suited to your business profile.",
    overview:
      "Business loans support operational and growth requirements. We help you assess suitable structures and prepare a complete enquiry for lender consideration.",
    useCases: [
      "Working capital and cash flow requirements",
      "Purchase of equipment or machinery",
      "Expansion into new locations or capacity",
      "Inventory build-up for seasonal demand",
    ],
    features: [
      { title: "Loan amount", detail: "[Add company-approved loan amount range]" },
      { title: "Tenure options", detail: "[Add company-approved tenure details]" },
      { title: "Secured / unsecured", detail: "[Add company-approved structure options]" },
      { title: "Processing charges", detail: "[Add company-approved fees and charges]" },
    ],
    eligibility: [
      "[Add company-approved eligibility criteria]",
      "[Add business vintage requirement]",
      "[Add turnover requirement]",
      "[Add entity type requirement]",
    ],
    documents: [
      "[Add business registration documents]",
      "[Add financial statement requirements]",
      "[Add GST or tax filing requirements]",
      "[Add bank statement requirements]",
    ],
    faqs: [
      {
        q: "Which business types can apply?",
        a: "[Add company-approved list of eligible entity types]",
      },
      {
        q: "Do I need to pledge assets?",
        a: "This depends on the structure and lender. [Add company-approved security policy]",
      },
      {
        q: "Can a new business apply?",
        a: "[Add company-approved business vintage policy]",
      },
    ],
  },
  {
    slug: "overdraft-facility",
    name: "Overdraft Facility",
    shortDescription:
      "Manage short-term cash flow requirements with an overdraft facility, subject to eligibility and approval.",
    cta: "Explore Overdraft",
    heroTitle: "Overdraft Facility for short-term cash flow needs",
    heroSubtitle:
      "A flexible limit you can draw on as required, subject to eligibility and lender approval.",
    overview:
      "An overdraft facility provides an approved limit that can be used as needed, with interest typically applicable on the amount utilised. Terms depend on eligibility and lender policy.",
    useCases: [
      "Bridging short-term working capital gaps",
      "Managing payment cycles with suppliers",
      "Seasonal or cyclical cash flow requirements",
      "Keeping a standby limit available for operations",
    ],
    features: [
      { title: "Facility limit", detail: "[Add company-approved limit range]" },
      { title: "Interest application", detail: "[Add company-approved interest application details]" },
      { title: "Renewal terms", detail: "[Add company-approved renewal terms]" },
      { title: "Charges", detail: "[Add company-approved fees and charges]" },
    ],
    eligibility: [
      "[Add company-approved eligibility criteria]",
      "[Add business or income requirement]",
      "[Add security or collateral requirement]",
      "[Add banking relationship requirement]",
    ],
    documents: [
      "[Add identity and entity documents]",
      "[Add financial statement requirements]",
      "[Add bank statement requirements]",
      "[Add security documentation requirements]",
    ],
    faqs: [
      {
        q: "How is an overdraft different from a term loan?",
        a: "An overdraft gives you an approved limit to draw on as needed, while a term loan is disbursed as a lump sum with fixed instalments.",
      },
      {
        q: "Is interest charged on the whole limit?",
        a: "Interest is generally applied on the utilised amount. [Add company-approved interest application details]",
      },
      {
        q: "Is approval guaranteed?",
        a: "No. An overdraft facility is always subject to eligibility assessment and lender approval.",
      },
    ],
  },
];

export const loanTypeNames = loanProducts.map((p) => p.name);

export function getLoanProduct(slug: LoanSlug): LoanProduct {
  const product = loanProducts.find((p) => p.slug === slug);
  if (!product) throw new Error(`Unknown loan product: ${slug}`);
  return product;
}

export const whyChooseUs = [
  {
    title: "Personalized Assistance",
    detail: "Support tailored to your financial requirements.",
  },
  {
    title: "Multiple Loan Solutions",
    detail: "Explore home, personal, business loans, and overdraft facilities.",
  },
  {
    title: "Simple Application Process",
    detail: "Get guidance through the loan application journey.",
  },
  {
    title: "Customer-Focused Service",
    detail: "We aim to make the financing experience clear and convenient.",
  },
];

export const aboutPoints = [
  {
    title: "Customer-first approach",
    detail:
      "We start with your requirement, not a product pitch, and suggest options that fit your situation.",
  },
  {
    title: "Professional service",
    detail:
      "Our team helps you organise documents and understand what each step of the process involves.",
  },
  {
    title: "Transparent communication",
    detail:
      "We explain terms in plain language and share what is confirmed rather than what is assumed.",
  },
  {
    title: "Support through the process",
    detail:
      "From enquiry to application follow-up, you have a point of contact you can reach.",
  },
];
