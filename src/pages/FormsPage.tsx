import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { toast } from "sonner";
import {
  postTrackingEvent,
  buildBasePayload,
  CUSTOM_FIELD_IDS,
} from "@/lib/tracking";

export const FormsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"screening" | "resident">(
    "screening",
  );

  // Client Screening Form state
  const [screeningData, setScreeningData] = useState({
    referralType: "Self Referral",
    clientFirstName: "",
    clientLastName: "",
    clientPhone: "",
    clientEmail: "",
    dateOfBirth: "",
    gender: "Male",
    incomeType: "SSI",
    monthlyIncome: "",
    targetMoveDate: "",
    specialNeeds: "",
    referrerName: "",
    referrerAgency: "",
    referrerPhone: "",
    referrerEmail: "",
  });

  // Resident Application Form state
  const [residentData, setResidentData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    dob: "",
    ssnLast4: "",
    currentAddress: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyRelationship: "",
    incomeSource: "SSDI",
    monthlyAmount: "",
    hasParoleOfficer: "No",
    poName: "",
    poPhone: "",
    agreedToRules: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleScreeningSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    postTrackingEvent(
      buildBasePayload(
        "client-screening-form",
        "Client Screening Form",
        {
          first_name: screeningData.clientFirstName,
          last_name: screeningData.clientLastName,
          email: screeningData.clientEmail,
          phone: screeningData.clientPhone,
          date_of_birth: screeningData.dateOfBirth,
          gender: screeningData.gender,
        },
        {
          first_name: "Client First Name",
          last_name: "Client Last Name",
          email: "Client Email Address",
          phone: "Client Phone Number",
          date_of_birth: "Date of Birth",
          gender: "Gender",
        },
      ),
      {
        customFields: {
          [CUSTOM_FIELD_IDS.referralType]: {
            value: screeningData.referralType,
            label: "Who is submitting this form?",
          },
          [CUSTOM_FIELD_IDS.targetMoveDate]: {
            value: screeningData.targetMoveDate,
            label: "Target Move-in Date",
          },
          [CUSTOM_FIELD_IDS.incomeSource]: {
            value: screeningData.incomeType,
            label: "Income Source",
          },
          [CUSTOM_FIELD_IDS.monthlyIncome]: {
            value: screeningData.monthlyIncome,
            label: "Estimated Monthly Income",
          },
          [CUSTOM_FIELD_IDS.specialNeeds]: {
            value: screeningData.specialNeeds,
            label:
              "Special Needs, Medical Conditions, or Supervision Requirements",
          },
          [CUSTOM_FIELD_IDS.referrerName]: {
            value: screeningData.referrerName,
            label: "Referrer Full Name",
          },
          [CUSTOM_FIELD_IDS.referrerAgency]: {
            value: screeningData.referrerAgency,
            label: "Referrer Agency / Organization",
          },
          [CUSTOM_FIELD_IDS.referrerPhone]: {
            value: screeningData.referrerPhone,
            label: "Referrer Work Phone",
          },
          [CUSTOM_FIELD_IDS.referrerEmail]: {
            value: screeningData.referrerEmail,
            label: "Referrer Work Email",
          },
        },
      },
    );

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Client Screening Form submitted successfully!", {
        description:
          "Our intake team will review your application and respond within 1–2 business days.",
      });
      // Reset form
      setScreeningData({
        referralType: "Self Referral",
        clientFirstName: "",
        clientLastName: "",
        clientPhone: "",
        clientEmail: "",
        dateOfBirth: "",
        gender: "Male",
        incomeType: "SSI",
        monthlyIncome: "",
        targetMoveDate: "",
        specialNeeds: "",
        referrerName: "",
        referrerAgency: "",
        referrerPhone: "",
        referrerEmail: "",
      });
    }, 1000);
  };

  const handleResidentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!residentData.agreedToRules) {
      toast.error(
        "Please acknowledge and agree to community living guidelines.",
      );
      return;
    }
    setIsSubmitting(true);

    postTrackingEvent(
      buildBasePayload(
        "resident-application-form",
        "Resident Housing Application",
        {
          first_name: residentData.firstName,
          last_name: residentData.lastName,
          phone: residentData.phone,
          email: residentData.email,
          date_of_birth: residentData.dob,
        },
        {
          first_name: "First Name",
          last_name: "Last Name",
          phone: "Phone Number",
          email: "Email Address",
          date_of_birth: "Date of Birth",
        },
      ),
      {
        customFields: {
          [CUSTOM_FIELD_IDS.ssnLast4]: {
            value: residentData.ssnLast4,
            label: "Last 4 Digits of SSN",
          },
          [CUSTOM_FIELD_IDS.currentAddress]: {
            value: residentData.currentAddress,
            label: "Current Address",
          },
          [CUSTOM_FIELD_IDS.emergencyContactName]: {
            value: residentData.emergencyContactName,
            label: "Emergency Contact Name",
          },
          [CUSTOM_FIELD_IDS.emergencyContactPhone]: {
            value: residentData.emergencyContactPhone,
            label: "Emergency Contact Phone",
          },
          [CUSTOM_FIELD_IDS.emergencyRelationship]: {
            value: residentData.emergencyRelationship,
            label: "Emergency Contact Relationship",
          },
          [CUSTOM_FIELD_IDS.residentIncomeSource]: {
            value: residentData.incomeSource,
            label: "Income Source",
          },
          [CUSTOM_FIELD_IDS.residentMonthlyAmount]: {
            value: residentData.monthlyAmount,
            label: "Monthly Income Amount",
          },
          [CUSTOM_FIELD_IDS.hasParoleOfficer]: {
            value: residentData.hasParoleOfficer,
            label: "Has Parole Officer",
          },
          [CUSTOM_FIELD_IDS.poName]: {
            value: residentData.poName,
            label: "Parole Officer Name",
          },
          [CUSTOM_FIELD_IDS.poPhone]: {
            value: residentData.poPhone,
            label: "Parole Officer Phone",
          },
          [CUSTOM_FIELD_IDS.agreedToRules]: {
            value: residentData.agreedToRules ? "Yes" : "No",
            label: "Agreed to Community Rules",
          },
        },
      },
    );

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Resident Application submitted successfully!", {
        description:
          "We have received your application details. A member of our staff will reach out to schedule intake.",
      });
      setResidentData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        dob: "",
        ssnLast4: "",
        currentAddress: "",
        emergencyContactName: "",
        emergencyContactPhone: "",
        emergencyRelationship: "",
        incomeSource: "SSDI",
        monthlyAmount: "",
        hasParoleOfficer: "No",
        poName: "",
        poPhone: "",
        agreedToRules: false,
      });
    }, 1000);
  };

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
            <div className="bg-secondary p-1.5 rounded-2xl border border-border inline-flex gap-2">
              <button
                onClick={() => setActiveTab("screening")}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  activeTab === "screening"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                1. Client Screening Form (Initial Referral)
              </button>
              <button
                onClick={() => setActiveTab("resident")}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  activeTab === "resident"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                2. Resident Application (Pre-Approved)
              </button>
            </div>
          </div>

          {/* Tab 1: Client Screening Form */}
          {activeTab === "screening" && (
            <div className="bg-card rounded-3xl p-6 sm:p-10 border border-border shadow-lg space-y-8">
              <div className="border-b border-border pb-4">
                <h2 className="text-2xl font-bold text-foreground">
                  Client Screening & Referral Form
                </h2>
                <p className="text-sm text-muted-foreground">
                  Used by case managers, social workers, family members, or
                  self-referrals to check housing eligibility.
                </p>
              </div>

              <form onSubmit={handleScreeningSubmit} className="space-y-6">
                {/* Referral Type */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Who is submitting this form? *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      "Self Referral",
                      "Case Manager",
                      "Parole/Probation Officer",
                      "Family / Friend",
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() =>
                          setScreeningData({
                            ...screeningData,
                            referralType: type,
                          })
                        }
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                          screeningData.referralType === type
                            ? "bg-primary/10 border-primary text-primary"
                            : "bg-background border-border text-foreground hover:bg-secondary"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Referrer Details if not self */}
                {screeningData.referralType !== "Self Referral" && (
                  <div className="bg-secondary/40 p-4 rounded-2xl border border-border/70 space-y-4">
                    <h3 className="text-sm font-bold text-primary">
                      Referring Agent Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={screeningData.referrerName}
                          onChange={(e) =>
                            setScreeningData({
                              ...screeningData,
                              referrerName: e.target.value,
                            })
                          }
                          className="w-full bg-background border border-border rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Jane Doe, MSW"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1">
                          Agency / Organization *
                        </label>
                        <input
                          type="text"
                          required
                          value={screeningData.referrerAgency}
                          onChange={(e) =>
                            setScreeningData({
                              ...screeningData,
                              referrerAgency: e.target.value,
                            })
                          }
                          className="w-full bg-background border border-border rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="TDCJ, VA Hospital, Harris Health, etc."
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1">
                          Work Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={screeningData.referrerPhone}
                          onChange={(e) =>
                            setScreeningData({
                              ...screeningData,
                              referrerPhone: e.target.value,
                            })
                          }
                          className="w-full bg-background border border-border rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="(713) 555-0199"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={screeningData.referrerEmail}
                          onChange={(e) =>
                            setScreeningData({
                              ...screeningData,
                              referrerEmail: e.target.value,
                            })
                          }
                          className="w-full bg-background border border-border rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="agent@agency.org"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Client Basic Details */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
                    Client Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Client First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={screeningData.clientFirstName}
                        onChange={(e) =>
                          setScreeningData({
                            ...screeningData,
                            clientFirstName: e.target.value,
                          })
                        }
                        className="w-full bg-background border border-border rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Client Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={screeningData.clientLastName}
                        onChange={(e) =>
                          setScreeningData({
                            ...screeningData,
                            clientLastName: e.target.value,
                          })
                        }
                        className="w-full bg-background border border-border rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={screeningData.clientPhone}
                        onChange={(e) =>
                          setScreeningData({
                            ...screeningData,
                            clientPhone: e.target.value,
                          })
                        }
                        className="w-full bg-background border border-border rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="(713) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={screeningData.clientEmail}
                        onChange={(e) =>
                          setScreeningData({
                            ...screeningData,
                            clientEmail: e.target.value,
                          })
                        }
                        className="w-full bg-background border border-border rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="client@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        required
                        value={screeningData.dateOfBirth}
                        onChange={(e) =>
                          setScreeningData({
                            ...screeningData,
                            dateOfBirth: e.target.value,
                          })
                        }
                        className="w-full bg-background border border-border rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Target Move-in Date
                      </label>
                      <input
                        type="date"
                        value={screeningData.targetMoveDate}
                        onChange={(e) =>
                          setScreeningData({
                            ...screeningData,
                            targetMoveDate: e.target.value,
                          })
                        }
                        className="w-full bg-background border border-border rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Income Source */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
                    Income & Funding
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Income Source *
                      </label>
                      <select
                        value={screeningData.incomeType}
                        onChange={(e) =>
                          setScreeningData({
                            ...screeningData,
                            incomeType: e.target.value,
                          })
                        }
                        className="w-full bg-background border border-border rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="SSI">
                          SSI (Supplemental Security Income)
                        </option>
                        <option value="SSDI">
                          SSDI (Social Security Disability)
                        </option>
                        <option value="VA Benefits">
                          VA Benefits / Pension
                        </option>
                        <option value="Retirement">
                          Social Security Retirement
                        </option>
                        <option value="Private Disability">
                          Private Disability Benefit
                        </option>
                        <option value="Other Guaranteed">
                          Other Guaranteed Income
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Estimated Monthly Income ($) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. $943/month"
                        value={screeningData.monthlyIncome}
                        onChange={(e) =>
                          setScreeningData({
                            ...screeningData,
                            monthlyIncome: e.target.value,
                          })
                        }
                        className="w-full bg-background border border-border rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Special Needs / Supervision */}
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Special Needs, Medical Conditions, or Supervision
                    Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={screeningData.specialNeeds}
                    onChange={(e) =>
                      setScreeningData({
                        ...screeningData,
                        specialNeeds: e.target.value,
                      })
                    }
                    className="w-full bg-background border border-border rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Provide details on mobility needs, parole restrictions, medication assistance requirements, or case notes..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-4 rounded-xl shadow-lg transition-all text-base flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting Screening Form...</span>
                    ) : (
                      <>
                        <span>Submit Client Screening Form</span>
                        <svg
                          className="w-5 h-5"
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
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-muted-foreground mt-3">
                    🔒 Submissions are confidential and handled directly by
                    Goshen House LLC intake staff.
                  </p>
                </div>
              </form>
            </div>
          )}

          {/* Tab 2: Resident Application Form */}
          {activeTab === "resident" && (
            <div className="bg-card rounded-3xl p-6 sm:p-10 border border-border shadow-lg space-y-8">
              <div className="border-b border-border pb-4">
                <h2 className="text-2xl font-bold text-foreground">
                  Official Resident Housing Application
                </h2>
                <p className="text-sm text-muted-foreground">
                  Complete after pre-screening approval to secure housing
                  placement and begin move-in processing.
                </p>
              </div>

              <form onSubmit={handleResidentSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
                    Applicant Identification
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={residentData.firstName}
                        onChange={(e) =>
                          setResidentData({
                            ...residentData,
                            firstName: e.target.value,
                          })
                        }
                        className="w-full bg-background border border-border rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={residentData.lastName}
                        onChange={(e) =>
                          setResidentData({
                            ...residentData,
                            lastName: e.target.value,
                          })
                        }
                        className="w-full bg-background border border-border rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        required
                        value={residentData.dob}
                        onChange={(e) =>
                          setResidentData({
                            ...residentData,
                            dob: e.target.value,
                          })
                        }
                        className="w-full bg-background border border-border rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Last 4 Digits of SSN *
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={4}
                        placeholder="1234"
                        value={residentData.ssnLast4}
                        onChange={(e) =>
                          setResidentData({
                            ...residentData,
                            ssnLast4: e.target.value,
                          })
                        }
                        className="w-full bg-background border border-border rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={residentData.phone}
                        onChange={(e) =>
                          setResidentData({
                            ...residentData,
                            phone: e.target.value,
                          })
                        }
                        className="w-full bg-background border border-border rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="(713) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={residentData.email}
                        onChange={(e) =>
                          setResidentData({
                            ...residentData,
                            email: e.target.value,
                          })
                        }
                        className="w-full bg-background border border-border rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-secondary/40 p-4 rounded-2xl border border-border/70 space-y-4">
                  <h3 className="text-sm font-bold text-primary">
                    Emergency Contact Person
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={residentData.emergencyContactName}
                        onChange={(e) =>
                          setResidentData({
                            ...residentData,
                            emergencyContactName: e.target.value,
                          })
                        }
                        className="w-full bg-background border border-border rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={residentData.emergencyContactPhone}
                        onChange={(e) =>
                          setResidentData({
                            ...residentData,
                            emergencyContactPhone: e.target.value,
                          })
                        }
                        className="w-full bg-background border border-border rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Relationship *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Parent, Sibling, Social Worker"
                        value={residentData.emergencyRelationship}
                        onChange={(e) =>
                          setResidentData({
                            ...residentData,
                            emergencyRelationship: e.target.value,
                          })
                        }
                        className="w-full bg-background border border-border rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="p-4 bg-secondary rounded-2xl border border-border space-y-3">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agreedRules"
                      checked={residentData.agreedToRules}
                      onChange={(e) =>
                        setResidentData({
                          ...residentData,
                          agreedToRules: e.target.checked,
                        })
                      }
                      className="mt-1 w-4 h-4 text-primary rounded border-border focus:ring-primary"
                    />
                    <label
                      htmlFor="agreedRules"
                      className="text-xs text-foreground font-medium leading-relaxed"
                    >
                      I understand that Goshen House LLC is a clean, respectful,
                      alcohol & drug-free independent living community. I
                      certify that all income and background information
                      provided is accurate to the best of my knowledge.
                    </label>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-4 rounded-xl shadow-lg transition-all text-base flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting Resident Application...</span>
                    ) : (
                      <>
                        <span>Submit Resident Housing Application</span>
                        <svg
                          className="w-5 h-5"
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
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};
