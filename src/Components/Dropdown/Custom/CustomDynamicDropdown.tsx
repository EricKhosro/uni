import {
  CustomDynamicDropdownProps,
  DropdownItem,
} from "Interfaces/componentsInterface";
import CustomStaticDropdown from "./CustomStaticDropdown";
import { useState, useEffect } from "react";
import { errorHandler } from "Utilities/errorHandler";

const CustomDynamicDropdown = <T extends DropdownItem>({
  getData,
  onChange,
  inputId,
  value,
  sendOptionsOnValueChange,
  name,
  placeholder,
  className,
  disableSearch,
  disabled,
  hiddenClearAll,
  required,
}: CustomDynamicDropdownProps<T>) => {
  const [options, setOptions] = useState<Array<T>>([]);
  useEffect(() => {
    fetchData();
  }, [inputId]);

  const fetchData = () => {
    setOptions([]);
    getData(inputId)
      .then((res) => {
        setOptions(res);
      })
      .catch((e) => {
        setOptions([]);
        errorHandler(e as any);
      });
  };

  useEffect(() => {
    if (sendOptionsOnValueChange && options.length)
      sendOptionsOnValueChange(options);
  }, [value, options]);

  return (
    <CustomStaticDropdown
      options={options}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      disabled={!options || !options.length ? false : disabled}
      required={required}
      hiddenClearAll={hiddenClearAll}
    />
  );
};

export default CustomDynamicDropdown;
