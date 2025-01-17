import { ISVGProps } from "../../Interfaces/Components-Interfaces/iconInterfaces";

const CheckIcon = ({ className }: ISVGProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_743_3286)">
        <path
          d="M8.9999 16.2L4.7999 12L3.3999 13.4L8.9999 19L20.9999 6.99998L19.5999 5.59998L8.9999 16.2Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_743_3286">
          <rect width="24" height="24" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckIcon;
