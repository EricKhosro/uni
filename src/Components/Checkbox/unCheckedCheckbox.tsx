import { ISVGProps } from "../../Interfaces/Components-Interfaces/iconInterfaces";

const UnCheckedCheckbox = ({ className }: ISVGProps) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M25 37.9166H15C5.94998 37.9166 2.08331 34.05 2.08331 25V15C2.08331 5.94998 5.94998 2.08331 15 2.08331H25C34.05 2.08331 37.9166 5.94998 37.9166 15V25C37.9166 34.05 34.05 37.9166 25 37.9166ZM15 4.58331C7.31665 4.58331 4.58331 7.31665 4.58331 15V25C4.58331 32.6833 7.31665 35.4166 15 35.4166H25C32.6833 35.4166 35.4166 32.6833 35.4166 25V15C35.4166 7.31665 32.6833 4.58331 25 4.58331H15Z"
        fill="#EF374E"
      />
    </svg>
  );
};

export default UnCheckedCheckbox;
