import { ISVGProps } from "../../Interfaces/Components-Interfaces/iconInterfaces";

const LeftArrow = ({ className }: ISVGProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.025 18L8 11.975L14.025 5.94995L15.1 7.02495L10.15 11.975L15.1 16.925L14.025 18Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LeftArrow;
