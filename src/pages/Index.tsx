import React from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { WhoWeServe } from "../components/WhoWeServe";
import { WhatWeProvide } from "../components/WhatWeProvide";
import { IncomeEligibility } from "../components/IncomeEligibility";
import { ReferralProcess } from "../components/ReferralProcess";
import { ContactSection } from "../components/ContactSection";
import { FAQSection } from "../components/FAQSection";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <WhoWeServe />
        <WhatWeProvide />
        <IncomeEligibility />
        <ReferralProcess />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
