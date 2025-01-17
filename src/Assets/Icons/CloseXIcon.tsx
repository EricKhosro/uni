import { ISVGProps } from "../../Interfaces/Components-Interfaces/iconInterfaces";

const CloseXIcon = ({ className }: ISVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="9"
      viewBox="0 0 8 9"
      fill="currentColor"
      className={className}
    >
      <g clipPath="url(#clip0_3132_7920)">
        <path
          d="M6.33329 2.63675L5.86329 2.16675L3.99996 4.03008L2.13663 2.16675L1.66663 2.63675L3.52996 4.50008L1.66663 6.36341L2.13663 6.83342L3.99996 4.97008L5.86329 6.83342L6.33329 6.36341L4.46996 4.50008L6.33329 2.63675Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_3132_7920">
          <rect
            width="8"
            height="8"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CloseXIcon;
