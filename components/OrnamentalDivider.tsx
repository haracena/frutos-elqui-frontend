import React from "react";

interface OrnamentalDividerProps {
  className?: string;
  color?: string;
  width?: string;
}

const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({
  className = "",
  color = "bg-brand-wine",
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 py-4 ${className}`}>
      {/* Tapered Line (Left) */}
      <div
        className={`h-[1.5px] w-full bg-linear-to-l from-brand-wine/60 to-transparent`}
      ></div>

      {/* Central Dots */}
      <div className="flex gap-2 opacity-60 items-center">
        <div className={`size-1 mr-1 rounded-full ${color}`}></div>
        <div className={`size-2 rounded-full ${color}`}></div>
        <div className={`size-1 ml-1 rounded-full ${color}`}></div>
      </div>

      {/* Tapered Line (Right) */}
      <div
        className={`h-[1.5px] w-full bg-linear-to-r from-brand-wine/60 to-transparent`}
      ></div>
    </div>
  );
};

export default OrnamentalDivider;
