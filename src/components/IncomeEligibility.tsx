import React from "react";

export const IncomeEligibility: React.FC = () => {
  const incomeSources = [
    { title: "SSI", label: "Supplemental Security Income", icon: "🏛️" },
    {
      title: "SSDI",
      label: "Social Security Disability Insurance",
      icon: "🏢",
    },
    {
      title: "Veterans Benefits",
      label: "VA Compensation & Pension",
      icon: "🎖️",
    },
    {
      title: "Retirement Income",
      label: "Social Security Retirement",
      icon: "📅",
    },
    {
      title: "Disability Income",
      label: "Private Disability & Other Benefits",
      icon: "♿",
    },
    {
      title: "Other Guaranteed",
      label: "Pensions, Annuities, Trusts & More",
      icon: "📈",
    },
  ];

  return (
    <section
      id="income"
      className="py-20 bg-secondary/40 border-y border-border/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            Eligibility
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            We Accept Guaranteed Income
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Residents must have verifiable, consistent monthly income. Below are
            the primary income sources accepted at Goshen House.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {incomeSources.map((item, idx) => (
            <div
              key={idx}
              className="bg-card p-6 rounded-2xl border-t-4 border-primary border-x border-b border-border shadow-xs hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground italic font-medium bg-card inline-block px-6 py-2.5 rounded-full border border-border">
            * We accept verifiable, consistent, and guaranteed income sources
            only to maintain financial stability for all residents.
          </p>
        </div>
      </div>
    </section>
  );
};
