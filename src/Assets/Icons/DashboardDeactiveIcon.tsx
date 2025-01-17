import { ISVGProps } from "Interfaces/Components-Interfaces/iconInterfaces";

const DashboardDeactiveIcon = ({ className }: ISVGProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.25 12.5L11.204 3.54501C11.644 3.10601 12.356 3.10601 12.795 3.54501L21.75 12.5M4.5 10.25V20.375C4.5 20.996 5.004 21.5 5.625 21.5H9.75V16.625C9.75 16.004 10.254 15.5 10.875 15.5H13.125C13.746 15.5 14.25 16.004 14.25 16.625V21.5H18.375C18.996 21.5 19.5 20.996 19.5 20.375V10.25M8.25 21.5H16.5"
        stroke="#515151"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DashboardDeactiveIcon;
