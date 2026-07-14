import React, { useEffect } from "react";
import { Phone, Layout, Rocket, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  useEffect(() => {
    // Fill the connector tracks sequentially on ScrollTrigger
    gsap.to(".hiw-connector-fill", {
      width: "100%",
      duration: 0.8,
      stagger: 0.4,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#hiw-timeline-section",
        start: "top 75%",
      },
    });

    // Animate icon circles border and scale
    gsap.fromTo(
      ".hiw-circle",
      { scale: 0, borderColor: "#E8E4DC" },
      {
        scale: 1,
        borderColor: "#E8622A",
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: "#hiw-timeline-section",
          start: "top 75%",
        },
      }
    );
  }, []);

  const steps = [
    {
      day: "Day 1",
      icon: Phone,
      title: "Strategy",
      body: "We audit your market, perform local competitor lookups, and pinpoint exactly why your current presence loses jobs.",
    },
    {
      day: "Days 2–3",
      icon: Layout,
      title: "System Design",
      body: "We map the complete conversion pathway—structuring copy, layout, and visual trust markers before writing code.",
    },
    {
      day: "Days 4–7",
      icon: Rocket,
      title: "Build & Launch",
      body: "Your OS goes live—fully speed-tuned, mobile-perfect, and integrated via direct API with ServiceM8, SimPRO or your CRM of choice.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-32 bg-[#F5F2EC] dark:bg-[#141412] text-left transition-colors-theme select-none border-b border-[#1C1C1A]/10 dark:border-[#2E2E2C]"
    >
      <div className="max-w-[1024px] mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <span className="text-[#1A9080] text-[12px] font-sans font-bold uppercase tracking-[0.15em] block mb-3">
            7-DAY SPRINT PROCESS
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-[44px] leading-tight tracking-tight text-[#1C1C1A] dark:text-white">
            Zero to live in 7 days. Here's how.
          </h2>
          <p className="font-sans text-[#1C1C1A]/60 dark:text-[#F5F2EC]/60 text-sm md:text-base mt-3 leading-relaxed">
            We operate in deep, focused sprints to ship a finished conversion engine while other agencies are still booking discovery meetings.
          </p>
        </div>

        {/* Timeline (Horizontal on desktop / Vertical on mobile) */}
        <div id="hiw-timeline-section" className="relative mt-8">
          
          {/* DESKTOP TIMELINE */}
          <div className="hidden lg:flex flex-row items-start justify-between gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={idx}>
                  {/* Step block */}
                  <div className="flex-1 flex flex-col items-start min-h-[200px]">
                    {/* Day Badge */}
                    <div className="bg-[#E8622A]/10 text-[#E8622A] font-sans font-bold text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full mb-5 select-none">
                      {step.day}
                    </div>

                    {/* Icon Circle */}
                    <div className="hiw-circle w-[52px] h-[52px] bg-white dark:bg-[#1C1C1A] border-2 border-[#E8E4DC] dark:border-[#2E2E2C] rounded-full flex items-center justify-center text-[#E8622A] select-none shadow-sm">
                      <Icon size={22} />
                    </div>

                    {/* Content */}
                    <h3 className="font-serif font-bold text-[20px] text-[#1C1C1A] dark:text-[#F5F2EC] mt-5">
                      {step.title}
                    </h3>
                    <p className="font-sans text-[14px] text-[#1C1C1A]/65 dark:text-[#F5F2EC]/65 mt-2.5 leading-relaxed">
                      {step.body}
                    </p>
                  </div>

                  {/* Horizontal Connection track */}
                  {idx < steps.length - 1 && (
                    <div className="flex-grow h-[2px] bg-[#EDE9E0] dark:bg-[#2E2E2C] relative self-start mt-[78px] min-w-[30px] max-w-[120px]">
                      <div className="hiw-connector-fill absolute left-0 top-0 h-full bg-[#E8622A] w-0 transition-all duration-[800ms]" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* MOBILE TIMELINE */}
          <div className="flex lg:hidden flex-col gap-10 relative pl-6 border-l-2 border-[#EDE9E0] dark:border-[#2E2E2C]">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative flex flex-col items-start">
                  
                  {/* Absolute left circle replacement */}
                  <div className="absolute left-[-35px] top-0.5 w-5 h-5 rounded-full bg-[#F5F2EC] dark:bg-[#141412] border-2 border-[#E8622A] flex items-center justify-center text-[#E8622A] z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E8622A]" />
                  </div>

                  {/* Day Badge */}
                  <div className="bg-[#E8622A]/10 text-[#E8622A] font-sans font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-3 select-none">
                    {step.day}
                  </div>

                  {/* Icon + Title block */}
                  <div className="flex items-center gap-3">
                    <div className="w-[36px] h-[36px] bg-white dark:bg-[#1C1C1A] border border-[#E8E4DC] dark:border-[#2E2E2C] rounded-full flex items-center justify-center text-[#E8622A] select-none">
                      <Icon size={16} />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-[#1C1C1A] dark:text-[#F5F2EC]">
                      {step.title}
                    </h3>
                  </div>

                  {/* Body text */}
                  <p className="font-sans text-sm text-[#1C1C1A]/65 dark:text-[#F5F2EC]/65 mt-2 ml-1 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* PERFORMANCE MICRO FAQ BLOCK */}
        <div className="mt-20 border-t border-[#1C1C1A]/10 dark:border-white/10 pt-12">
          <h3 className="font-serif font-bold text-2xl text-[#1C1C1A] dark:text-white text-center mb-8">
            Frequently Asked Questions
          </h3>

          <div className="max-w-2xl mx-auto flex flex-col gap-4">
            <details className="group border border-[#C9A96E]/30 rounded-2xl bg-white dark:bg-[#1C1C1A] p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between font-sans font-bold text-[15px] md:text-[16px] text-[#1C1C1A] dark:text-[#F5F2EC] select-none list-none">
                <span>Why do we only build for trades and service providers?</span>
                <span className="text-[#1A9080] group-open:rotate-180 transition-transform duration-200">
                  <ChevronDown size={18} />
                </span>
              </summary>
              <div className="mt-3 font-sans text-sm md:text-[15px] text-[#1C1C1A]/65 dark:text-[#F5F2EC]/65 leading-relaxed pr-4">
                Because trades have a very unique, high-intent buyer psychology. A homeowner with a plumbing leak or an electrical issue doesn't want to browse a "gorgeous" multi-page creative agency brochure. They want to verify competence, see clear pricing/proof, and book immediately. Our systems are engineered specifically for this exact speed-of-trust decision loop.
              </div>
            </details>

            <details className="group border border-[#C9A96E]/30 rounded-2xl bg-white dark:bg-[#1C1C1A] p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between font-sans font-bold text-[15px] md:text-[16px] text-[#1C1C1A] dark:text-[#F5F2EC] select-none list-none">
                <span>How can you build and launch a complete system in just 7 days?</span>
                <span className="text-[#1A9080] group-open:rotate-180 transition-transform duration-200">
                  <ChevronDown size={18} />
                </span>
              </summary>
              <div className="mt-3 font-sans text-sm md:text-[15px] text-[#1C1C1A]/65 dark:text-[#F5F2EC]/65 leading-relaxed pr-4">
                Because we aren't starting from scratch or wasting weeks in endless meetings. We use our field-tested trade framework foundations, customized to your local territory and brand. Our entire team operates in a focused 7-day sprint where strategy, copywriting, interface development, and CRM integrations happen in parallel.
              </div>
            </details>
          </div>
        </div>

      </div>
    </section>
  );
}

