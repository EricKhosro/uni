import {
  Autocomplete,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import {
  CustomStaticDropdownProps,
  DropdownItem,
} from "../../../Interfaces/componentsInterface";
import ExpandMoreIcon from "../../../Assets/Icons/ExpandMoreIcon";
import "Components/TextInput/textInputStyles.css";

const CustomStaticDropdown = <T extends DropdownItem>({
  onChange,
  options,
  value,
  name,
  placeholder,
  className,
  disabled,
  required,
  loading,
  disableSearch,
  hiddenClearAll,
}: CustomStaticDropdownProps<T>) => {
  const getSelectedOption = (id: number | string) =>
    options?.find((o) => o.id === id) || null;

  const OnDropChange = (dropdownItem: DropdownItem | null) => {
    //    console.log(dropdownItem);

    if (dropdownItem) onChange(name, getSelectedOption(dropdownItem.id));
    else onChange(name, null);
  };

  const GetValue = (
    v: number | string | null | undefined
  ): DropdownItem | null => {
    if (!v && v !== 0) return null;
    if (v === -1) return null;

    if (!options) return null;

    return options?.find((x) => x.id === v) || null;
  };

  const theme = createTheme({
    direction: "rtl",
    palette: {
      error: { main: "rgba(179, 38, 30, 1)" },
    },
  });

  return (
    <Autocomplete
      loading={loading}
      loadingText={<div className="!text-xs">در حال دریافت اطلاعات...</div>}
      fullWidth
      onChange={(e, value) => OnDropChange(value)}
      value={GetValue(value)}
      getOptionLabel={(option) => option?.name || ""}
      popupIcon={<ExpandMoreIcon />}
      noOptionsText="موردی یافت نشد"
      openText="مشاهده"
      clearText="پاک کردن"
      disabled={disabled}
      disableClearable={hiddenClearAll}
      // clearIcon={<CloseIcon />}
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
      ListboxProps={{ style: { fontSize: 12, maxHeight: "128px" } }}
    />
  );
};

export default CustomStaticDropdown;
