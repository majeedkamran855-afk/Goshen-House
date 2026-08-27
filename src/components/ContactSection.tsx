import React, { useState } from "react";
import { toast } from "sonner";
import { postTrackingEvent, buildBasePayload } from "@/lib/tracking";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    postTrackingEvent(
      buildBasePayload(
        "contact-form",
        "Contact Form",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          calendar_notes: formData.message,
        },
        {
          first_name: "First Name",
          last_name: "Last Name",
          email: "Email Address",
          phone: "Phone Number",
          calendar_notes: "Message / Housing Inquiry",
        },
      ),
    );

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully!", {
        description:
          "Thank you for reaching out to Goshen House LLC. We will get back to you shortly.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                Get in Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mt-3 mb-4">
                Contact Goshen House LLC
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Whether you are a potential resident, family member, case
                manager, or referral partner, we are here to answer your
                questions and assist with placement.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:7136359279"
                className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/80 shadow-xs hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  📞
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Phone Number
                  </p>
                  <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    (713) 635-9279
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@goshenhousetx.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/80 shadow-xs hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  ✉️
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Email Address
                  </p>
                  <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    info@goshenhousetx.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/80 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Location & Service Area
                  </p>
                  <p className="text-base font-bold text-foreground">
                    Goshen House LLC • Houston, Texas
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-primary text-primary-foreground rounded-2xl text-xs space-y-1">
              <p className="font-bold text-amber-300 uppercase tracking-wider">
                Fast Turnaround Guarantee
              </p>
              <p className="text-primary-foreground/90">
                All phone inquiries and web forms are answered within 1–2
                business days by our dedicated Houston intake coordinators.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-lg space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs text-muted-foreground">
                  Fill out the message form below to inquire about supportive
                  housing or referral availability.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="(713) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Message / Housing Inquiry *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="How can we assist you or your client with housing?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3.5 rounded-xl shadow-md transition-all text-sm flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : "Submit Form"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
