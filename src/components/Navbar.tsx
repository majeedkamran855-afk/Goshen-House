import React from "react";
import { Link } from "react-router-dom";

export const GoshenLogo: React.FC<{
  className?: string;
  textClassName?: string;
}> = ({ className = "w-10 h-10", textClassName = "text-xl" }) => {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`relative flex items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md transition-transform hover:scale-105 ${className}`}
      >
        <svg
          viewBox="0 0 40 40"
          className="w-3/4 h-3/4 fill-current text-secondary"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* House Roof & Foundation Symbol */}
          <path
            d="M20 6L33 17H29V32H23V24H17V32H11V17H7L20 6Z"
            fill="#FAF7F2"
          />
          <path d="M20 14L25 18H23V26H17V18H15L20 14Z" fill="#D79934" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span
          className={`font-heading font-bold tracking-tight text-foreground leading-tight ${textClassName}`}
        >
          Goshen House{" "}
          <span className="text-primary font-serif italic text-base">LLC</span>
        </span>
        <span className="text-[10px] tracking-widest uppercase font-semibold text-muted-foreground">
          Stability • Structure • Growth
        </span>
      </div>
    </div>
  );
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/60 py-3"
          : "bg-background/80 backdrop-blur-sm py-4 border-b border-border/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <GoshenLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/#who-we-serve"
              className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              Who We Serve
            </a>
            <a
              href="/#what-we-provide"
              className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              What We Provide
            </a>
            <a
              href="/#income"
              className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              Guaranteed Income
            </a>
            <a
              href="/#referral"
              className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              Referral Process
            </a>
            <Link
              to="/forms"
              className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5 bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Forms & Applications
            </Link>
            <a
              href="/#contact"
              className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+1 832-762-6156"
              className="text-xs font-semibold px-3 py-2 text-foreground/70 hover:text-primary flex items-center gap-1.5 transition-colors"
            >
              <svg
                className="w-4 h-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +1 832-762-6156
            </a>
            <Link
              to="/forms"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all hover:shadow-md transform hover:-translate-y-0.5"
            >
              Submit Referral
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <a
            href="/#who-we-serve"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-foreground hover:text-primary border-b border-border/40"
          >
            Who We Serve
          </a>
          <a
            href="/#what-we-provide"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-foreground hover:text-primary border-b border-border/40"
          >
            What We Provide
          </a>
          <a
            href="/#income"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-foreground hover:text-primary border-b border-border/40"
          >
            Income Accepted
          </a>
          <a
            href="/#referral"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-foreground hover:text-primary border-b border-border/40"
          >
            Referral Process
          </a>
          <Link
            to="/forms"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-semibold text-primary border-b border-border/40 flex items-center justify-between"
          >
            <span>Forms & Applications</span>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded font-bold">
              Online
            </span>
          </Link>
          <a
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-foreground hover:text-primary"
          >
            Contact & Support
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:+1 832-762-6156"
              className="w-full text-center py-2.5 rounded-xl border border-border text-foreground font-medium flex items-center justify-center gap-2"
            >
              <svg
                className="w-4 h-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call +1 832-762-6156
            </a>
            <Link
              to="/forms"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 bg-primary text-primary-foreground font-semibold rounded-xl shadow-md"
            >
              Make a Referral Online
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
