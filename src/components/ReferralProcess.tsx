import React from "react";
import { Link } from "react-router-dom";

export const ReferralProcess: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Contact Us & Pre-Screen",
      desc: "Call, text, email, or fill out our online Client Screening Form to submit basic details.",
    },
    {
      num: "02",
      title: "Application & Income Proof",
      desc: "If pre-approved, provide verifiable income proof (SSI/SSDI award letter, VA statement, etc.).",
    },
    {
      num: "03",
      title: "Review & Fast Decision",
      desc: "Our intake team reviews submissions within 1–2 business days and notifies you of approval status.",
    },
    {
      num: "04",
      title: "Move-In Coordination",
      desc: "Sign agreement, complete orientation, and coordinate move-in details for a smooth transition.",
    },
  ];

  const partners = [
    { name: "Parole & Probation Officers (TDCJ)", icon: "🔑" },
    { name: "VA Coordinators & Veterans Services", icon: "🎖️" },
    { name: "Hospital Discharge Planners", icon: "🏥" },
    { name: "Mental & Behavioral Health Programs", icon: "🧠" },
    { name: "Social Workers & Case Managers", icon: "📇" },
    { name: "Home Care & ADL Support Agencies", icon: "🤝" },
  ];

  return (
    <section id="referral" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Process Steps */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                For Partners & Providers
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mt-3 mb-4">
                Simple. Fast. Supportive Referral Process.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We make it seamless for case managers, parole officers, VA
                coordinators, and hospital discharge planners to refer clients
                into stable housing quickly.
              </p>
            </div>

            <div className="space-y-6 relative border-l-2 border-primary/20 pl-6 ml-3">
              {steps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[37px] top-0 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center shadow-md">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                      <span>{step.title}</span>
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/forms"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-7 py-3.5 rounded-xl shadow-md transition-all"
              >
                <span>Submit Client Screening Form</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: Referral Partners Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card p-6 sm:p-8 rounded-3xl border border-border shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Current Referral Partners
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                We maintain ongoing relationships with case workers and agency
                staff across Greater Houston.
              </p>

              <ul className="space-y-3">
                {partners.map((p, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl border border-border/60"
                  >
                    <span className="text-xl">{p.icon}</span>
                    <span className="text-sm font-semibold text-foreground">
                      {p.name}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-xl text-xs text-amber-900 dark:text-amber-200">
                <strong>Note on TDCJ / Parole clients:</strong> We accept
                clients on parole or with supervision restrictions in compliance
                with state regulations. Contact us directly for current
                capacity.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
