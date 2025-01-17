import { ISVGProps } from "../../Interfaces/Components-Interfaces/iconInterfaces";

const StepThreeRedIcon = ({ className }: ISVGProps) => {
  return (
    <svg
      width="48"
      height="8"
      viewBox="0 0 48 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_2464_7320)">
        <rect width="48" height="8" rx="4" fill="#1D1B20" fill-opacity="0.08" />
        <rect width="15" height="8" fill="#B3261E" />
        <rect width="15" height="8" transform="translate(16)" fill="#B3261E" />
        <rect width="16" height="8" transform="translate(32)" fill="#B3261E" />
      </g>
      <defs>
        <clipPath id="clip0_2464_7320">
          <rect width="48" height="8" rx="4" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StepThreeRedIcon;
