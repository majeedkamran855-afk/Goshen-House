import React from "react";
import { Link } from "react-router-dom";
import { GoshenLogo } from "./Navbar";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-100 pt-16 pb-12 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/80">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-block">
              <GoshenLogo
                className="w-10 h-10"
                textClassName="text-xl text-white"
              />
            </Link>

            <p className="text-sm text-emerald-200/80 leading-relaxed max-w-sm">
              Providing safe, stable, and supportive independent living in
              Houston, Texas. Dignified transitional housing for reentry,
              veterans, elderly, and adults with disabilities.
            </p>

            <div className="space-y-1.5 text-xs text-emerald-300 pt-2 font-medium">
              <p className="flex items-center gap-2">
                <span>📍</span> <span>Houston, Texas</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>{" "}
                <a
                  href="tel:+1 832-762-6156"
                  className="hover:text-white transition-colors"
                >
                  +1 832-762-6156
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span>{" "}
                <a
                  href="mailto:info@goshenhousetx.com"
                  className="hover:text-white transition-colors"
                >
                  info@goshenhousetx.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Programs
              </h4>
              <ul className="space-y-2 text-xs text-emerald-200/80">
                <li>
                  <a
                    href="/#who-we-serve"
                    className="hover:text-white transition-colors"
                  >
                    Reentry Housing
                  </a>
                </li>
                <li>
                  <a
                    href="/#who-we-serve"
                    className="hover:text-white transition-colors"
                  >
                    Veteran Housing
                  </a>
                </li>
                <li>
                  <a
                    href="/#who-we-serve"
                    className="hover:text-white transition-colors"
                  >
                    Disability Independent Living
                  </a>
                </li>
                <li>
                  <a
                    href="/#who-we-serve"
                    className="hover:text-white transition-colors"
                  >
                    Senior Supportive Housing
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Resources
              </h4>
              <ul className="space-y-2 text-xs text-emerald-200/80">
                <li>
                  <a
                    href="/#what-we-provide"
                    className="hover:text-white transition-colors"
                  >
                    What's Included
                  </a>
                </li>
                <li>
                  <a
                    href="/#income"
                    className="hover:text-white transition-colors"
                  >
                    Guaranteed Income
                  </a>
                </li>
                <li>
                  <a
                    href="/#referral"
                    className="hover:text-white transition-colors"
                  >
                    Referral Process
                  </a>
                </li>
                <li>
                  <Link
                    to="/forms"
                    className="hover:text-white transition-colors text-amber-300 font-bold"
                  >
                    Online Forms & Applications
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3 col-span-2 sm:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Legal & Contact
              </h4>
              <ul className="space-y-2 text-xs text-emerald-200/80">
                <li>
                  <a
                    href="/#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Intake
                  </a>
                </li>
                <li>
                  <span className="text-emerald-400/60">
                    Houston, TX Housing
                  </span>
                </li>
                <li>
                  <span className="text-emerald-400/60">TDCJ Compliant</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-400/70 gap-4">
          <p>
            © {new Date().getFullYear()} Goshen House LLC. All rights reserved.
            Houston, TX.
          </p>
          <p className="flex items-center gap-1">
            <span>Stability • Structure • A New Beginning</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
