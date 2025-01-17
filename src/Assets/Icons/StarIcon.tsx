import { ISVGProps } from "Interfaces/Components-Interfaces/iconInterfaces";
import React from "react";

const StarIcon = ({ className }: ISVGProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_4082_20395)">
        <path
          d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_4082_20395">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StarIcon;
