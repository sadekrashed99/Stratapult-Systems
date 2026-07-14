import React, { useEffect, useState, useRef } from "react";
import { Clock, Search, Phone, Briefcase, RefreshCw, Users, XCircle } from "lucide-react";

export default function RevenueAuditHook() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [leakCount, setLeakCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect mobile size on mount
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Intersection observer logic for desktop scroll animations
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobileSize = window.innerWidth < 768;

    if (isMobileSize || isReducedMotion) {
      setIsVisible(true);
      setLeakCount(6800);
    } else {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.15 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        observer.disconnect();
        window.removeEventListener("resize", handleResize);
      };
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // RequestAnimationFrame count up animation for the dollar figure
  useEffect(() => {
    if (!isVisible) return;
    if (isMobile) {
      setLeakCount(6800);
      return;
    }

    const startDelay = setTimeout(() => {
      let startTime: number | null = null;
      const duration = 1200; // 1.2 seconds
      const startValue = 0;
      const endValue = 6800;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out quadratic progression
        const easeProgress = progress * (2 - progress);
        const currentValue = Math.round(startValue + easeProgress * (endValue - startValue));
        setLeakCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, 400); // 0.4s delay

    return () => clearTimeout(startDelay);
  }, [isVisible, isMobile]);

  // Format dynamic currency values
  const formatCurrency = (val: number) => {
    return `$${val.toLocaleString()}`;
  };

  return (
    <>
      {/* 1px sand divider at 25% opacity before the section */}
      <div className="w-full h-[1px] bg-[#C9A96E]/25" id="revenue-audit-divider-top" />

      <section
        ref={sectionRef}
        id="revenue-audit-hook"
        className="bg-[#FFFFFF] py-[60px] md:py-[100px] overflow-hidden select-none transition-colors duration-300"
      >
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-[80px] items-center">
            
            {/* LEFT COLUMN (60% on desktop) */}
            <div
              id="revenue-audit-left-col"
              className={`md:col-span-7 flex flex-col items-start transition-all duration-[700ms] ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
              }`}
            >
              {/* Eyebrow */}
              <span
                id="revenue-audit-eyebrow"
                className="text-[#E8622A] font-sans font-bold text-[13px] uppercase tracking-[2px] mb-4 block"
              >
                FREE REVENUE TOOL
              </span>

              {/* Headline */}
              <h2
                id="revenue-audit-headline"
                className="font-sans font-bold text-[38px] md:text-[52px] leading-[1.05] text-[#1C1C1A] tracking-tight mb-5"
              >
                “Most Melbourne Tradies Are Losing $6,800+ a Month.
                <br />
                They Just Don’t Know Where.”
              </h2>

              {/* Subheadline */}
              <p
                id="revenue-audit-subheadline"
                className="font-sans text-[#1C1C1A]/60 text-[18px] md:text-[20px] leading-[1.6] mt-5 mb-6"
              >
                “The Revenue Leak Audit diagnoses every gap in your lead generation, response, conversion, and retention systems. 12 questions. Zero fluff.”
              </p>

              {/* Time Pill */}
              <div
                id="revenue-audit-time-pill"
                className="inline-flex items-center gap-2 bg-[#1A9080] text-[#F5F2EC] rounded-full px-[18px] py-2 text-[14px] font-bold"
              >
                <Clock size={16} className="text-[#F5F2EC]" />
                <span>Takes 3 min 47 sec</span>
              </div>

              {/* Category Pills Group */}
              <div id="revenue-audit-category-pills" className="mt-5 flex flex-wrap gap-2.5">
                <div
                  id="audit-category-pill-found"
                  className="flex items-center gap-2 bg-[#F5F2EC] border-[1.5px] border-[#1A9080] rounded-full px-4 py-2 text-[13px] font-medium text-[#1C1C1A]"
                >
                  <Search size={15} className="text-[#1A9080]" />
                  <span>Getting Found</span>
                </div>
                <div
                  id="audit-category-pill-capture"
                  className="flex items-center gap-2 bg-[#F5F2EC] border-[1.5px] border-[#1A9080] rounded-full px-4 py-2 text-[13px] font-medium text-[#1C1C1A]"
                >
                  <Phone size={15} className="text-[#1A9080]" />
                  <span>Lead Capture</span>
                </div>
                <div
                  id="audit-category-pill-closing"
                  className="flex items-center gap-2 bg-[#F5F2EC] border-[1.5px] border-[#1A9080] rounded-full px-4 py-2 text-[13px] font-medium text-[#1C1C1A]"
                >
                  <Briefcase size={15} className="text-[#1A9080]" />
                  <span>Closing Jobs</span>
                </div>
                <div
                  id="audit-category-pill-growth"
                  className="flex items-center gap-2 bg-[#F5F2EC] border-[1.5px] border-[#1A9080] rounded-full px-4 py-2 text-[13px] font-medium text-[#1C1C1A]"
                >
                  <RefreshCw size={15} className="text-[#1A9080]" />
                  <span>Growth Systems</span>
                </div>
              </div>

              {/* Social Proof Row */}
              <div
                id="revenue-audit-social-proof"
                className="mt-7 flex items-center flex-wrap gap-2 text-[14px]"
              >
                <Users size={16} className="text-[#1C1C1A]/40 shrink-0" />
                <span className="text-[#1C1C1A]/50 font-sans">
                  2,847 Melbourne tradies have taken this audit
                </span>
                <span className="text-[#1C1C1A]/30 font-bold select-none">&middot;</span>
                <span className="text-[#1C1C1A]/50 font-sans">
                  Average leak found: $6,800/month
                </span>
              </div>

              {/* CTA Button */}
              <a
                id="revenue-audit-cta-button"
                href="/audit"
                className="mt-9 inline-flex items-center justify-center bg-[#E8622A] hover:bg-[#d55320] text-[#F5F2EC] rounded-full px-11 py-[18px] text-[18px] font-bold transition-all duration-200 hover:scale-[1.02] shadow-md shadow-[#E8622A]/10 select-none"
              >
                Find My Revenue Leaks &rarr;
              </a>

              {/* Privacy Note */}
              <span
                id="revenue-audit-privacy-note"
                className="text-[#1C1C1A]/40 text-[13px] mt-3 block font-sans"
              >
                No email required to start. Takes under 4 minutes.
              </span>
            </div>

            {/* RIGHT COLUMN (40% on desktop) */}
            <div
              id="revenue-audit-right-col"
              className={`md:col-span-5 flex flex-col items-center md:items-center justify-center transition-all duration-[700ms] ease-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[30px]"
              }`}
              style={{
                transitionDelay: isMobile ? "0ms" : "200ms",
              }}
            >
              {/* LEAK METER (SVG-based semicircular gauge) */}
              <div
                id="revenue-audit-leak-meter"
                className="w-full flex justify-center max-w-[300px]"
              >
                <svg
                  viewBox="0 0 280 155"
                  className="w-[240px] md:w-[300px] h-auto overflow-visible"
                  id="revenue-audit-meter-svg"
                >
                  <defs>
                    <linearGradient id="gaugeGradientHomepage" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1A9080" />
                      <stop offset="50%" stopColor="#C9A96E" />
                      <stop offset="100%" stopColor="#E8622A" />
                    </linearGradient>
                  </defs>
                  
                  {/* Gauge Background Path */}
                  <path
                    d="M 30 120 A 110 110 0 0 1 250 120"
                    fill="none"
                    stroke="#E8E5DF"
                    strokeWidth="18"
                    strokeLinecap="round"
                  />
                  
                  {/* Gauge Color Gradient Path */}
                  <path
                    d="M 30 120 A 110 110 0 0 1 250 120"
                    fill="none"
                    stroke="url(#gaugeGradientHomepage)"
                    strokeWidth="18"
                    strokeLinecap="round"
                  />

                  {/* Gauge Labels */}
                  <text
                    x="25"
                    y="145"
                    fill="#1A9080"
                    fontSize="11"
                    fontFamily="var(--font-sans)"
                    fontWeight="700"
                    textAnchor="start"
                  >
                    FULL REVENUE
                  </text>
                  <text
                    x="255"
                    y="145"
                    fill="#E8622A"
                    fontSize="11"
                    fontFamily="var(--font-sans)"
                    fontWeight="700"
                    textAnchor="end"
                  >
                    MAJOR LEAK
                  </text>

                  {/* Gauge Needle Pointer (fixed at ~61% leak on homepage) */}
                  <g
                    id="revenue-audit-meter-needle"
                    className="origin-[140px_120px] transition-transform duration-[700ms] ease-out"
                    style={{
                      transform: `rotate(${isVisible ? "19.8deg" : "-90deg"})`,
                      transitionDelay: isMobile ? "0ms" : "400ms",
                    }}
                  >
                    <line
                      x1="140"
                      y1="120"
                      x2="140"
                      y2="20"
                      stroke="#1C1C1A"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="140" cy="120" r="6" fill="#1C1C1A" />
                  </g>
                </svg>
              </div>

              {/* Suffix/Details Centered under Gauge */}
              <div
                id="revenue-audit-avg-score"
                className="font-sans font-bold text-[22px] text-[#1C1C1A] mt-4 text-center leading-none"
              >
                Avg. Score: 14 / 36
              </div>

              <div
                id="revenue-audit-est-leak"
                className="font-sans font-bold text-[18px] text-[#E8622A] mt-1.5 text-center leading-none"
              >
                Est. Monthly Leak: {formatCurrency(leakCount)}
              </div>

              {/* Sand Divider */}
              <div id="revenue-audit-right-divider" className="w-full h-[1px] bg-[#C9A96E]/30 my-5" />

              {/* 3 Bullet list section */}
              <div className="w-full">
                <div
                  id="revenue-audit-bullets-title"
                  className="text-[#1C1C1A]/50 text-[12px] font-sans font-bold uppercase tracking-[1px] mb-3 text-left"
                >
                  Top leaks found across 2,847 audits:
                </div>

                <div id="revenue-audit-bullets-list" className="flex flex-col gap-2.5">
                  {/* Bullet 1 */}
                  <div
                    id="audit-bullet-1"
                    className={`flex items-start gap-3 transition-all duration-[500ms] ease-out ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[10px]"
                    }`}
                    style={{
                      transitionDelay: isMobile ? "0ms" : "800ms",
                    }}
                  >
                    <XCircle size={18} className="text-[#E8622A] shrink-0 mt-0.5" />
                    <span className="text-[#1C1C1A] text-[14px] leading-[1.4] font-sans text-left">
                      Slow lead response — avg. $2,100/month lost
                    </span>
                  </div>

                  {/* Bullet 2 */}
                  <div
                    id="audit-bullet-2"
                    className={`flex items-start gap-3 transition-all duration-[500ms] ease-out ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[10px]"
                    }`}
                    style={{
                      transitionDelay: isMobile ? "0ms" : "950ms",
                    }}
                  >
                    <XCircle size={18} className="text-[#E8622A] shrink-0 mt-0.5" />
                    <span className="text-[#1C1C1A] text-[14px] leading-[1.4] font-sans text-left">
                      No quote follow-up system — avg. $1,800/month lost
                    </span>
                  </div>

                  {/* Bullet 3 */}
                  <div
                    id="audit-bullet-3"
                    className={`flex items-start gap-3 transition-all duration-[500ms] ease-out ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[10px]"
                    }`}
                    style={{
                      transitionDelay: isMobile ? "0ms" : "1100ms",
                    }}
                  >
                    <XCircle size={18} className="text-[#E8622A] shrink-0 mt-0.5" />
                    <span className="text-[#1C1C1A] text-[14px] leading-[1.4] font-sans text-left">
                      Missing from Google’s top 3 — avg. $3,200/month to competitors
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 1px sand divider at 25% opacity after the section */}
      <div className="w-full h-[1px] bg-[#C9A96E]/25" id="revenue-audit-divider-bottom" />
    </>
  );
}
