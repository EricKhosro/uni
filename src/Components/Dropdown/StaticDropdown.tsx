import {
  Autocomplete,
  FilterOptionsState,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import {
  DropdownItem,
  StaticDropdownProps,
} from "../../Interfaces/componentsInterface";
import "../TextInput/textInputStyles.css";
import ExpandMoreIcon from "../../Assets/Icons/ExpandMoreIcon";
import { useEffect, useState } from "react";
import "Components/TextInput/textInputStyles.css";

const StaticDropdown = ({
  options,
  value,
  onChange,
  name,
  placeholder,
  className,
  disabled,
  required,
  hiddenClearAll = false,
  disableSearch,
}: StaticDropdownProps) => {
  const OnDropChange = (dropdownItem: DropdownItem | null) => {
    //    console.log(dropdownItem);

    if (dropdownItem) onChange(name, dropdownItem.id);
    else onChange(name, null);
  };

  useEffect(() => {
    if (!value || !options?.length) return;
    const v = options.find((o) => o.id === value);

    if (!v) onChange(name, "");
  }, [value, options]);

  const GetValue = (
    v: number | string | null | undefined
  ): DropdownItem | null | undefined => {
    if (!v && v !== 0) return null;
    if (v === -1) return null;

    if (!options) return null;

    return options.find((x) => x.id === v) || null;
  };

  const theme = createTheme({
    direction: "rtl",
    palette: {
      error: { main: "rgba(179, 38, 30, 1)" },
    },
  });

  const filterOptions = (
    options: DropdownItem[],
    state: FilterOptionsState<DropdownItem>
  ) => {
    const newOptions: DropdownItem[] = [];
    options.forEach((element) => {
      if (
        element.name
          .replace(",", "")
          .toLowerCase()
          .includes(state.inputValue.toLowerCase())
      )
        newOptions.push(element);
    });
    return newOptions;
  };

  return (
    <Autocomplete
      filterOptions={filterOptions}
      fullWidth
      onChange={(e, value) => OnDropChange(value)}
      value={GetValue(value)}
      getOptionLabel={(option) => option.name}
      popupIcon={<ExpandMoreIcon />}
      noOptionsText="موردی یافت نشد"
      openText="مشاهده"
      clearText="پاک کردن"
      disabled={disabled}
      // clearIcon={<CloseIcon />}
      disableClearable={hiddenClearAll}
      options={options}
      renderInput={(params) => (
        <ThemeProvider theme={theme}>
          <TextField
            className={`text-input drop-down ${className}`}
            {...params}
            label={placeholder}
            required={required || false}
          />
        </ThemeProvider>
      )}
      ListboxProps={{
        style: {
          fontSize: 12,
          maxHeight: "128px",
          zIndex: 999999999999999,
        },
      }}
    />
  );
};

export default StaticDropdown;
