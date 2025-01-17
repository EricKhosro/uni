import React, { useEffect, useState } from "react";
import { TextField, ThemeProvider, createTheme } from "@mui/material";
import {
  addSeperatorToInput,
  checkTextInputValidation,
  getPrice,
} from "../../Utilities/inputUtilities";
import "./textInputStyles.css";
import ErrorIcon from "../../Assets/Icons/ErrorIcon";
import ExpandMoreIcon from "../../Assets/Icons/ExpandMoreIcon";
import { TextInputKinds } from "../../Interfaces/Components-Interfaces/textInput";
import InvisibleIcon from "Assets/Icons/InvisibleIcon";
import VisibleIcon from "Assets/Icons/VisibleIcon";

export interface TextInputProps {
  name?: string;
  value: string | null;
  label: string;
  onChange: (name: string, value: any) => void;
  classname?: string;
  type?: "text" | "password" | "count";
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  kind?: TextInputKinds;
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  endIcon?: JSX.Element;
  onEndIconClick?: () => void;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  exactLength?: number;
}

const TextInput = ({
  name = "",
  value = "",
  onChange,
  label,
  classname,
  type = "text",
  onFocus,
  onBlur,
  autoFocus = false,
  kind = type === "count" ? "number" : undefined,
  onKeyDown,
  endIcon,
  helperText,
  onEndIconClick,
  error = "",
  disabled,
  exactLength = kind === "cellPhoneNumber" ? 11 : undefined,
  maxLength = kind === "pan" && exactLength
    ? exactLength + 3
    : exactLength || 50,
  minLength,
  required = false,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputError, setInputError] = useState(error);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    if (!error && !inputError) setInputError("");
    else setInputError(error);
  }, [error]);

  useEffect(() => {
    if (isFocused) return;
    if (value) {
      const res = checkTextInputValidation(value, kind);

      if (res.error) setInputError(() => res.error || "");
      else validateBluredInputsValues();
    }
  }, [value]);

  const changeHandler = (newValue: string) => {
    if (newValue.length > maxLength && newValue.length > (value?.length || 0))
      return;
    if (!newValue) return onChange(name, "");

    const res = checkTextInputValidation(newValue || "", kind);
    if (res.isValid) {
      if (kind === "price") {
        const pr = getPrice(newValue);
        onChange(name, pr);
      } else onChange(name, newValue);
      if (kind === "pan") {
        onChange(name, newValue.split("-").join(""));
      }
    }

    if (res.error) setInputError(res.error);
    else setInputError("");
  };

  const theme = createTheme({
    direction: "rtl",
    palette: {
      error: { main: "rgba(179, 38, 30, 1)" },
    },
  });

  const mouseDownHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onEndIconClick) onEndIconClick();
  };

  const focusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const validateBluredInputsValues = () => {
    if (!value) return setInputError("");
    if (kind === "cellPhoneNumber") {
      if (value)
        if (value.slice(0, 2).toString() !== "09") {
          onChange(name, null);
          return setInputError("شماره تلفن همراه باید با 09 شروع شود");
        } else setInputError("");
    }
    if (minLength)
      if (value.length < minLength)
        return setInputError(
          `مقدار ورودی باید حداقل ${minLength} کاراکتر داشته باشد`
        );
    if (exactLength) {
      if (!value)
        return setInputError(
          `باید مقدار ورودی حتما ${exactLength} کاراکتر داشته باشد.`
        );
      else if (value.length !== exactLength)
        return setInputError(
          `باید مقدار ورودی حتما ${exactLength} کاراکتر داشته باشد.`
        );
      else if (value.length === exactLength) return setInputError("");
    }
    if (!error) return setInputError("");
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
    if (!value) return;

    validateBluredInputsValues();
    const res = checkTextInputValidation(value, kind);
    if (res.error) setInputError(res.error);
    if (!value) setInputError("");
  };

  const getHelperText = () => {
    if (inputError) return inputError;
    if (!helperText) return <></>;
    if (!isFocused) return <span className=""></span>;
    return <span className="whitespace-nowrap">{helperText}</span>;
  };

  const getEndIcon = () => {
    if (type === "count")
      return (
        <div className="flex flex-col justify-start items-center ml-2">
          <div
            onClick={(e) => changeHandler(`${parseInt(value || "0") + 1}`)}
            onMouseDown={(e) => e.preventDefault()}
          >
            <ExpandMoreIcon className="rotate-180 !text-icon-color hover:text-grayText -mb-2" />
          </div>
          <div
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => changeHandler(`${parseInt(value || "0") - 1}`)}
          >
            <ExpandMoreIcon className="!text-icon-color hover:text-grayText" />
          </div>
        </div>
      );
    if (isPasswordVisible)
      return (
        <div
          className="flex justify-center items-center ml-[16px] !text-gray-600"
          onClick={() => {
            setIsPasswordVisible(false);
            setInputType("password");
          }}
        >
          <InvisibleIcon />
        </div>
      );
    if (!isPasswordVisible && type === "password")
      return (
        <div
          className="flex justify-center items-center ml-[16px] !text-gray-600"
          onClick={() => {
            setIsPasswordVisible(true);
            setInputType("text");
          }}
        >
          <VisibleIcon />
        </div>
      );
    if (inputError)
      return (
        <div
          className="flex justify-center items-center ml-[16px] cursor-default"
          onMouseDown={mouseDownHandler}
        >
          <ErrorIcon className="!cursor-default" />
        </div>
      );
    if (!endIcon || !isFocused) return <></>;
    if (!isFocused) return <></>;
    return (
      <div
        className="flex justify-center items-center ml-[16px]"
        onMouseDown={mouseDownHandler}
      >
        {endIcon}
      </div>
    );
  };

  return (
    <div className="w-full">
      <ThemeProvider theme={theme}>
        <TextField
          autoComplete="off"
          required={required}
          error={!!inputError}
          fullWidth
          name={name}
          value={addSeperatorToInput(value || "", kind)}
          onChange={(e) => changeHandler(e.target.value)}
          label={label}
          variant="outlined"
          className={`text-input ${
            required ? "required-text-input" : ""
          } ${classname} ${inputError ? "error-text-input" : ""}`}
          type={inputType}
          onFocus={focusHandler}
          onBlur={blurHandler}
          autoFocus={autoFocus}
          onKeyDown={onKeyDown}
          InputProps={{
            endAdornment: getEndIcon(),
            style: { fontSize: 12 },
          }}
          helperText={getHelperText()}
          disabled={disabled}
          InputLabelProps={{ style: { fontSize: 12 } }}
        />
      </ThemeProvider>
    </div>
  );
};

export default TextInput;
