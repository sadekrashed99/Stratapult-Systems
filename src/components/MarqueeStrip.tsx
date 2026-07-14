import React from "react";

export default function MarqueeStrip() {
  const items = [
    "FluxOS",
    "AquaOS",
    "RoofOS",
    "ThermoOS",
    "BuildOS",
    "CoatOS",
    "GroundOS",
    "TileOS",
  ];

  const renderContent = () => {
    // Repeat the sequence 6 times as requested
    return Array.from({ length: 6 }).map((_, i) => (
      <React.Fragment key={i}>
        {items.map((item, j) => (
          <span key={`${i}-${j}`} className="inline-flex items-center gap-3 mx-4">
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8622A] inline-block" />
          </span>
        ))}
      </React.Fragment>
    ));
  };

  return (
    <div
      id="marquee-strip"
      className="relative z-40 bg-[#111110] text-white h-[38px] flex items-center overflow-hidden border-b border-[#E8622A]/10 mt-[68px] select-none"
    >
      <div className="marquee-track flex items-center whitespace-nowrap">
        <div className="flex items-center font-display font-medium text-[11px] uppercase tracking-[0.18em]">
          {renderContent()}
        </div>
        <div className="flex items-center font-display font-medium text-[11px] uppercase tracking-[0.18em]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
