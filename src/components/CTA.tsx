import React from "react";
import MagneticButton from "./MagneticButton";

interface CTAProps {
  onOpenBooking: () => void;
}

export default function CTA({ onOpenBooking }: CTAProps) {
  return (
    <section
      id="final-cta"
      className="relative bg-[#1C1C1A] py-32 lg:py-[140px] px-6 text-center overflow-hidden transition-colors-theme select-none"
    >
      {/* BACKGROUND WATERMARK */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 font-serif font-bold text-[clamp(80px,15vw,200px)] text-white opacity-[0.03] pointer-events-none whitespace-nowrap z-0 select-none uppercase">
        STRATAPULT
      </div>

      {/* WHITE VELOCITY LINES */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div
          className="velocity-line"
          style={{
            top: "20%",
            animationDuration: "3.2s",
            animationDelay: "0.2s",
            background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent)",
          }}
        />
        <div
          className="velocity-line"
          style={{
            top: "45%",
            animationDuration: "2.5s",
            animationDelay: "0.8s",
            background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent)",
          }}
        />
        <div
          className="velocity-line"
          style={{
            top: "70%",
            animationDuration: "3.8s",
            animationDelay: "0.1s",
            background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent)",
          }}
        />
      </div>

      {/* Actual Content Block */}
      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Headline */}
        <h2 className="font-serif font-bold text-[clamp(36px,6vw,72px)] leading-[1.05] text-white tracking-tight max-w-[650px] whitespace-pre-line">
          Is your trade{"\n"}business ready?
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-base md:text-[18px] text-white/60 max-w-[520px] mx-auto mt-6 leading-relaxed">
          Book a free 30-minute strategy call. We'll audit your digital presence and show you exactly what an OS would deliver for your business. No pitch. No obligation.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <MagneticButton
            onClick={onOpenBooking}
            className="btn-mag bg-[#E8622A] hover:bg-[#ff763d] text-white font-sans font-bold text-[16px] px-[44px] py-[18px] rounded-full shadow-lg shadow-[#E8622A]/10 transition-colors duration-300 cursor-none inline-block"
          >
            Book Your Free Strategy Call
          </MagneticButton>
        </div>

        {/* Contact details list */}
        <span className="font-sans text-[14px] text-white/35 block mt-8">
          hello@stratapult.com.au &nbsp;&bull;&nbsp; No obligation &nbsp;&bull;&nbsp; 100% free
        </span>
      </div>
    </section>
  );
}
