import React from "react";
import { Link } from "react-router-dom";

interface ServiceCard {
  title: string;
  description: string;
  badge: string;
  icon: string;
  image: string;
  benefits: string[];
}

const services: ServiceCard[] = [
  {
    title: "Reentry",
    description:
      "Individuals returning from incarceration seeking a structured environment to rebuild their lives, establish stability, and achieve long-term independence.",
    badge: "Structure & Growth",
    icon: "🏠",
    image:
      "https://vibe.filesafe.space/1787776747649822912/assets/be9e7f6f-c75d-463c-bcf9-8ce9f7f85c7c.png",
    benefits: [
      "Parole & Probation Compliant",
      "Accountability & Structure",
      "Case Management Links",
    ],
  },
  {
    title: "Veterans",
    description:
      "Those who served our country and deserve stable, dignified housing as they transition back to civilian life with honor and security.",
    badge: "Honoring Service",
    icon: "🎖️",
    image:
      "https://vibe.filesafe.space/1787776747649822912/assets/42a470ab-9ac5-4b5c-b1cc-78610d719877.png",
    benefits: [
      "VA Pension & Comp Accepted",
      "Community Support",
      "Furnished Private Rooms",
    ],
  },
  {
    title: "Adults with Disabilities",
    description:
      "Individuals receiving SSI, SSDI, or private disability benefits who need an accessible, respectful, and supportive living environment.",
    badge: "Accessible Living",
    icon: "♿",
    image:
      "https://vibe.filesafe.space/1787776747649822912/assets/1694151c-7586-47db-9ede-f083ad18bd09.png",
    benefits: [
      "SSI / SSDI Direct Accept",
      "Home Care Partner ADL Support",
      "Utilities & WiFi Included",
    ],
  },
  {
    title: "Elderly Adults",
    description:
      "Seniors seeking a safe, furnished, community-centered home with access to daily living assistance and peace of mind.",
    badge: "Dignified Care",
    icon: "👴",
    image:
      "https://vibe.filesafe.space/1787776747649822912/assets/42a470ab-9ac5-4b5c-b1cc-78610d719877.png",
    benefits: [
      "All Utilities Paid",
      "Pest Control & Maintenance",
      "Quiet Respectful Home",
    ],
  },
  {
    title: "Hospital Referrals",
    description:
      "Patients transitioning from medical or behavioral health facilities who need stable housing for continued recovery and recuperation.",
    badge: "Medical Transition",
    icon: "🏥",
    image:
      "https://vibe.filesafe.space/1787776747649822912/assets/1694151c-7586-47db-9ede-f083ad18bd09.png",
    benefits: [
      "Quick Discharge Placement",
      "Clean Recovering Space",
      "Medical Referral Links",
    ],
  },
  {
    title: "Case Manager Partners",
    description:
      "We partner closely with social workers, parole officers, VA coordinators, and discharge planners for seamless, trusted client placements.",
    badge: "Trusted Referral",
    icon: "📋",
    image:
      "https://vibe.filesafe.space/1787776747649822912/assets/be9e7f6f-c75d-463c-bcf9-8ce9f7f85c7c.png",
    benefits: [
      "1-2 Business Day Turnaround",
      "Direct Screening Form",
      "Dedicated Partner Line",
    ],
  },
];

export const WhoWeServe: React.FC = () => {
  return (
    <section id="who-we-serve" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            Who We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Providing Dignified Support for Diverse Paths
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Every individual deserves a safe, clean, and respectful environment
            to call home. Here is who we support in the Houston community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl overflow-hidden border border-border/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-primary shadow-sm border border-border">
                  {item.badge}
                </div>
                <div className="absolute bottom-3 right-3 text-2xl bg-card/90 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                  {item.icon}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60">
                  <div className="space-y-1.5">
                    {item.benefits.map((b, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs font-medium text-foreground/80"
                      >
                        <svg
                          className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner inside Who We Serve */}
        <div className="mt-14 bg-primary text-primary-foreground rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-bold">
              Have a client or family member in need?
            </h4>
            <p className="text-sm text-primary-foreground/80">
              Submit our quick Client Screening Form online in under 3 minutes.
            </p>
          </div>
          <Link
            to="/forms"
            className="bg-accent text-accent-foreground font-bold px-6 py-3 rounded-xl hover:bg-accent/90 transition-all text-sm flex-shrink-0 shadow-md"
          >
            Start Referral Form
          </Link>
        </div>
      </div>
    </section>
  );
};
