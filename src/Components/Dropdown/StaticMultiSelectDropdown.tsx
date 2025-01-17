import { Autocomplete, TextField } from "@mui/material";
import { DropdownItem } from "../../Interfaces/componentsInterface";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "Assets/Icons/ExpandMoreIcon";
import React, { useEffect, useState } from "react";
import UnCheckedCheckbox from "Components/Checkbox/unCheckedCheckbox";
import Checkbox from "@mui/material/Checkbox";
import CheckedCheckbox from "Components/Checkbox/CheckedCheckbox";

interface Props {
  name: string;
  label: string;
  values?: Array<number | string>;
  items: Array<DropdownItem>;
  onChange: (name: string, value: Array<number | string>) => void;
  required?: boolean;
  isModal?: boolean;
  disabled?: boolean;
  hideTagBox?: boolean;
}

export const StaticMultiSelectDropdown: React.FC<Props> = ({
  values,
  onChange,
  items,
  label,
  name,
  required,
  isModal = false,
  disabled,
  hideTagBox,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (value: DropdownItem[] | null | undefined) => {
    if (!value) {
      onChange(name, []);
    } else {
      const v = value.map((x) => x.id);
      onChange(name, v);
    }
  };

  const getName = (id: number | string) =>
    items?.find((i) => i.id === id)?.name;

  const deleteTagHandler = (id: string | number) => {
    if (disabled) return;
    onChange(name, values?.filter((v) => v !== id) || []);
  };

  const GetValue = (v?: Array<number | string>): Array<DropdownItem> => {
    if (!v) return [];
    if (!Array.isArray(v)) return [];

    return items.filter((x) => v.includes(x.id));
  };

  const getTag = (id: string | number) =>
    getName(id) && id !== "all" ? (
      <div
        key={id}
        className="px-2 py-[2px] bg-background2 flex flex-row justify-start items-center gap-2 rounded whitespace-nowrap"
      >
        <div className="text-hint text-on-surface">{getName(id)}</div>
        <div
          onClick={() => deleteTagHandler(id)}
          className="!text-red-02 multi-select-tag"
        >
          <CloseIcon className="!w-2 !h-2 !text-red-02 !cursor-pointer" />
        </div>
      </div>
    ) : (
      <></>
    );

  const selectAllHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (values?.length !== items.length)
      onChange(
        name,
        items.map((i) => i.id)
      );
    else onChange(name, []);
  };

  const renderTags = (dropdownItems: DropdownItem[]) => {
    if (hideTagBox)
      return (
        <div className="w-3/4 overflow-hidden flex flex-row gap-2">
          {dropdownItems?.map((d) => getTag(d.id))}
        </div>
      );
    else
      return isOpen ? (
        <div className="overflow-hidden flex flex-row gap-2">
          {dropdownItems?.map((d) => getTag(d.id))}
        </div>
      ) : null;
  };

  return (
    <div
      className={`w-full flex flex-col justify-start items-start ${
        isModal ? "gap-4" : "-space-y-0"
      }`}
    >
      <Autocomplete
        popupIcon={<ExpandMoreIcon />}
        disableCloseOnSelect
        fullWidth
        multiple
        options={items}
        getOptionLabel={(option) => option.name}
        value={GetValue(values)}
        open={!hideTagBox ? isOpen : undefined}
        disabled={disabled}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label={label}
            className="text-input drop-down multi-select"
            required={required}
            onFocus={(e) => {
              e.preventDefault();
              if (!hideTagBox) setIsOpen(true);
            }}
            onBlur={() => setIsOpen(false)}
          />
        )}
        renderTags={renderTags}
        onChange={(_, v) => handleChange(v)}
        ListboxProps={{ style: { fontSize: 12, maxHeight: "128px" } }}
        renderOption={(props, option, { selected, index }) => (
          <React.Fragment key={index}>
            {index === 0 ? (
              <li
                onClick={selectAllHandler}
                className={`!my-0 !py-0 body-medium !text-grayText ${
                  values?.length === items.length ? "bg-red-04" : ""
                }`}
              >
                <Checkbox
                  icon={<UnCheckedCheckbox className="text-primary w-4 h-4" />}
                  checkedIcon={
                    <CheckedCheckbox className="text-primary w-4 h-4" />
                  }
                  style={{ marginRight: 8 }}
                  checked={values?.length === items.length}
                />
                همه
              </li>
            ) : (
              <></>
            )}
            <li {...props} className="!my-0 !py-0 body-medium !text-grayText">
              <Checkbox
                icon={<UnCheckedCheckbox className="text-primary w-4 h-4" />}
                checkedIcon={
                  <CheckedCheckbox className="text-primary w-4 h-4" />
                }
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.name}
            </li>
          </React.Fragment>
        )}
      />
      {!hideTagBox ? (
        <div
          className={`w-full border-2 ${
            disabled ? "border-disable" : "border-borderColor"
          } !h-[99px] rounded flex flex-row justify-start items-start flex-wrap p-2 gap-2 overflow-y-auto ${
            !isModal ? "border-t-0 -my-2" : ""
          }`}
        >
          {values?.map((v) => getTag(v))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
