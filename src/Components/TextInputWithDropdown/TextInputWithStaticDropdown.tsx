import TextInput, { TextInputProps } from "../TextInput/TextInput";
import { StaticDropdownProps } from "../../Interfaces/componentsInterface";
import StaticDropdown from "../Dropdown/StaticDropdown";
import "../TextInput/textInputStyles.css";

interface IProps extends TextInputProps {
  dropdown: StaticDropdownProps;
}

const TextInputWithStaticDropdown = ({
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
  exactLength,
}: IProps) => {
  return (
    <div className="relative w-full">
      <TextInput
        exactLength={exactLength}
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
      <div className="absolute top-[2px] left-[2px] h-11 !w-[55px]">
        <StaticDropdown
          name={dropdown.name}
          value={dropdown.value}
          onChange={dropdown.onChange}
          options={dropdown.options}
          placeholder=""
          className="text-input-dropdown !text-textInput !bg-background !border-none !rounded-s-none"
          hiddenClearAll
          disabled={dropdown.disabled}
        />
      </div>
    </div>
  );
};

export default TextInputWithStaticDropdown;
