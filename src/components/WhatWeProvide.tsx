import React from "react";

export const WhatWeProvide: React.FC = () => {
  const amenities = [
    {
      title: "All Utilities Paid",
      desc: "Electric, water, gas & high-speed Wi-Fi included",
      icon: "⚡",
    },
    {
      title: "Fully Furnished Rooms",
      desc: "Comfortable bed, linens, storage & seating",
      icon: "🛏️",
    },
    {
      title: "Toiletries & Supplies",
      desc: "Basic personal care & hygiene items provided",
      icon: "🧴",
    },
    {
      title: "Regular Pest Control",
      desc: "Professional pest maintenance services",
      icon: "🛡️",
    },
    {
      title: "Safe Structured Environment",
      desc: "Drug-free, respectful, community living rules",
      icon: "🏡",
    },
    {
      title: "ADL Assistance Partner",
      desc: "Support with activities of daily living via agency links",
      icon: "🤝",
    },
    {
      title: "Mental Health Referrals",
      desc: "Direct connection to behavioral health counselors",
      icon: "🧠",
    },
    {
      title: "Case Management Links",
      desc: "Navigation for medical, social & community resources",
      icon: "📊",
    },
  ];

  return (
    <section id="what-we-provide" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            What's Included
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            More Than a Roof — A Foundation to Grow From
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Every resident receives the stability, clean amenities, and ongoing
            support they need to move forward with peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Amenities Grid */}
          <div className="lg:col-span-8 bg-card rounded-3xl p-6 sm:p-10 border border-border shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="text-primary font-serif">Comprehensive</span>{" "}
                Living Amenities & Support
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {amenities.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-secondary/50 border border-border/60 hover:bg-secondary transition-colors flex items-start gap-3"
                  >
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary text-primary-foreground rounded-2xl space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-300">
                Extended Support via Partners
              </span>
              <h4 className="text-lg font-bold">
                More than a place to stay... We offer a place to grow.
              </h4>
              <p className="text-xs text-primary-foreground/90 leading-relaxed">
                Our goal is to help you establish stability today so you can
                build the life you deserve tomorrow. You don't have to do it
                alone — we're here to walk with you.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="bg-white/10 px-2.5 py-1 rounded-full text-xs font-semibold">
                  Mental Health Services
                </span>
                <span className="bg-white/10 px-2.5 py-1 rounded-full text-xs font-semibold">
                  Medical Referrals
                </span>
                <span className="bg-white/10 px-2.5 py-1 rounded-full text-xs font-semibold">
                  Case Management
                </span>
                <span className="bg-white/10 px-2.5 py-1 rounded-full text-xs font-semibold">
                  Home Care • ADLs
                </span>
              </div>
            </div>
          </div>

          {/* Pricing Highlight Card */}
          <div className="lg:col-span-4 bg-gradient-to-b from-primary to-primary/95 text-primary-foreground rounded-3xl p-8 flex flex-col justify-between items-center text-center shadow-xl border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl -mr-10 -mt-10"></div>

            <div className="space-y-4 relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto text-3xl shadow-inner border border-white/20">
                💵
              </div>
              <h3 className="text-2xl font-bold">
                Budget-Friendly, All-Inclusive
              </h3>
              <p className="text-xs text-primary-foreground/80 leading-relaxed">
                Transparent, affordable pricing with zero surprise charges. All
                utilities, amenities, and community maintenance included in one
                flat rate.
              </p>
            </div>

            <div className="w-full bg-background text-foreground p-6 rounded-2xl shadow-lg my-6 space-y-1 relative z-10 border border-border">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block">
                Starting At
              </span>
              <p className="text-5xl font-extrabold text-primary tracking-tight">
                $800
              </p>
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block">
                / Month • All Included
              </span>
            </div>

            <div className="space-y-2 text-xs text-primary-foreground/90 font-medium relative z-10">
              <p className="flex items-center justify-center gap-1.5">
                <svg
                  className="w-4 h-4 text-emerald-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Guaranteed Income Accepted
              </p>
              <p className="flex items-center justify-center gap-1.5">
                <svg
                  className="w-4 h-4 text-emerald-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                No Hidden Maintenance Fees
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
