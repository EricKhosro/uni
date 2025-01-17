import React from "react";
import { ISVGProps } from "../../Interfaces/Components-Interfaces/iconInterfaces";

const StepOneGreenIcon = ({ className }: ISVGProps) => {
  return (
    <svg
      width="48"
      height="8"
      viewBox="0 0 48 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_2464_7119)">
        <rect width="48" height="8" rx="4" fill="#1D1B20" fill-opacity="0.08" />
        <rect width="15" height="8" fill="#1D1B20" fill-opacity="0.12" />
        <rect
          width="15"
          height="8"
          transform="translate(16)"
          fill="#1D1B20"
          fill-opacity="0.12"
        />
        <rect width="16" height="8" transform="translate(32)" fill="#00C291" />
      </g>
      <defs>
        <clipPath id="clip0_2464_7119">
          <rect width="48" height="8" rx="4" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StepOneGreenIcon;
