import React from "react";

interface GravoraLogoProps {
  variant?: "full" | "header" | "footer" | "monogram";
  className?: string;
  light?: boolean;
}

export function GravoraLogo({
  variant = "full",
  className = "",
  light = false,
}: GravoraLogoProps) {
  const primaryColor = light ? "#F8F5EF" : "#9A6428";
  const textColor = light ? "#FFFDF9" : "#29231E";
  const tagColor = light ? "#EFE8DD" : "#704522";
  const dividerColor = light ? "#4A2C18" : "#E6DED2";

  if (variant === "monogram") {
    return (
      <svg
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className || "w-9 h-9"}
        aria-label="Gravora Monogram"
      >
        <g transform="translate(4, 2)">
          {/* Main G arc */}
          <path
            d="M34 13.5C30.5 6.5 23.5 2.5 16.5 2.5C7.5 2.5 0.5 10 0.5 20C0.5 30 7.5 37.5 17 37.5C25 37.5 30.5 32.5 32 24.5H16.5V19.5H38C38.2 28.5 33 42.5 17 42.5C5 42.5 -4.5 32.5 -4.5 20C-4.5 7.5 4.5 -2.5 16 -2.5C24.5 -2.5 31.5 2.5 35 9L34 13.5Z"
            fill={primaryColor}
            transform="scale(0.85) translate(4, 3)"
          />
          {/* Flowing inner curves */}
          <path
            d="M10 28C15 24 20.5 23.5 25.5 26.5C21.5 22.5 17 22 11 24.5Z"
            fill={light ? "#EFE8DD" : "#704522"}
            opacity="0.9"
          />
          {/* 4-point sparkle */}
          <path
            d="M29 8C29 10.2 30.2 11.2 32.5 11.2C30.2 11.2 29 12.5 29 14.8C29 12.5 27.8 11.2 25.5 11.2C27.8 11.2 29 10.2 29 8Z"
            fill={primaryColor}
          />
        </g>
      </svg>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Monogram */}
      <svg
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={variant === "header" ? "w-8 h-8 sm:w-9 sm:h-9 shrink-0" : "w-10 h-10 shrink-0"}
        aria-hidden="true"
      >
        <g transform="translate(4, 2)">
          <path
            d="M34 13.5C30.5 6.5 23.5 2.5 16.5 2.5C7.5 2.5 0.5 10 0.5 20C0.5 30 7.5 37.5 17 37.5C25 37.5 30.5 32.5 32 24.5H16.5V19.5H38C38.2 28.5 33 42.5 17 42.5C5 42.5 -4.5 32.5 -4.5 20C-4.5 7.5 4.5 -2.5 16 -2.5C24.5 -2.5 31.5 2.5 35 9L34 13.5Z"
            fill={primaryColor}
            transform="scale(0.85) translate(4, 3)"
          />
          <path
            d="M10 28C15 24 20.5 23.5 25.5 26.5C21.5 22.5 17 22 11 24.5Z"
            fill={light ? "#EFE8DD" : "#704522"}
            opacity="0.9"
          />
          <path
            d="M29 8C29 10.2 30.2 11.2 32.5 11.2C30.2 11.2 29 12.5 29 14.8C29 12.5 27.8 11.2 25.5 11.2C27.8 11.2 29 10.2 29 8Z"
            fill={primaryColor}
          />
        </g>
      </svg>

      {/* Vertical Hairline Divider */}
      <span
        className="h-8 w-[1px] opacity-40 shrink-0 hidden sm:block"
        style={{ backgroundColor: dividerColor }}
      />

      {/* Typography */}
      <div className="flex flex-col text-left">
        <span
          className={`font-serif font-bold tracking-[0.2em] leading-none uppercase ${
            variant === "header" ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
          }`}
          style={{ color: textColor }}
        >
          GRAVORA
        </span>
        <div className="flex items-center gap-1.5 mt-1">
          <span
            className="text-[8px] sm:text-[9px] font-sans font-semibold tracking-[0.24em] uppercase leading-none"
            style={{ color: tagColor }}
          >
            CRAFTED TO LEAVE A MARK.
          </span>
          <span className="text-[7px]" style={{ color: primaryColor }}>
            ✦
          </span>
        </div>
      </div>
    </div>
  );
}
