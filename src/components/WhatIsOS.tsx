import React, { useEffect, useState } from "react";
import {
  Search,
  Layout,
  Inbox,
  Database,
  Send,
  PhoneCall,
  CheckCircle,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhatIsOS() {
  useEffect(() => {
    // GSAP ScrollTrigger for 3D Flowchart entry
    gsap.fromTo(
      ".flow-node-item-v2",
      { opacity: 0, scale: 0.8, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: "#flowchart-container",
          start: "top 80%",
        },
      }
    );
  }, []);

  const nodes = [
    { label: "1. Google Search", icon: Search, sub: "High-intent click" },
    { label: "2. Landing OS", icon: Layout, sub: "Conversion tuned" },
    { label: "3. Instant Lead Capture", icon: Inbox, sub: "Zero delay database" },
    { label: "4. Automated CRM Sync", icon: Database, sub: "ServiceM8 / SimPRO" },
    { label: "5. Instant SMS Dispatch", icon: Send, sub: "Customer notified" },
    { label: "6. Call Back", icon: PhoneCall, sub: "5-min fast lead loop" },
    { label: "7. Booked Job", icon: CheckCircle, sub: "Paid & Scheduled", isSpecial: true },
  ];

  return (
    <section
      id="system"
      className="relative bg-[#F5F2EC] dark:bg-[#141412] py-20 lg:py-28 overflow-hidden select-none transition-colors-theme border-b border-[#1C1C1A]/10"
    >
      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        
        {/* Label & Header */}
        <div className="max-w-[800px] mx-auto text-center mb-16 lg:mb-20">
          <span className="text-[#1A9080] text-[12px] font-sans font-bold uppercase tracking-[0.15em] block mb-3">
            SYSTEM ENGINE FLOW
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-[44px] leading-tight tracking-tight text-[#1C1C1A] dark:text-white">
            "From Click to Cash" Pipeline
          </h2>
          <p className="font-sans text-[#1C1C1A]/60 dark:text-[#F5F2EC]/60 text-sm md:text-base mt-3 max-w-[550px] mx-auto leading-relaxed">
            Every step is connected and automated. Here is exactly how we convert raw local search traffic into paid bookings inside 5 minutes.
          </p>
        </div>

        {/* 3D Flowchart Container with perspective */}
        <div 
          id="flowchart-container"
          className="relative max-w-[1140px] mx-auto"
          style={{ perspective: "1000px" }}
        >
          {/* Inner Chart wrapper with 3D angle */}
          <div 
            className="flex flex-col lg:flex-row items-stretch justify-between gap-4 lg:gap-1.5 py-6"
            style={{ transform: "rotateX(8deg)" }}
          >
            {nodes.map((node, idx) => {
              const Icon = node.icon;
              return (
                <React.Fragment key={node.label}>
                  {/* NODE CARD */}
                  <div
                    className={`flow-node-item-v2 flex-1 min-w-[130px] rounded-2xl p-4 flex flex-col items-center justify-between text-center transition-all duration-300 border ${
                      node.isSpecial
                        ? "bg-[#1A9080] border-[#1A9080] text-white shadow-[0_12px_28px_rgba(26,144,128,0.35)] scale-105"
                        : "bg-white dark:bg-[#1C1C1A] border-[#EDE9E0] dark:border-[#2E2E2C] hover:border-[#1A9080] hover:shadow-[0_12px_24px_rgba(28,28,26,0.05)] hover:-translate-y-1"
                    }`}
                  >
                    {/* Icon Bubble */}
                    <div className={`p-3 rounded-full mb-3 shrink-0 ${node.isSpecial ? "bg-white/20 text-white" : "bg-[#1A9080]/10 text-[#1A9080]"}`}>
                      <Icon size={20} />
                    </div>

                    <div className="flex-1 flex flex-col justify-center">
                      <span className={`font-serif font-bold text-[14px] leading-tight block ${node.isSpecial ? "text-white" : "text-[#1C1C1A] dark:text-[#F5F2EC]"}`}>
                        {node.label}
                      </span>
                      <p className={`font-sans text-[11px] mt-1.5 leading-snug ${node.isSpecial ? "text-white/80" : "text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50"}`}>
                        {node.sub}
                      </p>
                    </div>
                  </div>

                  {/* CONNECTOR LINE WITH RUNNING TEAL FLOW */}
                  {idx < nodes.length - 1 && (
                    <>
                      {/* Desktop connector line */}
                      <div className="hidden lg:flex items-center justify-center shrink-0 w-[16px] xl:w-[28px] self-center">
                        <div className="relative w-full h-[3px] bg-[#EDE9E0] dark:bg-[#2E2E2C] rounded-full overflow-hidden">
                          {/* Pulsing teal line flow segment */}
                          <div className="absolute top-0 left-0 h-full w-[80%] bg-[#1A9080] rounded-full animate-flow-right" />
                        </div>
                      </div>

                      {/* Mobile connector line */}
                      <div className="lg:hidden h-6 w-[2px] bg-[#EDE9E0] dark:bg-[#2E2E2C] relative self-center">
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-[#1A9080] animate-flow-down" />
                      </div>
                    </>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Bottom micro copy */}
        <p className="font-sans text-[13px] text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 text-center mt-12">
          ⚡ 5-minute lead loop: Faster callback speed than 99% of Australian plumbing and electrical competitors.
        </p>

      </div>
    </section>
  );
}

