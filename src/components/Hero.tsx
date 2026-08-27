import React from "react";
import { Link } from "react-router-dom";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-secondary/40 via-background to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-xs font-bold text-primary tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span>Stability. Structure. A New Beginning.</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.15]">
              Goshen House{" "}
              <span className="text-primary italic font-serif font-normal">
                LLC
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl font-normal">
              Safe, stable, and supportive independent living in{" "}
              <strong className="text-foreground font-semibold">
                Houston, Texas
              </strong>
              . Dedicated to empowering reentry populations, veterans, seniors,
              and adults with disabilities through dignified transitional
              housing.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-bold tracking-widest text-primary/80 uppercase">
              <span className="bg-secondary px-3 py-1 rounded-md border border-border">
                REENTRY
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="bg-secondary px-3 py-1 rounded-md border border-border">
                VETERANS
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="bg-secondary px-3 py-1 rounded-md border border-border">
                DISABILITIES
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="bg-secondary px-3 py-1 rounded-md border border-border">
                ELDERLY
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="bg-secondary px-3 py-1 rounded-md border border-border text-foreground">
                HOUSTON, TX
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                to="/forms"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-xl text-center shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <span>Make a Referral</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              <a
                href="#referral"
                className="bg-card hover:bg-secondary border border-border text-foreground font-bold px-7 py-4 rounded-xl text-center transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Learn the Process</span>
                <svg
                  className="w-4 h-4 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>

            {/* Pricing badge pill */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2.5 bg-emerald-50 border border-emerald-200 text-emerald-900 px-4 py-2.5 rounded-xl shadow-xs">
                <svg
                  className="w-5 h-5 text-emerald-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-semibold">
                  Starting at{" "}
                  <strong className="text-emerald-950 font-bold">
                    $800/month
                  </strong>{" "}
                  • All Utilities Included
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-medium bg-card px-3 py-2 rounded-lg border border-border">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                Accepting SSI, SSDI & VA Benefits
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-card bg-card">
              <img
                src="https://vibe.filesafe.space/1787776747649822912/assets/1694151c-7586-47db-9ede-f083ad18bd09.png"
                alt="Goshen House Living Room Interior"
                className="w-full h-[420px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-accent"></span>
                    <span className="text-xs uppercase font-bold tracking-wider text-amber-200">
                      Houston Supportive Housing
                    </span>
                  </div>
                  <p className="text-sm font-medium text-white/90">
                    "More than a place to stay... We offer a foundation to grow
                    from with safety, dignity, and real support."
                  </p>
                </div>
              </div>
            </div>

            {/* Float Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-xl border border-border hidden sm:flex items-center gap-4 max-w-xs">
              <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">
                24/7
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">
                  Safe & Structured
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Clean furnished rooms with zero hidden fees
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
