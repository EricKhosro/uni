import React from "react";
import TextInput from "./TextInput/TextInput";
import StaticDropdown from "./Dropdown/StaticDropdown";
import { DropdownItem } from "Interfaces/componentsInterface";
import moment from "jalali-moment";

interface IProps {
  label: string;
  monthNumber: number;
  yearNumber: number;
  monthFieldName: string;
  yearFieldName: string;
  onChange: (name: string, value: any) => void;
}

const MonthAndYearPicker = ({
  label,
  monthFieldName,
  monthNumber,
  yearFieldName,
  yearNumber,
  onChange,
}: IProps) => {
  const monthOptions: DropdownItem[] = [
    { id: 1, name: "فروردین" },
    { id: 2, name: "اردیبهشت" },
    { id: 3, name: "خرداد" },
    { id: 4, name: "تیر" },
    { id: 5, name: "مرداد" },
    { id: 6, name: "شهریور" },
    { id: 7, name: "مهر" },
    { id: 8, name: "آبان" },
    { id: 9, name: "آذر" },
    { id: 10, name: "دی" },
    { id: 11, name: "بهمن" },
    { id: 12, name: "اسفند" },
  ];

  const getYearOptions = () => {
    const currentYear = moment().locale("fa").year();

    const yearOptions: DropdownItem[] = [];

    for (let index = 0; index <= 10; index++) {
      yearOptions.push({
        id: currentYear - index,
        name: (currentYear - index).toString(),
      });
    }

    return yearOptions;
  };
  return (
    <div className="relative w-full">
      <TextInput label={label} onChange={() => {}} value="#" />
      <div className="w-1/2 absolute right-[1px] top-[2px] border-l-[1px] border-borderColor z-[999] h-9">
        <StaticDropdown
          name={monthFieldName}
          onChange={onChange}
          options={monthOptions}
          placeholder=""
          hiddenClearAll
          value={monthNumber}
          className="mounth-year-dropdown"
        />
      </div>
      <div className="w-1/2 absolute left-[1px] top-[2px]">
        <StaticDropdown
          name={yearFieldName}
          onChange={onChange}
          options={getYearOptions()}
          placeholder=""
          hiddenClearAll
          value={yearNumber}
          className="mounth-year-dropdown"
        />
      </div>
    </div>
  );
};

export default MonthAndYearPicker;
