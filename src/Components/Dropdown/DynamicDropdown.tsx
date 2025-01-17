import { useEffect, useState } from "react";
import {
  DropdownItem,
  DynamicDropdownProps,
} from "../../Interfaces/componentsInterface";
import StaticDropdown from "./StaticDropdown";
import { errorHandler } from "Utilities/errorHandler";

const DynamicDropdown: React.FC<DynamicDropdownProps> = ({
  getData,
  onChange,
  value,
  sensitiveData,
  name,
  placeholder,
  className,
  disabled,
  required,
  hiddenClearAll = false,
}: DynamicDropdownProps) => {
  const [options, setOptions] = useState<Array<DropdownItem>>([]);
  useEffect(() => {
    setOptions([]);
    fetchData();
  }, [sensitiveData]);

  const fetchData = () => {
    getData(sensitiveData)
      .then((res) => {
        setOptions(res);
      })
      .catch((e) => {
        setOptions([]);
        errorHandler(e as any);
      });
  };

  return (
    <StaticDropdown
      options={options}
      name={name}
      placeholder={placeholder}
      required={required}
      className={className}
      disabled={disabled || !options.length}
      value={value}
      onChange={onChange}
      hiddenClearAll={hiddenClearAll}
    />
  );
};

export default DynamicDropdown;
