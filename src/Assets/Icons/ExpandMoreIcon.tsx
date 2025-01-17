import { ISVGProps } from "../../Interfaces/Components-Interfaces/iconInterfaces";

const ExpandMoreIcon = ({ className }: ISVGProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_242_1129)">
        <path
          d="M16.59 8.58997L12 13.17L7.41 8.58997L6 9.99997L12 16L18 9.99997L16.59 8.58997Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_242_1129">
          <rect width="24" height="24" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ExpandMoreIcon;
