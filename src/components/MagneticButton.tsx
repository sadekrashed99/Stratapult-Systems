import React from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  as?: "button" | "a" | "div";
  href?: string;
  target?: string;
  rel?: string;
  id?: string;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  as = "button",
  href,
  target,
  rel,
  id
}: MagneticButtonProps) {
  const commonProps = {
    className: `transition-colors-theme ${className}`,
    onClick,
    id
  };

  if (as === "a") {
    return (
      <a href={href} target={target} rel={rel} {...commonProps}>
        {children}
      </a>
    );
  }

  if (as === "div") {
    return (
      <div {...commonProps}>
        {children}
      </div>
    );
  }

  return (
    <button type="button" {...commonProps}>
      {children}
    </button>
  );
}
