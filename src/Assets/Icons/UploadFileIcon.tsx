import { ISVGProps } from "../../Interfaces/Components-Interfaces/iconInterfaces";

const UploadFileIcon = ({ className }: ISVGProps) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1507_3907)">
        <path
          d="M14.7778 2H6.77777C5.67777 2 4.78777 2.9 4.78777 4L4.77777 20C4.77777 21.1 5.66777 22 6.76777 22H18.7778C19.8778 22 20.7778 21.1 20.7778 20V8L14.7778 2ZM18.7778 20H6.77777V4H13.7778V9H18.7778V20ZM8.77777 15.01L10.1878 16.42L11.7778 14.84V19H13.7778V14.84L15.3678 16.43L16.7778 15.01L12.7878 11L8.77777 15.01Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1507_3907">
          <rect
            width="24"
            height="24"
            fill="currentColor"
            transform="translate(0.777771)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UploadFileIcon;
