import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category: "Pricing" | "Eligibility" | "Living" | "Referrals";
}

const faqs: FAQItem[] = [
  {
    category: "Pricing",
    question: "What is included in the $800/month rate?",
    answer:
      "Our flat rate includes fully furnished private/shared rooms, all utilities (electricity, water, gas, high-speed Wi-Fi internet), essential hygiene toiletries, cleaning supplies, pest control, and access to home care ADL assistance links.",
  },
  {
    category: "Pricing",
    question: "Are there any hidden fees or security deposits?",
    answer:
      "No. We pride ourselves on transparent, predictable pricing. There are zero surprise maintenance fees or hidden electric bills.",
  },
  {
    category: "Eligibility",
    question: "What income sources do you accept?",
    answer:
      "We accept guaranteed and verifiable income including Supplemental Security Income (SSI), Social Security Disability Insurance (SSDI), VA Compensation & Pension, Social Security Retirement, Private Disability benefits, pensions, and annuities.",
  },
  {
    category: "Eligibility",
    question:
      "Do you accept individuals returning from incarceration (reentry)?",
    answer:
      "Yes! Goshen House provides a structured, supportive environment for individuals returning from incarceration seeking to rebuild their lives. We coordinate directly with parole and probation officers (TDCJ) where applicable.",
  },
  {
    category: "Living",
    question: "What rules and expectations exist for residents?",
    answer:
      "Goshen House maintains a clean, drug-free, and respectful community environment. Residents are expected to respect fellow housemates, observe quiet hours, and participate in keeping common areas tidy.",
  },
  {
    category: "Referrals",
    question: "How fast can a case manager place a client?",
    answer:
      "Our screening and review process typically takes 1 to 2 business days upon receiving completed income verification and client intake information.",
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Clear answers for residents, family members, social workers, and
            referral agencies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-card rounded-2xl border border-border overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-foreground hover:text-primary transition-colors focus:outline-none"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <span
                    className={`w-8 h-8 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-primary text-primary-foreground" : ""}`}
                  >
                    ↓
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border/40">
                    <p>{faq.answer}</p>
                    <span className="inline-block mt-3 text-[11px] font-bold text-primary uppercase tracking-wider bg-primary/10 px-2.5 py-0.5 rounded">
                      Category: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
