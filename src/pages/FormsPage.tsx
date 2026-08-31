import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

type FormKey = "screening" | "contact" | "referral" | "tour";

interface FormTabConfig {
  key: FormKey;
  tabLabel: string;
  heading: string;
  subheading: string;
  formId: string;
  formName: string;
  height: number;
}

const FORM_TABS: FormTabConfig[] = [
  {
    key: "screening",
    tabLabel: "1. Client Intake Form",
    heading: "Client Screening & Intake Form",
    subheading:
      "Used by case managers, social workers, family members, or self-referrals to check housing eligibility.",
    formId: "RHh8suppt8tSZLoxjTAv",
    formName: "Goshen House Client Intake Form",
    height: 7348,
  },
  {
    key: "contact",
    tabLabel: "2. Contact Us",
    heading: "Contact Us",
    subheading: "Send us a general inquiry and our team will get back to you.",
    formId: "pe33yfzEy4Pj4uqKmdxy",
    formName: "Goshen House Contact Us Form",
    height: 1021,
  },
  {
    key: "referral",
    tabLabel: "3. Referral Partner",
    heading: "Referral Partner Form",
    subheading:
      "For agencies, case managers, and partner organizations submitting a referral.",
    formId: "mYdsPHqK0SovD9ShL5C3",
    formName: "Referral Partner Form",
    height: 1882,
  },
  {
    key: "tour",
    tabLabel: "4. Schedule a Tour",
    heading: "Schedule a Tour",
    subheading: "Book a time to tour Goshen House in person.",
    formId: "wWfBLR3v47vgkFyAmBZK",
    formName: "Schedule a Tour Form",
    height: 1227,
  },
];

export const FormsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FormKey>("screening");

  const activeConfig = FORM_TABS.find((tab) => tab.key === activeTab)!;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              Goshen House Portals
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Housing Forms & Intake Applications
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg">
              Submit client inquiries, case manager referrals, or resident
              housing applications securely online.
            </p>
          </div>

          {/* Form Tabs */}
          <div className="flex justify-center mb-10">
            <div className="bg-secondary p-1.5 rounded-2xl border border-border inline-flex flex-wrap gap-2">
              {FORM_TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                    activeTab === tab.key
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {tab.tabLabel}
                </button>
              ))}
            </div>
          </div>

          {/* Active Form Panel */}
          <div className="bg-card rounded-3xl p-6 sm:p-10 border border-border shadow-lg space-y-8">
            <div className="border-b border-border pb-4">
              <h2 className="text-2xl font-bold text-foreground">
                {activeConfig.heading}
              </h2>
              <p className="text-sm text-muted-foreground">
                {activeConfig.subheading}
              </p>
            </div>

            <div
              style={{ width: "100%", height: `${activeConfig.height}px` }}
            >
              <iframe
                key={activeConfig.formId}
                src={`https://link.poweredbyhive.net/widget/form/${activeConfig.formId}`}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "8px",
                }}
                id={`inline-${activeConfig.formId}`}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name={activeConfig.formName}
                data-height={activeConfig.height}
                data-layout-iframe-id={`inline-${activeConfig.formId}`}
                data-form-id={activeConfig.formId}
                data-cookie-consent="true"
                data-cookie-consent-provider="auto"
                title={activeConfig.formName}
              />
            </div>

            <p className="text-center text-xs text-muted-foreground">
              🔒 Submissions are confidential and handled directly by Goshen
              House LLC intake staff.
            </p>
          </div>
        </div>
      </main>

      <Footer />

      {/* HIVE form embed script — loaded once for all embedded forms */}
      <script src="https://link.poweredbyhive.net/js/form_embed.js"></script>
    </div>
  );
};
