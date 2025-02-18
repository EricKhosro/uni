import React from "react";
import { ISVGProps } from "../../Interfaces/Components-Interfaces/iconInterfaces";

const HomeIcon = ({ className }: ISVGProps) => {
  return (
    <svg
      width="20"
      height="17"
      viewBox="0 0 20 17"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z" fill="currentColor" />
    </svg>
  );
};

export default HomeIcon;
