import { ISVGProps } from "../../Interfaces/Components-Interfaces/iconInterfaces";

const FileIcon = ({className}:ISVGProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_2050_9503)">
        <path
          d="M10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2050_9503">
          <rect width="24" height="24" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FileIcon;
