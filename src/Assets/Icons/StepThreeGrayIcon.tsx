import { ISVGProps } from "Interfaces/Components-Interfaces/iconInterfaces";

const StepThreeGrayIcon = ({ className }: ISVGProps) => {
  return (
    <svg
      width="48"
      height="8"
      viewBox="0 0 48 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_4199_7626)">
        <rect width="48" height="8" rx="4" fill="#1D1B20" fill-opacity="0.08" />
        <rect width="15" height="8" fill="#949292" />
        <rect width="15" height="8" transform="translate(16)" fill="#949292" />
        <rect width="16" height="8" transform="translate(32)" fill="#949292" />
      </g>
      <defs>
        <clipPath id="clip0_4199_7626">
          <rect width="48" height="8" rx="4" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StepThreeGrayIcon;
