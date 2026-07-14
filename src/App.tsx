/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import RevenueAuditHook from "./components/RevenueAuditHook";
import WhatIsOS from "./components/WhatIsOS";
import Library from "./components/Library";
import CaseStudy from "./components/CaseStudy";
import Compare from "./components/Compare";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Read cached theme preference
    const saved = localStorage.getItem("darkMode");
    if (saved) return saved === "true";
    return false; // Default to clean light theme as specified
  });

  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  const handleOpenBooking = (planTitle?: string) => {
    setSelectedPlan(planTitle || "");
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
    setSelectedPlan("");
  };

  return (
    <div className="relative min-h-screen bg-[#F5F2EC] dark:bg-[#141412] transition-colors-theme select-none">
      {/* Floating navigation bar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} onOpenBooking={() => handleOpenBooking("Navbar Call")} />

      {/* 1. Hero Section */}
      <Hero onOpenBooking={() => handleOpenBooking("Hero CTA")} />

      {/* 2. Trust Strip Section */}
      <Problem />

      {/* Revenue Audit Hook Section */}
      <RevenueAuditHook />

      {/* 3. The OS Slider Section */}
      <Library />

      {/* 4. How It Works Section */}
      <HowItWorks />

      {/* 5. The Flowchart Section */}
      <WhatIsOS />

      {/* 6. Results Section */}
      <CaseStudy />

      {/* 7. Comparison Section */}
      <Compare />

      {/* 8. Pricing Section */}
      <Pricing onOpenBooking={handleOpenBooking} />

      {/* 9. Final CTA Section */}
      <CTA onOpenBooking={() => handleOpenBooking("Direct Audit Request")} />

      {/* Footer bar */}
      <Footer onOpenBooking={() => handleOpenBooking("Footer Action Request")} />

      {/* Modal Lead Capture Flow */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        initialPlan={selectedPlan}
      />
    </div>
  );
}

