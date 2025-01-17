import {
  DropdownItem,
  DynamicMultiSelectDropdownProps,
} from "../../Interfaces/componentsInterface";
import { useState, useEffect } from "react";
import { StaticMultiSelectDropdown } from "./StaticMultiSelectDropdown";
const DynamicMultiSelectDropdown = ({
  getData,
  onChange,
  value,
  name,
  placeholder,
  className,
  disabled,
  required,
  sensitiveData,
}: DynamicMultiSelectDropdownProps) => {
  const [options, setOptions] = useState<Array<DropdownItem>>([]);
  useEffect(() => {
    getData(sensitiveData)
      .then((res) => {
        setOptions(res);
      })
      .catch((e) => {
        setOptions([]);
        //  console.log(e);
      });
  }, [sensitiveData]);

  if (!options) {
    return <></>;
  }

  return (
    <StaticMultiSelectDropdown
      items={options}
      label={placeholder}
      name={name}
      values={value}
      onChange={onChange}
      required={required || false}
    />
  );
};

export default DynamicMultiSelectDropdown;
