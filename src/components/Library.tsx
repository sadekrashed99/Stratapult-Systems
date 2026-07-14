import React, { useRef, useState, useEffect } from "react";
import {
  Zap,
  Droplets,
  Home,
  Thermometer,
  Hammer,
  Brush,
  Leaf,
  Grid,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { OS_LIBRARY_PRODUCTS } from "../data";

export default function Library() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Map icons
  const getIcon = (iconName: string) => {
    const size = 32;
    const className = "text-white opacity-60";
    switch (iconName) {
      case "Zap":
        return <Zap size={size} className="text-white fill-white/20" />;
      case "Droplets":
        return <Droplets size={size} className={className} />;
      case "Home":
        return <Home size={size} className={className} />;
      case "Thermometer":
        return <Thermometer size={size} className={className} />;
      case "Hammer":
        return <Hammer size={size} className={className} />;
      case "Brush":
        return <Brush size={size} className={className} />;
      case "Leaf":
        return <Leaf size={size} className={className} />;
      case "Grid2X2":
      case "Grid":
        return <Grid size={size} className={className} />;
      default:
        return <Zap size={size} className={className} />;
    }
  };

  // Get gradient top strip color identity
  const getTopStripBg = (id: string) => {
    switch (id) {
      case "flux-os":
        return "linear-gradient(135deg, #0D1B2A 0%, #1a3a52 100%)";
      case "aqua-os":
        return "linear-gradient(135deg, #0A2438 0%, #0d3350 100%)";
      case "roof-os":
        return "linear-gradient(135deg, #1a1a0a 0%, #2e2e12 100%)";
      case "thermo-os":
        return "linear-gradient(135deg, #0f1a1a 0%, #1a2e2e 100%)";
      case "build-os":
        return "linear-gradient(135deg, #1a0f0a 0%, #2e1a12 100%)";
      case "coat-os":
        return "linear-gradient(135deg, #1a1a1a 0%, #2e2e2e 100%)";
      case "ground-os":
        return "linear-gradient(135deg, #0a1a0a 0%, #122e12 100%)";
      case "tile-os":
        return "linear-gradient(135deg, #1a0a1a 0%, #2e122e 100%)";
      default:
        return "linear-gradient(135deg, #1C1C1A 0%, #2E2E2C 100%)";
    }
  };

  // Slider Drag to scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Nav Arrows Scroll Handlers
  const handleScroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const offset = 344; // Card width 320 + gap 24
    if (direction === "left") {
      sliderRef.current.scrollBy({ left: -offset, behavior: "smooth" });
    } else {
      sliderRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  // Track active dot
  useEffect(() => {
    const handleScrollEvent = () => {
      if (!sliderRef.current) return;
      const scrollPosition = sliderRef.current.scrollLeft;
      const offset = 344;
      const index = Math.round(scrollPosition / offset);
      setActiveDot(Math.max(0, Math.min(index, OS_LIBRARY_PRODUCTS.length - 1)));
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", handleScrollEvent);
    }
    return () => {
      if (slider) {
        slider.removeEventListener("scroll", handleScrollEvent);
      }
    };
  }, []);

  return (
    <section
      id="our-os"
      className="py-20 lg:py-32 bg-[#F5F2EC] dark:bg-[#141412] text-left transition-colors-theme select-none overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 mb-12">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-[#E8622A] text-xs font-bold font-display uppercase tracking-[0.15em] block mb-3">
            OUR PRODUCTS
          </span>
          <h2 className="font-display font-bold text-3xl md:text-[48px] leading-[1.1] tracking-tight mb-4">
            One agency. A library of<br />Operating Systems.
          </h2>
          <p className="font-sans text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
            Each OS is purpose-built for its trade — engineered from scratch for that industry's buyer psychology.
          </p>
        </div>
      </div>

      {/* HORIZONTAL SLIDER */}
      <div className="relative w-full overflow-hidden">
        {/* Slider Track Wrapper */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex overflow-x-auto gap-6 pb-8 px-6 lg:pl-[calc((100vw-1200px)/2+24px)] select-none scrollbar-none cursor-grab active:cursor-grabbing snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {OS_LIBRARY_PRODUCTS.map((product) => {
            return (
              <div
                key={product.id}
                className="os-card-3d w-[320px] shrink-0 bg-white dark:bg-[#1C1C1A] border border-[#E8E4DC] dark:border-[#2E2E2C] rounded-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] overflow-hidden snap-start transition-colors-theme"
              >
                {/* TOP STRIP IDENTITY BACKGROUND */}
                <div
                  className="h-[200px] relative overflow-hidden"
                  style={{ background: getTopStripBg(product.id) }}
                >
                  {/* OS NAME */}
                  <span className="absolute bottom-5 left-6 font-display font-bold text-4xl text-white tracking-tight leading-none">
                    {product.title}
                  </span>

                  {/* ICON BLOCK */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    {getIcon(product.icon)}
                  </div>

                  {/* STATUS BADGE */}
                  <span
                    className={`absolute top-6 right-6 text-[11px] font-display font-bold px-3 py-1 rounded-full tracking-wider ${
                      product.isLive
                        ? "bg-[#059669] text-white animate-pulse"
                        : "bg-white/10 text-white/80"
                    }`}
                  >
                    {product.isLive ? `● ${product.statusBadge}` : product.statusBadge}
                  </span>

                  {/* ABSTRACT LANDING PAGE GRID SILHOUETTE */}
                  <div className="absolute right-0 top-0 h-full w-[40%] flex flex-col gap-2 p-4 justify-center pointer-events-none opacity-40">
                    <div className="h-1.5 bg-white/15 rounded-full w-[80%]" />
                    <div className="h-1.5 bg-white/15 rounded-full w-[95%]" />
                    <div className="h-1.5 bg-white/15 rounded-full w-[60%]" />
                    <div className="h-3 bg-[#E8622A]/40 rounded-md w-[85%] mt-1" />
                  </div>
                </div>

                {/* BOTTOM CONTENT SECTION */}
                <div className="p-6 bg-white dark:bg-[#1C1C1A]">
                  <span className="font-display font-bold text-[11px] text-[#E8622A] uppercase tracking-[0.08em]">
                    {product.trade}
                  </span>
                  <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-neutral-100 mt-1">
                    {product.title} OS
                  </h3>

                  <hr className="border-[#E8E4DC] dark:border-[#2E2E2C] my-4" />

                  {product.isLive ? (
                    <div className="min-h-[64px] flex flex-col justify-between">
                      <span className="text-[#E8622A] font-display font-bold text-[15px]">
                        {product.result}
                      </span>
                      <a
                        href={product.url || "https://flux-os-cyan.vercel.app"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E8622A] hover:text-[#ff763d] font-sans font-medium text-sm inline-flex items-center gap-1.5 transition-colors mt-2"
                      >
                        <span>View Live OS</span>
                        <span>&rarr;</span>
                      </a>
                    </div>
                  ) : (
                    <div className="min-h-[64px] flex items-center">
                      <span className="text-neutral-400 dark:text-neutral-500 font-sans text-xs italic">
                        In development &middot; Coming {product.statusBadge}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* NAVIGATION CONTROLS */}
      <div className="flex flex-col items-center gap-4 mt-8 select-none">
        {/* Navigation Arrows */}
        <div className="flex gap-3">
          <button
            onClick={() => handleScroll("left")}
            className="w-11 h-11 rounded-full border border-[#E8E4DC] dark:border-[#2E2E2C] bg-white dark:bg-[#1C1C1A] text-neutral-800 dark:text-white flex items-center justify-center hover:bg-[#E8622A] dark:hover:bg-[#E8622A] hover:text-white dark:hover:text-white hover:border-[#E8622A] transition-all duration-300 cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="w-11 h-11 rounded-full border border-[#E8E4DC] dark:border-[#2E2E2C] bg-white dark:bg-[#1C1C1A] text-neutral-800 dark:text-white flex items-center justify-center hover:bg-[#E8622A] dark:hover:bg-[#E8622A] hover:text-white dark:hover:text-white hover:border-[#E8622A] transition-all duration-300 cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* 8 Dot Indicators */}
        <div className="flex items-center gap-2">
          {OS_LIBRARY_PRODUCTS.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeDot === idx ? "w-5 bg-[#E8622A]" : "w-2 bg-[#E8E4DC] dark:bg-[#2E2E2C]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
