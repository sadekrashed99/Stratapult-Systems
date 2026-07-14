import React, { useEffect, useState, useRef } from "react";
import { Zap, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { gsap } from "gsap";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const rotatingWords = ["systems.", "revenue.", "pipelines.", "machines."];
  const rotatingRef = useRef<HTMLSpanElement>(null);
  const surgeBarRef = useRef<HTMLDivElement>(null);

  // Word Rotation Animation
  useEffect(() => {
    const interval = setInterval(() => {
      // First flip out
      gsap.to(rotatingRef.current, {
        rotateX: -90,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          setWordIndex((prev) => (prev + 1) % rotatingWords.length);
          // Now flip in
          gsap.fromTo(
            rotatingRef.current,
            { rotateX: 90, opacity: 0 },
            { rotateX: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
          );
        },
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Entrance animations
  useEffect(() => {
    const tl = gsap.timeline();

    // Fade up elements
    tl.fromTo(
      ".hero-label",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.2 }
    );
    tl.fromTo(
      ".hero-title-line",
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power3.out" },
      "-=0.3"
    );
    tl.fromTo(
      ".hero-subhead",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "-=0.2"
    );
    tl.fromTo(
      ".hero-ctas",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "-=0.2"
    );
    tl.fromTo(
      ".hero-trust-chips",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "-=0.2"
    );

    // Animate surge meter height
    gsap.fromTo(
      surgeBarRef.current,
      { height: "0%" },
      { height: "87%", duration: 2.2, ease: "power2.out", delay: 1.0 }
    );
  }, []);

  // Scroll to systems
  const handleScrollToSystems = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector("#systems");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#F5F2EC] dark:bg-[#141412] overflow-hidden transition-colors-theme select-none flex items-center pt-24 pb-16 lg:py-0"
    >

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE (60% equivalent: 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Label */}
            <span className="hero-label opacity-0 text-[12px] font-sans font-bold text-[#1A9080] uppercase tracking-[0.15em] mb-4">
              STRATAPULT OS™
            </span>

            {/* Headline with DM Serif Display */}
            <h1 className="font-serif font-bold text-[clamp(32px,4.2vw,56px)] leading-[1.1] text-[#1C1C1A] dark:text-[#F5F2EC] tracking-tight mb-6">
              <span className="hero-title-line block">We don't build</span>
              <span className="hero-title-line block">websites.</span>
              <span className="hero-title-line flex items-center flex-wrap gap-2 md:gap-4">
                We build{" "}
                <span
                  ref={rotatingRef}
                  className="rotating-word inline-block text-[#E8622A]"
                  style={{ transformOrigin: "center bottom" }}
                >
                  {rotatingWords[wordIndex]}
                </span>
              </span>
            </h1>

            {/* Subhead with Inter */}
            <p className="hero-subhead opacity-0 font-sans text-base md:text-[18px] text-[#1C1C1A]/65 dark:text-[#F5F2EC]/65 max-w-[500px] leading-relaxed mb-8">
              7-day sprints. Performance fees. Operating systems built for
              Australian trades that book more jobs than your competitors combined.
            </p>

            {/* CTAs */}
            <div className="hero-ctas opacity-0 flex flex-wrap gap-5 items-center mb-10">
              <MagneticButton
                onClick={onOpenBooking}
                className="btn-mag bg-[#E8622A] text-white font-sans font-bold text-[16px] px-8 py-[14px] rounded-full hover:scale-[1.04] hover:shadow-[0_8px_24px_rgba(232,98,42,0.35)] transition-all duration-300 cursor-none"
              >
                Book a Strategy Call
              </MagneticButton>

              <a
                href="#systems"
                onClick={handleScrollToSystems}
                className="group font-sans font-bold text-[16px] text-[#1A9080] hover:text-[#E8622A] transition-colors duration-200 inline-flex items-center gap-1.5"
              >
                See our systems{" "}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust Chips */}
            <div className="hero-trust-chips opacity-0 flex flex-wrap gap-3">
              <div className="flex items-center gap-1.5 bg-[#E8F5F3] dark:bg-[#1A9080]/10 border border-[#1A9080]/30 rounded-full py-1.5 px-3.5">
                <Zap size={14} className="text-[#1A9080] fill-[#1A9080]/20" />
                <span className="font-sans font-bold text-[11px] text-[#1C1C1A] dark:text-[#F5F2EC]">
                  7-day builds
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#E8F5F3] dark:bg-[#1A9080]/10 border border-[#1A9080]/30 rounded-full py-1.5 px-3.5">
                <TrendingUp size={14} className="text-[#1A9080]" />
                <span className="font-sans font-bold text-[11px] text-[#1C1C1A] dark:text-[#F5F2EC]">
                  Performance-based
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#E8F5F3] dark:bg-[#1A9080]/10 border border-[#1A9080]/30 rounded-full py-1.5 px-3.5">
                <ShieldCheck size={14} className="text-[#1A9080]" />
                <span className="font-sans font-bold text-[11px] text-[#1C1C1A] dark:text-[#F5F2EC]">
                  No lock-in contracts
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE (40% equivalent: 5 cols) — SURGE METER & STATUS */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="relative flex flex-col items-start bg-white/20 dark:bg-white/[0.02] border border-[#1C1C1A]/5 dark:border-white/5 rounded-3xl p-8 backdrop-blur-md max-w-[340px] w-full shadow-sm">
              <span className="font-sans font-bold text-[11px] text-[#1C1C1A]/45 dark:text-[#F5F2EC]/45 uppercase tracking-[0.15em] mb-4">
                SYSTEM STATUS
              </span>

              {/* SURGE METER CONTAINER */}
              <div className="flex items-stretch gap-6 h-[300px]">
                {/* Vertical bar */}
                <div className="w-[52px] bg-[#EDE9E0] dark:bg-[#2E2E2C] rounded-[26px] overflow-hidden relative">
                  <div
                    ref={surgeBarRef}
                    className="absolute bottom-0 left-0 w-full rounded-[26px] bg-gradient-to-t from-[#E8622A] via-[#C9A96E] to-[#1A9080]"
                    style={{ height: "0%" }}
                  />
                </div>

                {/* Stage markers */}
                <div className="flex flex-col justify-between py-1 text-left">
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-[11px] text-[#1A9080] relative overflow-visible flex items-center gap-1">
                      Waitlisted{" "}
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A9080] animate-pulse relative" />
                    </span>
                    <span className="font-sans text-[11px] text-[#1C1C1A]/40 dark:text-[#F5F2EC]/40">
                      87% load
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-[11px] text-[#1C1C1A]/70 dark:text-[#F5F2EC]/70">
                      Fully booked
                    </span>
                    <span className="font-sans text-[11px] text-[#1C1C1A]/40 dark:text-[#F5F2EC]/40">
                      72% load
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-[11px] text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50">
                      Leads flowing
                    </span>
                    <span className="font-sans text-[11px] text-[#1C1C1A]/40 dark:text-[#F5F2EC]/40">
                      40% load
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-[11px] text-[#E8622A]/50 dark:text-[#E8622A]/50">
                      Empty pipeline
                    </span>
                    <span className="font-sans text-[11px] text-[#1C1C1A]/40 dark:text-[#F5F2EC]/40">
                      0% load
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

