import CheckedCheckbox from "./CheckedCheckbox";
import UnCheckedCheckbox from "./unCheckedCheckbox";
import "../componentsStyles.css";
import DisabledCheckbox from "./DisabledCheckbox";

interface ICheckboxProps {
  name?: string;
  value?: boolean;
  onChange: (name: string, value: boolean) => void;
  disabled?: boolean;
}

const Checkbox = ({ onChange, value, disabled, name = "" }: ICheckboxProps) => {
  const clickHandler = (e: React.MouseEvent) => {
    if (disabled) return;
    onChange(name, !value);
    e.stopPropagation();
  };
  return (
    <div
      className={`flex flex-row-reverse justify-start items-center gap-0 ${
        disabled ? "" : "cursor-pointer"
      }`}
      onClick={clickHandler}
    >
      <div
        className={`flex justify-center items-center p-2 rounded-full ${
          !disabled ? "checkbox-square" : ""
        }`}
      >
        {disabled ? (
          <DisabledCheckbox className="text-primary w-6 h-6" />
        ) : value ? (
          <CheckedCheckbox className="text-primary w-6 h-6" />
        ) : (
          <UnCheckedCheckbox className="text-primary w-6 h-6" />
        )}
      </div>
    </div>
  );
};

export default Checkbox;
