import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revenue, setRevenue] = useState(0);
  const [turnaround, setTurnaround] = useState(0);
  const [leadRate, setLeadRate] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create scroll triggered animation for count ups
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 90%",
        onEnter: () => {
          // Count up revenue from 0 to 12
          const revObj = { val: 0 };
          gsap.to(revObj, {
            val: 12,
            duration: 1.5,
            ease: "power1.out",
            onUpdate: () => setRevenue(Math.floor(revObj.val)),
          });

          // Count up turnaround from 0 to 7
          const turnObj = { val: 0 };
          gsap.to(turnObj, {
            val: 7,
            duration: 1.2,
            ease: "power1.out",
            onUpdate: () => setTurnaround(Math.floor(turnObj.val)),
          });

          // Count up leadRate from 0 to 9
          const rateObj = { val: 0 };
          gsap.to(rateObj, {
            val: 9,
            duration: 1.4,
            ease: "power1.out",
            onUpdate: () => setLeadRate(Math.floor(rateObj.val)),
          });

          // Fade-in the list items gently
          gsap.fromTo(
            ".trust-stat-item",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }
          );
        },
        once: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="trust-strip"
      className="bg-[#1C1C1A] text-[#F5F2EC] py-6 md:py-8 overflow-hidden select-none border-y border-[#F5F2EC]/10"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-center text-center divide-y md:divide-y-0 md:divide-x divide-[#F5F2EC]/10">
          
          {/* Stat 1 */}
          <div className="trust-stat-item opacity-0 flex flex-col items-center justify-center py-2 md:py-0">
            <div className="flex items-baseline gap-1">
              <span className="font-serif font-bold text-[36px] md:text-[48px] text-[#1A9080] leading-none">
                ${revenue}M+
              </span>
            </div>
            <p className="font-sans font-medium text-[13px] text-[#F5F2EC]/75 uppercase tracking-[0.1em] mt-1">
              generated trade revenue
            </p>
          </div>

          {/* Stat 2 */}
          <div className="trust-stat-item opacity-0 flex flex-col items-center justify-center py-4 md:py-0">
            <div className="flex items-baseline gap-1">
              <span className="font-serif font-bold text-[36px] md:text-[48px] text-[#E8622A] leading-none">
                {turnaround}-day
              </span>
            </div>
            <p className="font-sans font-medium text-[13px] text-[#F5F2EC]/75 uppercase tracking-[0.1em] mt-1">
              turnaround guarantee
            </p>
          </div>

          {/* Stat 3 */}
          <div className="trust-stat-item opacity-0 flex flex-col items-center justify-center py-2 md:py-0">
            <div className="flex items-baseline gap-1">
              <span className="font-serif font-bold text-[36px] md:text-[48px] text-[#C9A96E] leading-none">
                {leadRate}x
              </span>
            </div>
            <p className="font-sans font-medium text-[13px] text-[#F5F2EC]/75 uppercase tracking-[0.1em] mt-1">
              industry average lead rate
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

