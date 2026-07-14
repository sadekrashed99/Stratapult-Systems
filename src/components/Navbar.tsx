import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  Zap,
  Droplets,
  HardHat,
  Flame,
  Home,
  Brush,
  Leaf,
  Grid,
  Calculator,
  TrendingUp,
  BarChart2,
  DollarSign,
  PhoneMissed,
  Users,
  Globe,
  FileText,
  Map,
  Activity,
  CalendarDays,
  Phone,
} from "lucide-react";
import MagneticButton from "./MagneticButton";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  onOpenBooking: () => void;
}

export default function Navbar({ darkMode, setDarkMode, onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const megaTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resourcesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const triggerToast = (message: string) => {
    setToastMessage(message);
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 3000);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
      if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
    };
  }, []);

  const handleMouseEnterSystems = () => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setIsMegaOpen(true);
    setIsResourcesOpen(false); // Close other dropdown
  };

  const handleMouseLeaveSystems = () => {
    megaTimeoutRef.current = setTimeout(() => {
      setIsMegaOpen(false);
    }, 150);
  };

  const handleMouseEnterResources = () => {
    if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
    setIsResourcesOpen(true);
    setIsMegaOpen(false); // Close other dropdown
  };

  const handleMouseLeaveResources = () => {
    resourcesTimeoutRef.current = setTimeout(() => {
      setIsResourcesOpen(false);
    }, 150);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setIsMegaOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const systems = [
    { name: "FluxOS", trade: "Emergency Electricians", icon: Zap, href: "https://flux-os-cyan.vercel.app", isLive: true },
    { name: "AquaOS", trade: "Plumbers & Water Specialists", icon: Droplets, href: "#", isLive: false },
    { name: "BuildOS", trade: "Builders & Renovators", icon: HardHat, href: "#", isLive: false },
    { name: "ThermoOS", trade: "Heating, Cooling & HVAC", icon: Flame, href: "#", isLive: false },
    { name: "RoofOS", trade: "Roofers & Cladding", icon: Home, href: "#", isLive: false },
    { name: "CoatOS", trade: "Painters & Decorators", icon: Brush, href: "#", isLive: false },
    { name: "GroundOS", trade: "Landscapers & Gardeners", icon: Leaf, href: "#", isLive: false },
    { name: "TileOS", trade: "Tilers & Floor Layers", icon: Grid, href: "#", isLive: false },
  ];

  const calculatorsList = [
    {
      name: "Paid Ads ROI Calculator",
      desc: "How much to spend on Google Ads to hit your revenue target.",
      icon: TrendingUp,
      href: "/calculators/paid-ads-roi",
    },
    {
      name: "Quote Win Rate Optimiser",
      desc: "What’s your close rate costing you each month?",
      icon: BarChart2,
      href: "/calculators/quote-win-rate",
    },
    {
      name: "Job Value Calculator",
      desc: "Annual impact of a $200 increase in average job value.",
      icon: DollarSign,
      href: "/calculators/job-value",
    },
    {
      name: "Missed Lead Cost Calculator",
      desc: "The true monthly cost of slow lead response time.",
      icon: PhoneMissed,
      href: "/calculators/missed-leads",
    },
    {
      name: "Referral Program Value Estimator",
      desc: "What a structured referral system is worth per year.",
      icon: Users,
      href: "/calculators/referral-value",
    },
  ];

  const intelligenceList = [
    {
      name: "Melbourne Trades Demand Report 2026",
      desc: "Search volume, competition, and growth trends by trade.",
      icon: FileText,
      href: "/intelligence/melbourne-trades-report",
      isNew: true,
    },
    {
      name: "Suburb Opportunity Index",
      desc: "Highest-demand, lowest-competition Melbourne suburbs.",
      icon: Map,
      href: "/intelligence/suburb-index",
      isNew: true,
    },
    {
      name: "Google Ads Trade Benchmarks",
      desc: "Avg CTR, CPC, and conversion rates for AU trades.",
      icon: Activity,
      href: "/intelligence/google-ads-benchmarks",
      isNew: false,
    },
    {
      name: "Seasonal Demand Map",
      desc: "Emergency and seasonal peaks by trade and month.",
      icon: CalendarDays,
      href: "/intelligence/seasonal-demand",
      isNew: false,
    },
  ];

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
          scrolled || isMegaOpen
            ? "bg-[#F5F2EC]/92 dark:bg-[#141412]/92 backdrop-blur-md border-b border-[#1C1C1A]/10 dark:border-[#2E2E2C]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1280px] h-full mx-auto px-6 flex items-center justify-between">
          {/* Logo / Wordmark Left */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#")}
            className="font-sans font-extrabold text-[20px] tracking-[0.12em] text-[#1C1C1A] dark:text-[#F5F2EC] flex items-center gap-0.5 select-none"
          >
            STRATAPULT
            <sup className="text-[#1A9080] font-bold text-[0.6em] relative -top-1">OS</sup>
          </a>

          {/* Desktop Navigation Center */}
          <div className="hidden md:flex items-center gap-[40px] h-full">
            <div
              className="relative h-full flex items-center"
              onMouseEnter={handleMouseEnterSystems}
              onMouseLeave={handleMouseLeaveSystems}
            >
              <button className="font-sans font-semibold text-[14px] text-[#1C1C1A] dark:text-[#F5F2EC] hover:text-[#1A9080] transition-colors duration-200 inline-flex items-center gap-1 cursor-pointer">
                Systems <ChevronDown size={14} className="text-[#1A9080]" />
              </button>

              {/* Mega Menu Indicator Sliding Underline */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#1A9080] scale-x-0 transition-transform duration-200 origin-left hover:scale-x-100" />
            </div>

            <a
              href="#results"
              onClick={(e) => handleLinkClick(e, "#results")}
              className="font-sans font-semibold text-[14px] text-[#6B6B68] dark:text-[#9CA3AF] hover:text-[#1A9080] transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1A9080] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
            >
              Results
            </a>

            <div
              className="relative h-full flex items-center"
              onMouseEnter={handleMouseEnterResources}
              onMouseLeave={handleMouseLeaveResources}
              id="nav-item-resources"
            >
              <button className="font-sans font-semibold text-[14px] text-[#1C1C1A] dark:text-[#F5F2EC] hover:text-[#1A9080] transition-colors duration-200 inline-flex items-center gap-1 cursor-pointer">
                Resources <ChevronDown size={14} className="text-[#1A9080]" />
              </button>

              {/* Resources Underline */}
              <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#1A9080] transition-transform duration-200 origin-left ${isResourcesOpen ? "scale-x-100" : "scale-x-0"}`} />
            </div>

            <a
              href="#how-it-works"
              onClick={(e) => handleLinkClick(e, "#how-it-works")}
              className="font-sans font-semibold text-[14px] text-[#6B6B68] dark:text-[#9CA3AF] hover:text-[#1A9080] transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1A9080] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
            >
              How It Works
            </a>

            <a
              href="#pricing"
              onClick={(e) => handleLinkClick(e, "#pricing")}
              className="font-sans font-semibold text-[14px] text-[#6B6B68] dark:text-[#9CA3AF] hover:text-[#1A9080] transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1A9080] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
            >
              Pricing
            </a>
          </div>

          {/* Desktop Theme Toggle + Book Strategy Call Right */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-[#1C1C1A]/5 dark:hover:bg-white/5 text-[#6B6B68] dark:text-[#9CA3AF] hover:text-[#E8622A] transition-colors duration-200 focus:outline-none cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <MagneticButton
              onClick={onOpenBooking}
              className="bg-[#E8622A] text-[#F5F2EC] font-sans font-bold text-[14px] px-6 py-[12px] rounded-full hover:scale-[1.04] hover:shadow-[0_8px_24px_rgba(232,98,42,0.35)] transition-all duration-300 cursor-none"
            >
              Book a Strategy Call
            </MagneticButton>
          </div>

          {/* Mobile Right: Hamburger button + Dark Mode button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-[#6B6B68] dark:text-[#9CA3AF] hover:text-[#E8622A] transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={toggleMobileMenu}
              className="p-2 text-[#1C1C1A] dark:text-[#F5F2EC] hover:text-[#1A9080] transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP MEGA MENU PANEL */}
        {/* ========================================================= */}
        <div
          onMouseEnter={handleMouseEnterSystems}
          onMouseLeave={handleMouseLeaveSystems}
          style={{ pointerEvents: isMegaOpen ? "auto" : "none" }}
          className={`hidden md:block fixed left-0 w-full top-[72px] bg-[#F5F2EC] dark:bg-[#141412] border-t-2 border-[#1A9080] border-b border-[#1C1C1A]/10 dark:border-[#2E2E2C] shadow-[0_24px_48px_rgba(28,28,26,0.12)] z-40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMegaOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2"
          }`}
        >
          <div className="max-w-[1280px] mx-auto px-6 py-10 grid grid-cols-12 gap-8 text-left">
            {/* COLUMN 1 [45%] — OS SYSTEMS LIST */}
            <div className="col-span-5 border-r border-[#1C1C1A]/10 dark:border-[#2E2E2C] pr-6">
              <span className="font-sans font-bold text-[11px] text-[#1C1C1A]/45 dark:text-[#F5F2EC]/45 uppercase tracking-[0.15em] block mb-4">
                OUR SYSTEMS
              </span>

              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                {systems.map((sys, idx) => {
                  const SysIcon = sys.icon;
                  return (
                    <a
                      key={sys.name}
                      href={sys.href}
                      target={sys.isLive ? "_blank" : undefined}
                      rel={sys.isLive ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 p-2.5 rounded-lg border-l-3 border-transparent hover:border-[#1A9080] hover:bg-[#1A9080]/5 dark:hover:bg-[#1A9080]/10 hover:translate-x-1 transition-all duration-200 text-left"
                    >
                      <div className="w-8 h-8 rounded-md bg-[#1A9080]/10 flex items-center justify-center text-[#1A9080] shrink-0">
                        <SysIcon size={16} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-sans font-bold text-[13px] text-[#1C1C1A] dark:text-[#F5F2EC]">
                            {sys.name}
                          </span>
                          {!sys.isLive && (
                            <span className="opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 bg-[#C9A96E]/25 text-[#C9A96E] text-[9px] font-sans font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                              Soon
                            </span>
                          )}
                        </div>
                        <p className="font-sans text-[11px] text-[#1C1C1A]/55 dark:text-[#F5F2EC]/55 truncate">
                          {sys.trade}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* COLUMN 2 [25%] — FEATURED OS CARD (FluxOS) */}
            <div className="col-span-3">
              <span className="font-sans font-bold text-[11px] text-[#1C1C1A]/45 dark:text-[#F5F2EC]/45 uppercase tracking-[0.15em] block mb-4">
                FEATURED SYSTEM
              </span>

              <div className="border border-[#C9A96E]/30 rounded-xl overflow-hidden bg-white dark:bg-[#1C1C1A] shadow-sm flex flex-col h-full">
                {/* Image */}
                <div className="h-[120px] relative overflow-hidden bg-[#0D1B2A]">
                  <img
                    src="https://storage.googleapis.com/crm-conversations-ai-production/ask-ai-images/1783932100460/9fa4bcce-6f7c-4435-8731-b105822d2842.png"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                    alt="FluxOS Thumbnail"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#1A9080] animate-pulse" />
                    <span className="font-sans font-bold text-[10px] text-[#1A9080] tracking-widest uppercase">
                      LIVE
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="font-serif font-bold text-[18px] text-[#1C1C1A] dark:text-[#F5F2EC] leading-tight">
                      FluxOS
                    </h4>
                    <p className="font-sans text-[12px] text-[#1C1C1A]/65 dark:text-[#F5F2EC]/65 mt-1 leading-snug">
                      Emergency Electricians &mdash; Melbourne
                    </p>
                    <div className="mt-2.5 font-sans font-bold text-[12px] text-[#1A9080]">
                      43 qualified leads in 30 days
                    </div>
                  </div>

                  <a
                    href="https://flux-os-cyan.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1 mt-4 font-sans font-bold text-[12px] text-[#E8622A] hover:text-[#ff763d] transition-colors"
                  >
                    View live system <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* COLUMN 3 [18%] — RESULTS CALLOUT */}
            <div className="col-span-2 border-l border-[#C9A96E]/30 pl-6 flex flex-col justify-between h-full">
              <div>
                <span className="font-sans font-bold text-[11px] text-[#1C1C1A]/45 dark:text-[#F5F2EC]/45 uppercase tracking-[0.15em] block mb-2">
                  LATEST RESULT
                </span>
                <div className="font-serif font-bold text-[40px] text-[#1A9080] leading-none my-1">
                  $127K
                </div>
                <p className="font-sans text-[12px] text-[#1C1C1A]/60 dark:text-[#F5F2EC]/60 leading-normal max-w-[140px]">
                  in qualified trade leads generated in 2025
                </p>
              </div>

              <div className="w-10 h-[1px] bg-[#C9A96E]/40 my-3" />

              <div>
                <div className="font-sans font-extrabold text-[16px] text-[#1C1C1A] dark:text-[#F5F2EC]">
                  4.9★
                </div>
                <div className="font-sans text-[11px] text-[#1C1C1A]/55 dark:text-[#F5F2EC]/55">
                  avg. client rating
                </div>
              </div>
            </div>

            {/* COLUMN 4 [12%] — CTA PANEL */}
            <div className="col-span-2 bg-[#1C1C1A] text-[#F5F2EC] rounded-xl p-5 flex flex-col justify-between h-full shadow-sm text-center">
              <div>
                <span className="font-sans text-[12px] text-[#F5F2EC]/65 block mb-1">
                  Ready to build?
                </span>
                <h4 className="font-serif font-bold text-[22px] text-white leading-tight">
                  Let's Talk
                </h4>
              </div>

              <button
                onClick={onOpenBooking}
                className="mt-4 w-full bg-[#E8622A] hover:bg-[#ff763d] text-white font-sans font-bold text-[12px] py-3 px-2 rounded-full transition-all duration-300 hover:scale-[1.03] shadow-md shadow-[#E8622A]/10 cursor-none"
              >
                Book Call
              </button>

              <a
                href="#results"
                onClick={(e) => handleLinkClick(e, "#results")}
                className="font-sans font-bold text-[11px] text-[#1A9080] hover:text-[#E8622A] block text-center mt-3 transition-colors"
              >
                See all results &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP RESOURCES MEGA MENU PANEL */}
        {/* ========================================================= */}
        <div
          onMouseEnter={handleMouseEnterResources}
          onMouseLeave={handleMouseLeaveResources}
          style={{ pointerEvents: isResourcesOpen ? "auto" : "none" }}
          className={`hidden md:block absolute left-0 w-full top-[72px] bg-[#F5F2EC] dark:bg-[#141412] border-t-2 border-[#1A9080] border-b border-[#1C1C1A]/10 dark:border-[#2E2E2C] shadow-[0_24px_48px_rgba(28,28,26,0.12)] z-40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isResourcesOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2"
          }`}
        >
          <div className="max-w-[1280px] mx-auto px-6 py-10 grid grid-cols-12 gap-8 text-left">
            {/* COLUMN 1 [25%] — CALCULATORS */}
            <div className="col-span-3 border-r border-[#1C1C1A]/10 dark:border-[#2E2E2C] pr-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#1A9080] mb-1">
                  <Calculator size={20} className="shrink-0" />
                  <h4 className="font-sans font-bold text-[15px] text-[#1C1C1A] dark:text-[#F5F2EC]">
                    Calculators
                  </h4>
                </div>
                <p className="font-sans text-[12px] text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 mb-3 leading-tight">
                  Know your numbers before you spend a dollar.
                </p>
                <div className="w-10 h-[2px] bg-[#1A9080] mb-4" />

                <div className="flex flex-col gap-1">
                  {calculatorsList.map((calc) => {
                    const Icon = calc.icon;
                    return (
                      <a
                        key={calc.name}
                        href={calc.href}
                        onClick={(e) => {
                          e.preventDefault();
                          triggerToast(`${calc.name} is coming soon!`);
                        }}
                        className="group flex flex-col gap-0.5 py-[10px] px-3 rounded-lg border-l-3 border-transparent hover:border-[#1A9080] hover:bg-[#C9A96E]/20 transition-all duration-150"
                      >
                        <div className="flex items-center gap-2">
                          <Icon size={16} className="text-[#1A9080] shrink-0" />
                          <span className="font-sans font-medium text-[15px] text-[#1C1C1A] dark:text-[#F5F2EC] group-hover:text-[#1A9080] transition-colors">
                            {calc.name}
                          </span>
                        </div>
                        <span className="font-sans text-[12px] text-[#1C1C1A]/60 dark:text-[#F5F2EC]/60 pl-6 leading-normal">
                          {calc.desc}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* COLUMN 2 [25%] — MARKET INTELLIGENCE */}
            <div className="col-span-3 border-r border-[#1C1C1A]/10 dark:border-[#2E2E2C] pr-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#1A9080] mb-1">
                  <Globe size={20} className="shrink-0" />
                  <h4 className="font-sans font-bold text-[15px] text-[#1C1C1A] dark:text-[#F5F2EC]">
                    Market Intelligence
                  </h4>
                </div>
                <p className="font-sans text-[12px] text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 mb-3 leading-tight">
                  Know your market better than your competitors.
                </p>
                <div className="w-10 h-[2px] bg-[#1A9080] mb-4" />

                <div className="flex flex-col gap-1">
                  {intelligenceList.map((intel) => {
                    const Icon = intel.icon;
                    return (
                      <a
                        key={intel.name}
                        href={intel.href}
                        onClick={(e) => {
                          e.preventDefault();
                          triggerToast(`${intel.name} is coming soon!`);
                        }}
                        className="group flex flex-col gap-0.5 py-[10px] px-3 rounded-lg border-l-3 border-transparent hover:border-[#1A9080] hover:bg-[#C9A96E]/20 transition-all duration-150"
                      >
                        <div className="flex items-center gap-2">
                          <Icon size={16} className="text-[#1A9080] shrink-0" />
                          <span className="font-sans font-medium text-[15px] text-[#1C1C1A] dark:text-[#F5F2EC] group-hover:text-[#1A9080] transition-colors flex items-center gap-2 flex-wrap">
                            {intel.name}
                            {intel.isNew && (
                              <span className="bg-[#E8622A] text-[#F5F2EC] text-[9px] font-sans font-bold px-2 py-0.5 rounded-full uppercase tracking-wider scale-90">
                                NEW
                              </span>
                            )}
                          </span>
                        </div>
                        <span className="font-sans text-[12px] text-[#1C1C1A]/60 dark:text-[#F5F2EC]/60 pl-6 leading-normal">
                          {intel.desc}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* COLUMN 3 [25%] — FEATURED TOOL CARD */}
            <div className="col-span-3 flex flex-col justify-between bg-[#1A9080] text-[#F5F2EC] rounded-[20px] p-7 shadow-sm">
              <div>
                <span className="bg-[#E8622A] text-[#F5F2EC] text-[10px] font-sans font-bold px-2 py-0.5 rounded-full uppercase tracking-wider inline-block">
                  FREE TOOL
                </span>
                <h4 className="font-sans font-bold text-[22px] leading-[1.2] text-white mt-3">
                  Revenue Leak Audit
                </h4>
                <p className="font-sans text-[14px] text-white/80 leading-[1.6] mt-2">
                  12 questions. 3 min 47 sec. Find out exactly where your trade business is bleeding revenue.
                </p>
                
                {/* Stats Row */}
                <div className="flex items-center gap-1.5 text-white/65 text-[13px] mt-3">
                  <Users size={13} className="shrink-0 text-white/80" />
                  <span>2,847 trades audited &middot; Avg. leak: $6,800/mo</span>
                </div>
              </div>

              {/* Mini static leak meter preview */}
              <div className="w-[120px] mx-auto mt-4 mb-2 flex justify-center">
                <svg viewBox="0 0 100 55" className="w-[120px] h-auto overflow-visible">
                  <defs>
                    <linearGradient id="miniGaugeGradientNavbar" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#87c7be" />
                      <stop offset="50%" stopColor="#C9A96E" />
                      <stop offset="100%" stopColor="#ff9a70" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    fill="none"
                    stroke="#147265"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    fill="none"
                    stroke="url(#miniGaugeGradientNavbar)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="125"
                    strokeDashoffset="50"
                  />
                  <g className="origin-[50px_50px]" style={{ transform: 'rotate(18deg)' }}>
                    <line x1="50" y1="50" x2="50" y2="15" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="3.5" fill="#FFFFFF" />
                  </g>
                </svg>
              </div>

              <a
                href="/audit"
                className="w-full bg-[#E8622A] hover:bg-[#ff763d] text-white font-sans font-bold text-[15px] py-3 px-2 rounded-full transition-all duration-300 hover:scale-[1.03] text-center shadow-md shadow-[#E8622A]/10 mt-4 block"
              >
                Discover Your Score &rarr;
              </a>
            </div>

            {/* COLUMN 4 [25%] — CTA CARD */}
            <div className="col-span-3 relative flex flex-col justify-between bg-[#1C1C1A] text-[#F5F2EC] rounded-[20px] p-7 shadow-sm overflow-hidden text-left">
              {/* 3px Teal top bar decoration */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#1A9080]" />

              <div className="mt-1">
                <span className="text-[#C9A96E] font-sans font-bold text-[12px] uppercase tracking-[2px] block">
                  READY TO ACT?
                </span>
                <h4 className="font-sans font-bold text-[22px] leading-[1.2] text-white mt-2">
                  Stop diagnosing.
                  <br />
                  Start recovering.
                </h4>
                <p className="font-sans text-[14px] text-white/65 leading-[1.6] mt-2.5">
                  Get a 30-minute Revenue Recovery Call with a Stratapult systems specialist. No pitch. Just a plan.
                </p>
              </div>

              <div className="mt-5">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsResourcesOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-[#E8622A] hover:bg-[#ff763d] text-white font-sans font-bold text-[15px] py-3 px-2 rounded-full transition-all duration-300 hover:scale-[1.03] text-center shadow-md shadow-[#E8622A]/10"
                >
                  Book Free Call &rarr;
                </button>
                <span className="text-center text-white/45 text-[12px] font-sans block mt-2">
                  No lock-in. No obligation.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Backdrop overlay */}
        {(isMegaOpen || isResourcesOpen) && (
          <div
            className="hidden md:block fixed inset-0 top-[72px] bg-[#1C1C1A]/30 z-30 backdrop-blur-xs transition-opacity duration-300 !pointer-events-none"
            style={{ pointerEvents: "none" }}
          />
        )}
      </nav>

      {/* ========================================================= */}
      {/* MOBILE MEGA MENU DRAWER */}
      {/* ========================================================= */}
      <div
        id="mobile-overlay"
        className={`fixed inset-0 z-50 bg-[#F5F2EC] dark:bg-[#141412] flex flex-col justify-between p-6 transition-transform duration-500 ease-out md:hidden overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top bar with close button */}
        <div className="flex justify-between items-center h-[72px] w-full px-2">
          <span className="font-sans font-extrabold text-[20px] tracking-[0.12em] text-[#1C1C1A] dark:text-[#F5F2EC]">
            STRATAPULT<sup className="text-[#1A9080] font-bold text-[0.6em] relative -top-1">OS</sup>
          </span>
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-[#1C1C1A] dark:text-[#F5F2EC] hover:text-[#E8622A] transition-colors"
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Center Scrollable Area */}
        <div className="flex flex-col gap-6 my-auto py-8">
          {/* Main Links */}
          <div className="flex flex-col gap-5 text-center">
            <a
              href="#results"
              onClick={(e) => handleLinkClick(e, "#results")}
              className="font-serif font-bold text-3xl text-[#1C1C1A] dark:text-[#F5F2EC] hover:text-[#1A9080] transition-colors"
            >
              Results
            </a>

            {/* Mobile Resources Accordion */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                className="font-serif font-bold text-3xl text-[#1C1C1A] dark:text-[#F5F2EC] hover:text-[#1A9080] transition-colors inline-flex items-center gap-2 justify-center"
              >
                Resources{" "}
                <ChevronDown
                  size={24}
                  className={`text-[#1A9080] transition-transform duration-300 ${
                    isMobileResourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`w-full overflow-hidden transition-all duration-300 ${
                  isMobileResourcesOpen ? "max-h-[1000px] mt-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-[#1C1C1A]/5 dark:bg-white/5 rounded-2xl p-4 flex flex-col gap-5 max-w-sm mx-auto text-left">
                  {/* Calculators section */}
                  <div>
                    <div className="flex items-center gap-2 text-[#1A9080] font-sans font-bold text-[13px] uppercase tracking-wider mb-2 select-none">
                      <Calculator size={16} />
                      <span>Calculators</span>
                    </div>
                    <div className="flex flex-col gap-1.5 pl-1.5">
                      {calculatorsList.map((calc) => {
                        const Icon = calc.icon;
                        return (
                          <a
                            key={calc.name}
                            href={calc.href}
                            onClick={(e) => {
                              e.preventDefault();
                              setMobileMenuOpen(false);
                              triggerToast(`${calc.name} is coming soon!`);
                            }}
                            className="flex items-center gap-2.5 p-2 rounded-lg border-l-2 border-transparent hover:border-[#1A9080] hover:bg-[#C9A96E]/10 font-sans text-[14px] text-[#1C1C1A] dark:text-[#F5F2EC] transition-all"
                          >
                            <Icon size={14} className="text-[#1A9080] shrink-0" />
                            <span className="truncate">{calc.name}</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  {/* Market Intelligence section */}
                  <div>
                    <div className="flex items-center gap-2 text-[#1A9080] font-sans font-bold text-[13px] uppercase tracking-wider mb-2 select-none">
                      <Globe size={16} />
                      <span>Market Intelligence</span>
                    </div>
                    <div className="flex flex-col gap-1.5 pl-1.5">
                      {intelligenceList.map((intel) => {
                        const Icon = intel.icon;
                        return (
                          <a
                            key={intel.name}
                            href={intel.href}
                            onClick={(e) => {
                              e.preventDefault();
                              setMobileMenuOpen(false);
                              triggerToast(`${intel.name} is coming soon!`);
                            }}
                            className="flex items-center gap-2.5 p-2 rounded-lg border-l-2 border-transparent hover:border-[#1A9080] hover:bg-[#C9A96E]/10 font-sans text-[14px] text-[#1C1C1A] dark:text-[#F5F2EC] transition-all"
                          >
                            <Icon size={14} className="text-[#1A9080] shrink-0" />
                            <span className="flex-1 truncate">{intel.name}</span>
                            {intel.isNew && (
                              <span className="bg-[#E8622A] text-[#F5F2EC] text-[8px] font-sans font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider shrink-0 scale-90">
                                NEW
                              </span>
                            )}
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  <div className="h-[1px] bg-[#1C1C1A]/10 dark:bg-white/10 my-1" />

                  {/* Revenue Leak Audit Link */}
                  <a
                    href="/audit"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 p-2 rounded-lg border-l-2 border-transparent hover:border-[#1A9080] hover:bg-[#C9A96E]/10 font-sans font-bold text-[14px] text-[#E8622A] transition-all"
                  >
                    <Zap size={14} className="text-[#E8622A] shrink-0" />
                    <span>Revenue Leak Audit</span>
                  </a>

                  {/* Book Free Call Link */}
                  <a
                    href="/contact"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="flex items-center gap-2.5 p-2 rounded-lg border-l-2 border-transparent hover:border-[#1A9080] hover:bg-[#C9A96E]/10 font-sans font-semibold text-[14px] text-[#1C1C1A] dark:text-[#F5F2EC] transition-all"
                  >
                    <Phone size={14} className="text-[#1A9080] shrink-0" />
                    <span>Book Free Call</span>
                  </a>
                </div>
              </div>
            </div>

            <a
              href="#how-it-works"
              onClick={(e) => handleLinkClick(e, "#how-it-works")}
              className="font-serif font-bold text-3xl text-[#1C1C1A] dark:text-[#F5F2EC] hover:text-[#1A9080] transition-colors"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleLinkClick(e, "#pricing")}
              className="font-serif font-bold text-3xl text-[#1C1C1A] dark:text-[#F5F2EC] hover:text-[#1A9080] transition-colors"
            >
              Pricing
            </a>
          </div>

          <div className="h-[1px] bg-[#1C1C1A]/10 dark:bg-[#2E2E2C] w-24 mx-auto my-2" />

          {/* Quick list of Systems */}
          <div className="text-center">
            <span className="font-sans font-bold text-[10px] text-[#1C1C1A]/40 dark:text-[#F5F2EC]/40 uppercase tracking-widest block mb-3">
              AVAILABLE OPERATING SYSTEMS
            </span>
            <div className="flex flex-wrap justify-center gap-2 max-w-sm mx-auto">
              <a
                href="https://flux-os-cyan.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A9080]/10 text-[#1A9080] font-sans font-bold text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1.5"
              >
                <Zap size={12} /> FluxOS <span className="w-1.5 h-1.5 rounded-full bg-[#1A9080] animate-pulse" />
              </a>
              <span className="bg-[#1C1C1A]/5 dark:bg-white/5 text-[#1C1C1A]/60 dark:text-[#F5F2EC]/60 font-sans font-medium text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                <Droplets size={12} /> AquaOS
              </span>
              <span className="bg-[#1C1C1A]/5 dark:bg-white/5 text-[#1C1C1A]/60 dark:text-[#F5F2EC]/60 font-sans font-medium text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                <HardHat size={12} /> BuildOS
              </span>
              <span className="bg-[#1C1C1A]/5 dark:bg-white/5 text-[#1C1C1A]/60 dark:text-[#F5F2EC]/60 font-sans font-medium text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                <Flame size={12} /> ThermoOS
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Booking & Theme Selector */}
        <div className="flex flex-col gap-4 w-full max-w-sm mx-auto mb-4 text-center">
          <button
            onClick={() => {
              toggleMobileMenu();
              onOpenBooking();
            }}
            className="w-full bg-[#E8622A] text-white font-sans font-bold py-4 rounded-full hover:bg-[#ff763d] transition-colors"
          >
            Book Strategy Call
          </button>
          <span className="text-xs text-[#6B6B68] dark:text-[#9CA3AF] font-sans block">
            hello@stratapult.com.au
          </span>
        </div>
      </div>

      {/* Dynamic Toast for coming soon links */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[9999] bg-[#1C1C1A] dark:bg-[#F5F2EC] text-[#F5F2EC] dark:text-[#1C1C1A] border border-[#C9A96E]/30 rounded-xl px-5 py-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-w-sm font-sans font-medium text-[14px] flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-[#E8622A] animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
}


