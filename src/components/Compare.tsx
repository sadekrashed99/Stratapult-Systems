import React, { useEffect } from "react";
import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Compare() {
  useEffect(() => {
    // Fade in comparison rows on scroll trigger
    gsap.fromTo(
      ".compare-row",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#comparison-table",
          start: "top 80%",
        },
      }
    );
  }, []);

  const headers = [
    { label: "Stratapult", isFeatured: true },
    { label: "Traditional Agency", isFeatured: false },
    { label: "Freelancer", isFeatured: false },
    { label: "DIY Tools", isFeatured: false },
  ];

  const rows = [
    {
      criteria: "Timeline to live",
      stratapult: { status: "good", text: "7–14 Days" },
      agency: { status: "bad", text: "3–6 Months" },
      freelancer: { status: "warn", text: "4–10 Weeks" },
      diy: { status: "warn", text: "2–6 Weeks" },
    },
    {
      criteria: "Total investment",
      stratapult: { status: "good", text: "$2K–$3.5K + perf." },
      agency: { status: "bad", text: "$15K–$50K" },
      freelancer: { status: "warn", text: "$3K–$8K" },
      diy: { status: "warn", text: "$200–$800 + time" },
    },
    {
      criteria: "Trade-specific build",
      stratapult: { status: "good", text: "Purpose-built" },
      agency: { status: "bad", text: "Generic template adapt" },
      freelancer: { status: "bad", text: "Generic template adapt" },
      diy: { status: "bad", text: "Off-the-shelf template" },
    },
    {
      criteria: "Conversion strategy",
      stratapult: { status: "good", text: "Full CRO included" },
      agency: { status: "warn", text: "Design-first, CRO extra" },
      freelancer: { status: "bad", text: "Rarely included" },
      diy: { status: "bad", text: "Not included" },
    },
    {
      criteria: "CRM & automation",
      stratapult: { status: "good", text: "Full integration" },
      agency: { status: "warn", text: "Extra cost" },
      freelancer: { status: "warn", text: "Extra cost" },
      diy: { status: "bad", text: "Not included" },
    },
    {
      criteria: "Performance guarantee",
      stratapult: { status: "good", text: "Pay-per-job option" },
      agency: { status: "bad", text: "Fixed fee regardless" },
      freelancer: { status: "bad", text: "Fixed fee regardless" },
      diy: { status: "bad", text: "No guarantee" },
    },
    {
      criteria: "Ongoing optimisation",
      stratapult: { status: "good", text: "Monthly, data-driven" },
      agency: { status: "bad", text: "Separate retainer" },
      freelancer: { status: "bad", text: "Not included" },
      diy: { status: "bad", text: "Do it yourself" },
    },
    {
      criteria: "Google Ads-ready",
      stratapult: { status: "good", text: "Built for Ads Day 1" },
      agency: { status: "warn", text: "Sometimes" },
      freelancer: { status: "warn", text: "Variable" },
      diy: { status: "bad", text: "Not optimised" },
    },
  ];

  const renderIcon = (status: "good" | "bad" | "warn") => {
    switch (status) {
      case "good":
        return <CheckCircle2 size={16} className="text-[#E8622A] shrink-0" />;
      case "bad":
        return <XCircle size={16} className="text-neutral-300 dark:text-neutral-700 shrink-0" />;
      case "warn":
        return <AlertTriangle size={16} className="text-[#C9A96E] shrink-0" />;
    }
  };

  return (
    <section
      id="compare"
      className="py-20 lg:py-32 bg-white dark:bg-[#111110] text-left transition-colors-theme select-none border-b border-[#1C1C1A]/10"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-[#1A9080] text-[12px] font-sans font-bold uppercase tracking-[0.15em] block mb-3">
            THE COMPARISON
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-[44px] leading-tight tracking-tight text-[#1C1C1A] dark:text-white">
            Not all digital solutions are equal.
          </h2>
          <p className="font-sans text-[#1C1C1A]/60 dark:text-[#F5F2EC]/60 text-sm md:text-base leading-relaxed mt-2.5">
            See exactly how Stratapult stacks up against every other option.
          </p>
        </div>

        {/* Swipe Table Indicator for Mobile */}
        <div className="lg:hidden mt-10 text-right">
          <span className="text-xs font-sans font-medium text-neutral-400 animate-pulse bg-neutral-100 dark:bg-neutral-900 px-3 py-1.5 rounded-full inline-block">
            Swipe table horizontally &rarr;
          </span>
        </div>

        {/* Table structure */}
        <div
          id="comparison-table"
          className="relative max-w-[1000px] mx-auto mt-6 lg:mt-12 overflow-x-auto rounded-[20px] border border-[#EDE9E0] dark:border-[#2E2E2C] shadow-[0_8px_48px_rgba(0,0,0,0.03)] bg-white dark:bg-[#141412]"
        >
          <table className="w-full border-collapse min-w-[800px] text-left">
            <thead>
              <tr className="border-b border-[#EDE9E0] dark:border-[#2E2E2C]">
                <th className="w-[24%] bg-white dark:bg-[#141412] p-5 font-sans font-bold text-[13px] text-neutral-900 dark:text-white uppercase tracking-wider">
                  Features
                </th>
                
                {/* Stratapult Column (Featured) */}
                <th className="bg-[#E8622A] text-white p-5 text-center relative w-[19%]">
                  <span className="font-serif font-bold text-[15px] tracking-wide block uppercase">
                    Stratapult
                  </span>
                  <span className="inline-block mt-1 bg-white/20 text-white text-[9px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-full select-none">
                    ★ Recommended
                  </span>
                </th>

                <th className="bg-[#FAFAF8] dark:bg-[#1C1C1A] text-neutral-800 dark:text-neutral-200 p-5 text-center font-sans font-medium text-[13px] uppercase tracking-wider w-[19%]">
                  Traditional Agency
                </th>
                
                <th className="bg-[#FAFAF8] dark:bg-[#1C1C1A] text-neutral-800 dark:text-neutral-200 p-5 text-center font-sans font-medium text-[13px] uppercase tracking-wider w-[19%]">
                  Freelancer
                </th>
                
                <th className="bg-[#FAFAF8] dark:bg-[#1C1C1A] text-neutral-800 dark:text-neutral-200 p-5 text-center font-sans font-medium text-[13px] uppercase tracking-wider w-[19%]">
                  DIY Tools
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="compare-row border-b border-[#F5F2EC] dark:border-[#2E2E2C] last:border-0 hover:bg-[#E8622A]/[0.02] dark:hover:bg-[#E8622A]/[0.02] transition-colors duration-200"
                >
                  {/* Criteria Label */}
                  <td className="p-4 px-5 font-sans font-medium text-[14px] text-neutral-800 dark:text-neutral-200">
                    {row.criteria}
                  </td>

                  {/* Stratapult Value (Highlighted) */}
                  <td className="p-4 px-5 bg-[#E8622A]/[0.04] text-center font-sans text-[13px] text-neutral-900 dark:text-neutral-100">
                    <div className="flex items-center justify-center gap-2 font-bold text-[#E8622A]">
                      {renderIcon(row.stratapult.status as any)}
                      <span>{row.stratapult.text}</span>
                    </div>
                  </td>

                  {/* Agency Value */}
                  <td className="p-4 px-5 text-center font-sans text-[13px] text-neutral-600 dark:text-neutral-400">
                    <div className="flex items-center justify-center gap-2">
                      {renderIcon(row.agency.status as any)}
                      <span>{row.agency.text}</span>
                    </div>
                  </td>

                  {/* Freelancer Value */}
                  <td className="p-4 px-5 text-center font-sans text-[13px] text-neutral-600 dark:text-neutral-400">
                    <div className="flex items-center justify-center gap-2">
                      {renderIcon(row.freelancer.status as any)}
                      <span>{row.freelancer.text}</span>
                    </div>
                  </td>

                  {/* DIY Value */}
                  <td className="p-4 px-5 text-center font-sans text-[13px] text-neutral-600 dark:text-neutral-400">
                    <div className="flex items-center justify-center gap-2">
                      {renderIcon(row.diy.status as any)}
                      <span>{row.diy.text}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
