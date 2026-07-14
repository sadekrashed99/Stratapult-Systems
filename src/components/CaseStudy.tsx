import React, { useEffect, useRef, useState } from "react";
import { Zap, Truck, CheckCircle } from "lucide-react";

// Count up counter component
function StatCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun) {
            setHasRun(true);
            let startTimestamp: number | null = null;
            const duration = 1600; // 1.6s

            const step = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              const easedProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease out
              
              const currentVal = target * easedProgress;
              const decimalPlaces = target % 1 !== 0 ? 1 : 0;
              setCount(parseFloat(currentVal.toFixed(decimalPlaces)));

              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                setCount(target);
              }
            };

            window.requestAnimationFrame(step);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, hasRun]);

  return (
    <span ref={elementRef} className="tabular-nums font-bold">
      {count}
      {suffix}
    </span>
  );
}

export default function CaseStudy() {
  return (
    <section
      id="proof"
      className="py-20 lg:py-32 bg-[#F5F2EC] dark:bg-[#141412] text-left transition-colors-theme overflow-hidden border-b border-[#1C1C1A]/10"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 select-none">
          <span className="text-[#1A9080] text-[12px] font-sans font-bold uppercase tracking-[0.15em] block mb-3">
            OUTCOMES & PROOF
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-[44px] leading-tight tracking-tight text-[#1C1C1A] dark:text-white">
            FluxOS Case Study — Melbourne's Emergency Electrician OS
          </h2>
          <p className="font-sans text-[#1C1C1A]/60 dark:text-[#F5F2EC]/60 text-sm md:text-base mt-2">
            Built in 7 days. Live now. Delivering extraordinary conversion rates.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center select-none">
          
          {/* LEFT — 3 STAT BLOCKS */}
          <div className="flex flex-col gap-8">
            
            {/* Stat 1 */}
            <div>
              <span className="text-[11px] font-sans font-semibold text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 uppercase tracking-[0.12em] block">
                CONVERSION RATE
              </span>
              <div className="font-serif font-bold text-[clamp(56px,8vw,100px)] text-[#E8622A] leading-none my-1 select-none">
                <StatCounter target={14} suffix="%" />
              </div>
              <span className="text-[13px] text-[#1C1C1A]/40 dark:text-[#F5F2EC]/40 italic block font-sans mb-1">
                was 2%
              </span>
              <p className="text-[15px] text-[#1C1C1A] dark:text-[#F5F2EC] font-sans">
                Form completions &amp; calls per 100 visitors
              </p>
            </div>

            <hr className="border-[#EDE9E0] dark:border-[#2E2E2C]" />

            {/* Stat 2 */}
            <div>
              <span className="text-[11px] font-sans font-semibold text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 uppercase tracking-[0.12em] block">
                INBOUND CALLS
              </span>
              <div className="font-serif font-bold text-[clamp(56px,8vw,100px)] text-[#E8622A] leading-none my-1 select-none">
                <StatCounter target={9} suffix="x" />
              </div>
              <span className="text-[13px] text-[#1C1C1A]/40 dark:text-[#F5F2EC]/40 italic block font-sans mb-1">
                was 1 per 100 visitors
              </span>
              <p className="text-[15px] text-[#1C1C1A] dark:text-[#F5F2EC] font-sans">
                More phone enquiries since deployment
              </p>
            </div>

            <hr className="border-[#EDE9E0] dark:border-[#2E2E2C]" />

            {/* Stat 3 */}
            <div>
              <span className="text-[11px] font-sans font-semibold text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 uppercase tracking-[0.12em] block">
                LOAD TIME
              </span>
              <div className="font-serif font-bold text-[clamp(56px,8vw,100px)] text-[#E8622A] leading-none my-1 select-none">
                <StatCounter target={1.1} suffix="s" />
              </div>
              <span className="text-[13px] text-[#1C1C1A]/40 dark:text-[#F5F2EC]/40 italic block font-sans mb-1">
                was 5.2 seconds
              </span>
              <p className="text-[15px] text-[#1C1C1A] dark:text-[#F5F2EC] font-sans">
                Mobile-optimised page speed
              </p>
            </div>

          </div>

          {/* RIGHT — CSS BROWSER MOCKUP */}
          <div className="flex flex-col items-center">
            {/* Outer laptop container */}
            <div className="w-full max-w-[440px] bg-[#EDE9E0] dark:bg-[#252523] rounded-2xl p-[12px] pb-0 shadow-[0_32px_64px_rgba(0,0,0,0.1)] border border-[#E8E4DC]/20">
              
              {/* Browser chrome */}
              <div className="bg-white dark:bg-[#1C1C1A] rounded-t-lg h-9 px-3 flex items-center gap-3">
                {/* 3 dots */}
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                {/* URL Pill */}
                <div className="flex-grow bg-[#F5F2EC] dark:bg-[#2E2E2C] rounded-full h-6 flex items-center justify-center text-[11px] text-[#1C1C1A]/50 max-w-[220px] mx-auto select-none">
                  fluxos.com.au
                </div>
              </div>

              {/* Page Preview inside browser */}
              <div className="min-h-[320px] bg-[#0D1B2A] rounded-b-lg overflow-hidden flex flex-col text-white font-sans text-left">
                
                {/* Hero Band */}
                <div className="p-5 flex-grow font-sans">
                  <span className="text-[#C9A96E] text-[9px] font-bold tracking-[0.15em] uppercase block mb-1">
                    24/7 Emergency Electrician Melbourne
                  </span>
                  <h4 className="font-serif font-bold text-xl leading-tight">
                    Power Outage?
                  </h4>
                  <p className="text-white/60 text-[13px] mt-1">
                    We're 45 Minutes Away.
                  </p>
                  
                  {/* CTA bar */}
                  <a
                    href="tel:1300358967"
                    onClick={(e) => e.preventDefault()}
                    className="inline-block bg-[#E8622A] text-white rounded-[5px] px-3.5 py-1.5 text-[11px] font-bold mt-3 select-none"
                  >
                    Call Now &mdash; 1300 FLUX OS
                  </a>

                  {/* Trust chips */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    <span className="bg-white/10 text-white text-[9px] px-2 py-0.5 rounded-full select-none">⚡ Licensed</span>
                    <span className="bg-white/10 text-white text-[9px] px-2 py-0.5 rounded-full select-none">✓ 24/7</span>
                    <span className="bg-white/10 text-white text-[9px] px-2 py-0.5 rounded-full select-none">★ 4.9</span>
                  </div>
                </div>

                {/* Yellow Divider */}
                <div className="h-[3px] bg-[#C9A96E]" />

                {/* Trust strip */}
                <div className="bg-white/[0.04] px-5 py-2 flex justify-between items-center text-[9px] border-b border-white/[0.06] font-sans">
                  <span>4.9★ (120+ reviews)</span>
                  <span>847 Jobs Completed</span>
                  <span>45 Min ETA</span>
                </div>

                {/* How it Works section (miniature) */}
                <div className="bg-white p-5 text-[#1C1C1A]">
                  <span className="text-[#E8622A] text-[8px] font-bold uppercase tracking-wider block mb-2 font-sans">
                    HOW IT WORKS
                  </span>
                  <div className="flex flex-col gap-2 mt-2 font-sans">
                    <div className="flex items-center gap-2 text-[10px]">
                      <Zap size={11} className="text-[#E8622A]" />
                      <span className="font-medium text-neutral-800">We Answer &bull; <span className="text-neutral-500 font-normal">Instant Dispatch</span></span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px]">
                      <Truck size={11} className="text-[#E8622A]" />
                      <span className="font-medium text-neutral-800">We Arrive &bull; <span className="text-neutral-500 font-normal">Fully Stocked</span></span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px]">
                      <CheckCircle size={11} className="text-[#E8622A]" />
                      <span className="font-medium text-neutral-800">Problem Solved &bull; <span className="text-neutral-500 font-normal">Lifetime Guarantee</span></span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* View live link */}
            <a
              href="https://flux-os-cyan.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E8622A] hover:text-[#ff763d] text-[13px] font-semibold text-center mt-4 group"
            >
              View live &rarr; <span className="underline group-hover:no-underline">flux-os-cyan.vercel.app</span>
            </a>

          </div>

        </div>

        {/* TESTIMONIAL BLOCK (full width below) */}
        <div className="bg-white dark:bg-[#1C1C1A] border border-[#EDE9E0] dark:border-[#2E2E2C] rounded-2xl border-l-[4px] border-l-[#E8622A] p-8 md:p-10 mt-16 shadow-[0_4px_24px_rgba(0,0,0,0.01)] transition-colors-theme select-none">
          <p className="font-serif text-base md:text-[18px] text-[#1C1C1A] dark:text-[#F5F2EC] leading-relaxed font-normal italic">
            "Before Stratapult, we were sending $2,000/month in Google Ads to a page that barely got callbacks. Now we book a full week of jobs with the same budget."
          </p>
          <div className="font-sans font-semibold text-[13px] md:text-sm text-[#1C1C1A]/55 dark:text-[#F5F2EC]/55 mt-4 uppercase tracking-wider">
            &mdash; James Harrison, Director of Harrison Electrical Co.
          </div>
        </div>

      </div>
    </section>
  );
}

