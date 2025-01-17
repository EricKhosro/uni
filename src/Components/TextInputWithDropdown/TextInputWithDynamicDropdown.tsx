import TextInput, { TextInputProps } from "../TextInput/TextInput";
import { DynamicDropdownProps } from "../../Interfaces/componentsInterface";
import "../TextInput/textInputStyles.css";
import TextInputWithStaticDropdown from "./TextInputWithStaticDropdown";
import DynamicDropdown from "../Dropdown/DynamicDropdown";

interface IProps extends TextInputProps {
  dropdown: DynamicDropdownProps;
}

const TextInputWithDynamicDropdown = ({
  label,
  onChange,
  value,
  autoFocus,
  classname,
  disabled,
  endIcon,
  error,
  helperText,
  kind,
  maxLength,
  name,
  onBlur,
  onEndIconClick,
  onFocus,
  onKeyDown,
  required,
  type,
  dropdown,
}: IProps) => {
  return (
    <div className="relative w-full">
      <TextInput
        label={label}
        onChange={onChange}
        value={value}
        autoFocus={autoFocus}
        classname={classname}
        disabled={disabled}
        endIcon={endIcon}
        error={error}
        helperText={helperText}
        kind={kind}
        maxLength={maxLength}
        name={name}
        onBlur={onBlur}
        onEndIconClick={onEndIconClick}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        required={required}
        type={type}
      />
      <div className="absolute top-0 left-0 h-11 w-1/3">
        <DynamicDropdown
          getData={dropdown.getData}
          name={dropdown.name}
          value={dropdown.value}
          onChange={onChange}
          placeholder=""
          className="text-input-dropdown !text-textInput !bg-background !border-none !rounded-s-none"
          hiddenClearAll
        />
      </div>
    </div>
  );
};

export default TextInputWithDynamicDropdown;
