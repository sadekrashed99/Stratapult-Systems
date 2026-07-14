import React from "react";
import { Mail, MapPin } from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="footer"
      className="bg-[#F5F2EC] dark:bg-[#141412] border-t border-[#E8E4DC] dark:border-neutral-800 py-16 md:py-20 text-left transition-colors-theme"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          
          {/* Left Column: Wordmark & Brand line */}
          <div className="flex flex-col items-start" id="footer-branding">
            <span className="font-serif font-bold text-xl text-[#1C1C1A] dark:text-[#F5F2EC]">
              Stratapult
            </span>
            <p className="font-sans text-sm text-[#6B6B68] dark:text-[#9CA3AF] leading-relaxed mt-4 max-w-xs">
              Building Operating Systems for Australian trade businesses. Not websites. Revenue engines.
            </p>
            <span className="font-sans text-sm text-[#6B6B68] dark:text-[#9CA3AF] mt-2 block">
              Melbourne, VIC, Australia
            </span>
          </div>

          {/* Middle Column: Quick links */}
          <div className="flex flex-col items-start" id="footer-links">
            <h4 className="font-sans font-bold text-[13px] text-[#1C1C1A] dark:text-[#F5F2EC] uppercase tracking-[0.08em] mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="#our-os"
                onClick={(e) => handleLinkClick(e, "#our-os")}
                className="font-sans text-sm text-[#6B6B68] dark:text-[#9CA3AF] hover:text-[#E8622A] dark:hover:text-[#E8622A] transition-colors duration-200"
              >
                Our OS
              </a>
              <a
                href="https://flux-os-cyan.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-[#6B6B68] dark:text-[#9CA3AF] hover:text-[#E8622A] transition-colors duration-200"
              >
                FluxOS Live
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => handleLinkClick(e, "#how-it-works")}
                className="font-sans text-sm text-[#6B6B68] dark:text-[#9CA3AF] hover:text-[#E8622A] dark:hover:text-[#E8622A] transition-colors duration-200"
              >
                How It Works
              </a>
              <a
                href="#compare"
                onClick={(e) => handleLinkClick(e, "#compare")}
                className="font-sans text-sm text-[#6B6B68] dark:text-[#9CA3AF] hover:text-[#E8622A] dark:hover:text-[#E8622A] transition-colors duration-200"
              >
                Compare
              </a>
              <a
                href="#pricing"
                onClick={(e) => handleLinkClick(e, "#pricing")}
                className="font-sans text-sm text-[#6B6B68] dark:text-[#9CA3AF] hover:text-[#E8622A] dark:hover:text-[#E8622A] transition-colors duration-200"
              >
                Pricing
              </a>
              <button
                onClick={(e: any) => {
                  e.preventDefault();
                  onOpenBooking();
                }}
                className="font-sans text-sm text-[#6B6B68] dark:text-[#9CA3AF] hover:text-[#E8622A] dark:hover:text-[#E8622A] transition-colors duration-200 text-left cursor-pointer"
              >
                Book a Call
              </button>
            </div>
          </div>

          {/* Right Column: Contact details */}
          <div className="flex flex-col items-start" id="footer-contact">
            <h4 className="font-sans font-bold text-[13px] text-[#1C1C1A] dark:text-[#F5F2EC] uppercase tracking-[0.08em] mb-4">
              Contact
            </h4>
            
            {/* Email contact row */}
            <div className="flex items-center gap-2 mb-3">
              <Mail size={14} className="text-[#E8622A]" />
              <a
                href="mailto:hello@stratapult.com.au"
                className="font-sans text-sm text-[#E8622A] hover:text-[#ff763d] font-medium transition-colors"
              >
                hello@stratapult.com.au
              </a>
            </div>

            {/* Location row */}
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#6B6B68] dark:text-[#9CA3AF]" />
              <span className="font-sans text-sm text-[#6B6B68] dark:text-[#9CA3AF]">
                Melbourne, VIC, Australia
              </span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div 
          className="border-t border-[#E8E4DC] dark:border-neutral-800 pt-8 mt-12 text-center" 
          id="footer-bottom"
        >
          <p className="font-sans text-xs sm:text-sm text-[#6B6B68] dark:text-[#9CA3AF]">
            © 2026 Stratapult. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
