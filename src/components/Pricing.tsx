import React from "react";
import { CheckCircle } from "lucide-react";
import MagneticButton from "./MagneticButton";

interface PricingProps {
  onOpenBooking: (planTitle?: string) => void;
}

export default function Pricing({ onOpenBooking }: PricingProps) {
  const plan1Features = [
    "Complete OS (copy + design + dev)",
    "CRM integration & automation",
    "Google Ads-ready architecture",
    "Mobile-optimised & speed-tuned",
    "30-day post-launch support",
  ];

  const plan2Features = [
    "Everything in OS Setup",
    "Pay per real booked job only",
    "You control your ad spend",
    "Monthly optimisation included",
    "Scales with your growth",
  ];

  return (
    <section
      id="pricing"
      className="py-20 lg:py-32 bg-white dark:bg-[#111110] text-left transition-colors-theme border-b border-[#1C1C1A]/10 select-none"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <span className="text-[#1A9080] text-[12px] font-sans font-bold uppercase tracking-[0.15em] block mb-3">
            INVESTMENT & PRICING
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-[44px] leading-tight tracking-tight text-[#1C1C1A] dark:text-white">
            Pricing that pays for itself.
          </h2>
          <p className="font-sans text-[#1C1C1A]/60 dark:text-[#F5F2EC]/60 text-sm md:text-base mt-3 max-w-[550px] mx-auto leading-relaxed">
            We win when you win. That's not a line &mdash; it's how the fee structure works.
          </p>
        </div>

        {/* Two pricing cards side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto items-stretch">
          
          {/* CARD 1 — OS Setup */}
          <div className="bg-[#F5F2EC] dark:bg-[#1C1C1A] rounded-[20px] border border-[#EDE9E0] dark:border-[#2E2E2C] p-10 flex flex-col justify-between transition-colors-theme shadow-sm">
            <div>
              <h3 className="font-serif font-bold text-2xl text-[#1C1C1A] dark:text-[#F5F2EC]">
                OS Setup
              </h3>
              
              <div className="mt-4 flex items-baseline">
                <span className="font-serif font-bold text-3xl md:text-5xl text-[#1C1C1A] dark:text-[#F5F2EC] tracking-tight">
                  $2,000 – $3,500
                </span>
              </div>
              <span className="font-sans text-xs uppercase tracking-wider text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 block mt-1.5">
                One-time Setup Fee
              </span>

              <hr className="border-[#EDE9E0] dark:border-[#2E2E2C] my-7" />

              <ul className="space-y-4">
                {plan1Features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-neutral-800 dark:text-neutral-200 font-sans text-[15px]">
                    <CheckCircle size={16} className="text-[#1A9080] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <MagneticButton
                onClick={() => onOpenBooking("OS Setup")}
                className="btn-mag w-full bg-[#1C1C1A] hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-white font-sans font-bold py-3.5 px-6 rounded-full text-center transition-colors shadow-sm"
              >
                Get Started
              </MagneticButton>
            </div>
          </div>

          {/* CARD 2 — OS + Performance (Featured) */}
          <div className="bg-white dark:bg-[#141412] rounded-[20px] border-2 border-[#E8622A] p-10 flex flex-col justify-between relative shadow-md transition-colors-theme">
            
            {/* Top border accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#E8622A] rounded-t-[18px]" />
            
            {/* Recommended badge */}
            <span className="absolute top-0 right-0 bg-[#E8622A] text-white font-sans font-bold text-[10px] px-3.5 py-1.5 rounded-bl-[10px] rounded-tr-[18px] uppercase tracking-wider select-none">
              Recommended
            </span>

            <div>
              <h3 className="font-serif font-bold text-2xl text-[#1C1C1A] dark:text-[#F5F2EC]">
                OS + Performance
              </h3>
              
              <div className="mt-4 flex items-baseline">
                <span className="font-serif font-bold text-3xl md:text-5xl text-[#E8622A] tracking-tight">
                  $60 – $120
                </span>
              </div>
              <span className="font-sans text-xs uppercase tracking-wider text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 block mt-1.5">
                Per qualified booked job
              </span>

              <hr className="border-[#EDE9E0] dark:border-[#2E2E2C] my-7" />

              <ul className="space-y-4">
                {plan2Features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-neutral-800 dark:text-neutral-200 font-sans text-[15px]">
                    <CheckCircle size={16} className="text-[#E8622A] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <MagneticButton
                onClick={() => onOpenBooking("OS + Performance")}
                className="btn-mag w-full bg-[#E8622A] hover:bg-[#ff763d] text-white font-sans font-bold py-3.5 px-6 rounded-full text-center transition-colors shadow-md"
              >
                Book Strategy Call
              </MagneticButton>
            </div>
          </div>

        </div>

        {/* Small print disclaimer */}
        <div className="text-center mt-12">
          <p className="font-sans text-[13px] text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 max-w-lg mx-auto leading-relaxed">
            Performance fee triggers only when a job is attended and confirmed by you.
          </p>
        </div>

      </div>
    </section>
  );
}
