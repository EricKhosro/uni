import React, { useEffect, useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import ModernDatePicker, {
  DayValue,
} from "@hassanmojab/react-modern-calendar-datepicker";
import { TextField, ThemeProvider, createTheme } from "@mui/material";
import moment from "moment";
import jmoment from "jalali-moment";
import {
  calculateAge,
  convertToJalali,
  isFutureDate,
  legalAgeChecker,
  validateDate,
} from "../Utilities/inputUtilities";
import CalendarIcon from "../Assets/Icons/CalendarIcon";

interface IRelativeDate {
  value: string;
  label: string;
}

interface IProps {
  label: string;
  value: string;
  onChange: (name: string, value: string | undefined) => void;
  name: string;
  required?: boolean;
  onlyLegalAge?: boolean;
  className?: string;
  disabled?: boolean;
  notFuture?: boolean;
  futureOnly?: boolean;
  minDate?: IRelativeDate;
  maxDate?: IRelativeDate;
  fromDate?: boolean;
  toDate?: boolean;
}

const DatePicker = ({
  label,
  name,
  onChange,
  value,
  required,
  onlyLegalAge = false,
  className,
  disabled,
  notFuture = false,
  futureOnly = false,
  minDate,
  maxDate,
  fromDate,
  toDate,
}: IProps) => {
  const [inputText, setInputText] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);

  const [error, setError] = useState("");
  const DateTimeMinValue = "0001-01-01";

 

  useEffect(() => {
    if (!value) setInputText("");
    else if (value?.includes(DateTimeMinValue)) {
      setInputText("");
      onChange(name, undefined);
    } else {
      const d = convertToJalali(value);
      if (!d) setInputText("");
      else
        setInputText(
          `${d.year}/${d.month.toString().padStart(2, "0")}/${d.day
            .toString()
            .padStart(2, "0")}`
        );
    }
  }, [value]);

  function convertToGeorgian(jalaliDate: string) {
    if (jalaliDate === "") return "";
    if (!validateDate(jalaliDate)) {
      setInputText("");
      return "";
    }
    jmoment.locale("en");
    return jmoment.from(jalaliDate, "fa", "YYYY/MM/DD").format().toString();
  }

  const theme = createTheme({
    direction: "rtl",
    palette: {
      error: { main: "rgba(179, 38, 30, 1)" },
    },
  });

  const textInputBlurHandler = () => {
    setIsFocused(false);
    sendOnChange(convertToGeorgian(inputText));
    if (!value) setError("");
  };

  const textInputFocusHandler = () => {
    setIsFocused(true);
    setError("");
  };

  const getHelperText = () => {
    if (!error) return null;
    return (
      <div className={`text-hint mr-1 ${error ? "text-error" : ""}`}>
        {error}
      </div>
    );
  };

  const renderCustomInput = ({ ref }: any) => {
    return (
      <div className={`flex flex-col justify-start items-start gap-1 w-full`}>
        <div className="relative w-full">
          <ThemeProvider theme={theme}>
            <TextField
              required={required}
              autoComplete="off"
              onBlur={textInputBlurHandler}
              onFocus={textInputFocusHandler}
              label={label}
              onChange={(e) => setInputText(e.target.value)}
              value={inputText}
              ref={ref}
              className={`text-input !w-full date-input !relative !bg-transparent ${
                error ? "error-text-input" : ""
              }`}
              fullWidth
              error={!!error}
              disabled={disabled}
              helperText={error}
            />
          </ThemeProvider>
          {getEndIcon()}
        </div>
        {/* {getHelperText()} */}
      </div>
    );
  };

  const changeHandler = (value: DayValue) => {
    if (!value) {
      sendOnChange("");
    } else {
      const formatedJalaliDate = `${value.year}/${value.month
        .toString()
        .padStart(2, "0")}/${value.day.toString().padStart(2, "0")}`;
      sendOnChange(convertToGeorgian(formatedJalaliDate));
    }
  };

  const getDatePickerValue = (): DayValue => {
    if (!value) return null;
    if (value?.includes(DateTimeMinValue)) return null;
    return convertToJalali(value);
  };

  const mouseDownHandler = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const checkMinDate = (date: string) => {
    if (!minDate || !minDate.value) return true;
    const currentDate = new Date(date);
    const minDateValue = new Date(minDate.value);
    return minDateValue < currentDate;
  };

  const checkMaxDate = (date: string) => {
    if (!maxDate || !maxDate?.value) return true;

    const currentDate = new Date(date);
    const maxDateValue = new Date(maxDate.value);
    return maxDateValue > currentDate;
  };

  const getValueForOnChange = (v: string) => {
    if (!v) return undefined;
    const date = new Date(v);

    if (fromDate) {
      // If fromDate is true, return ISO string for the start of the day
      return new Date(date.setHours(0, 0, 0, 0)).toISOString();
    } else if (toDate) {
      // If toDate is true, return ISO string for the end of the day
      return new Date(date.setHours(23, 59, 59, 999)).toISOString();
    } else {
      // Default case, return the ISO string for the given date
      return date.toISOString();
    }
  };

  const sendOnChange = (v: string) => {
    if (!v) {
      setError("");
      return onChange(name, getValueForOnChange(v));
    }
    if (onlyLegalAge) {
      if (legalAgeChecker(v)) {
        onChange(name, getValueForOnChange(v));
      } else {
        setInputText("");
        return setError("حداقل سن مورد نیاز 18 سال است");
      }
    }
    if (notFuture) {
      if (isFutureDate(v)) {
        setError("تاریخ وارد شده نباید آینده باشد");
        setInputText("");
        return onChange(name, undefined);
      } else {
        setError("");
        onChange(name, getValueForOnChange(v));
      }
    }
    if (futureOnly) {
      if (!isFutureDate(v)) {
        setInputText("");
        setError("تاریخ وارد شده نباید گذشته باشد");
        return onChange(name, undefined);
      } else {
        setError("");
        onChange(name, getValueForOnChange(v));
      }
    }
    if (minDate) {
      if (checkMinDate(v)) {
        setError("");
        return onChange(name, getValueForOnChange(v));
      } else {
        setInputText("");
        onChange(name, undefined);
        return setError(`تاریخ باید بعد از فیلد  '${minDate.label}' باشد`);
      }
    }
    if (maxDate) {
      if (!v) return setError("");
      if (checkMaxDate(v)) {
        setError("");
        return onChange(name, getValueForOnChange(v));
      } else {
        setInputText("");
        onChange(name, undefined);
        return setError(`تاریخ باید قبل از فیلد '${maxDate.label}' باشد`);
      }
    }
    return onChange(name, getValueForOnChange(v));
  };

  const getEndIcon = () => {
    return (
      <div
        className={`h-full flex justify-center items-center ml-[16px] absolute left-0 top-0 cursor-pointer z-[-1]
        }`}
        onMouseDown={mouseDownHandler}
      >
        <CalendarIcon
          className={`w-4 h-4 ${error ? "!text-error" : "!text-icon-color"} ${
            disabled ? "!text-disable" : "!text-icon-color"
          }`}
        />
      </div>
    );
  };

  return (
    <ModernDatePicker
      inputName={name}
      value={getDatePickerValue()}
      onChange={changeHandler}
      shouldHighlightWeekends
      renderInput={renderCustomInput}
      locale="fa"
      colorPrimary="rgba(239, 55, 78, 1)"
      colorPrimaryLight="rgba(103, 80, 164, 0.08)"
      calendarPopperPosition="auto"
      calendarClassName={`responsive-calendar`}
      wrapperClassName={`!w-full ${isFocused ? "!z-[99999]" : ""} ${className}`}
    />
  );
};

export default DatePicker;
