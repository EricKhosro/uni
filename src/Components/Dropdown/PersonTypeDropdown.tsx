import { PersonType } from "Interfaces/DTO/Seller";
import { DropdownItem } from "Interfaces/componentsInterface";
import StaticDropdown from "./StaticDropdown";

interface IProps {
  name: string;
  value: number;
  onChange: (name: string, value: any) => void;
  label: string;
  isSeller?: boolean;
  required?: boolean;
}

const PersonTypeDropdown = ({
  label,
  name,
  onChange,
  value,
  isSeller,
  required,
}: IProps) => {
  const sellerTypeOptions: DropdownItem[] = [
    { id: PersonType.Haghighi, name: "حقیقی" },
    { id: PersonType.Hoghughi, name: "حقوقی" },
    { id: PersonType.Madani, name: "حقیقی-مشارکت مدنی" },
  ];

  const personTypeOptions: DropdownItem[] = [
    { id: PersonType.Haghighi, name: "حقیقی" },
    { id: PersonType.Hoghughi, name: "حقوقی" },
    { id: PersonType.Madani, name: "حقیقی-مشارکت مدنی" },
    { id: PersonType.Atbaa, name: "اتباع" },
  ];

  return (
    <StaticDropdown
      name={name}
      onChange={onChange}
      options={isSeller ? sellerTypeOptions : personTypeOptions}
      placeholder={label}
      required={required}
      value={value}
    />
  );
};

export default PersonTypeDropdown;
