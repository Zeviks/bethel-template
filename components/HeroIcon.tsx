import React from "react";

const HeroIcon = () => {
  return (
    <div className="mt-[120px] flex flex-col items-center">
      <span className="mb-2 text-xs text-white/60">Scroll Down</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-7 w-7 animate-pulse text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
};

export default HeroIcon;
