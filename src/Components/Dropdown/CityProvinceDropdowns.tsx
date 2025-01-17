import React from "react";
import DynamicDropdown from "./DynamicDropdown";
import { getCities, getProvinces } from "Requests/download";

interface IDropdownProps {
  sensitiveData?: number | string | null;
  name: string;
  placeholder: string;
  disabled?: boolean;
  className?: string;
  required?: boolean;
  value?: number | string | null | undefined;
  onChange: (name: string, value: number | string | null) => void;
  hiddenClearAll?: boolean;
}

interface IProps {
  province: IDropdownProps;
  city: IDropdownProps;
}

const CityProvinceDropdowns = ({ city, province }: IProps) => {
  return (
    <>
      <DynamicDropdown
        getData={getProvinces}
        name={province.name}
        onChange={province.onChange}
        placeholder={province.placeholder}
        className={province.className}
        disabled={province.disabled}
        hiddenClearAll={province.hiddenClearAll}
        required={province.required}
        sensitiveData={province.sensitiveData}
        value={province.value}
      />
      <DynamicDropdown
        getData={() => getCities(parseInt(province.value?.toString() || "-1"))}
        name={city.name}
        onChange={city.onChange}
        placeholder={city.placeholder}
        className={city.className}
        disabled={city.disabled}
        hiddenClearAll={city.hiddenClearAll}
        required={city.required}
        sensitiveData={city.sensitiveData}
        value={city.value}
      />
    </>
  );
};

export default CityProvinceDropdowns;
