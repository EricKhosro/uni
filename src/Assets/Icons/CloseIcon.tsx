import { ISVGProps } from "../../Interfaces/Components-Interfaces/iconInterfaces";

const CloseIcon = ({ className }: ISVGProps) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_77_135)">
        <path
          d="M20 3.33334C10.7833 3.33334 3.33331 10.7833 3.33331 20C3.33331 29.2167 10.7833 36.6667 20 36.6667C29.2166 36.6667 36.6666 29.2167 36.6666 20C36.6666 10.7833 29.2166 3.33334 20 3.33334ZM20 33.3333C12.65 33.3333 6.66665 27.35 6.66665 20C6.66665 12.65 12.65 6.66668 20 6.66668C27.35 6.66668 33.3333 12.65 33.3333 20C33.3333 27.35 27.35 33.3333 20 33.3333ZM25.9833 11.6667L20 17.65L14.0166 11.6667L11.6666 14.0167L17.65 20L11.6666 25.9833L14.0166 28.3333L20 22.35L25.9833 28.3333L28.3333 25.9833L22.35 20L28.3333 14.0167L25.9833 11.6667Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_77_135">
          <rect width="40" height="40" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CloseIcon;
