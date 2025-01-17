import moment from "jalali-moment";
import mmoment from "moment";
import {
  ITextInputValidatorResponse,
  TextInputKinds,
} from "../Interfaces/Components-Interfaces/textInput";
import { IRequiredFieldsChecker } from "../Interfaces/utilities";
import { DayValue } from "@hassanmojab/react-modern-calendar-datepicker";

export const addSeperatorToInput = (input: string, kind: string = "") => {
  if (!input) return "";

  if (kind === "price") {
    return printPrice(input);
  } else if (kind === "pan") {
    return printPan(input);
  } else return input;

  // if (!input) return "";
  // if (typeof input === "string") {
  //   if (input.length <= 3) return input;
  //   return parseInt(input.replaceAll(",", "")).toLocaleString();
  //   // return parseInt(input).toLocaleString();
  // }
  // return input.toLocaleString();
};

export function printPrice(x: string) {
  if (!x) return "";

  // x = fixNumbers(x);
  // x = removeNonNumber(x);
  // x = parseInt(x).toString();

  // return MytoLocaleString(x);
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function printPan(x: string): string {
  if (!x) return "";

  x = fixNumbers(x);
  x = removeNonNumber(x);

  return addDashToPanCard(x);
}

export function fixNumbers(str: string): string {
  var persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ];
  var arabicNumbers = [
    /٠/g,
    /١/g,
    /٢/g,
    /٣/g,
    /٤/g,
    /٥/g,
    /٦/g,
    /٧/g,
    /٨/g,
    /٩/g,
  ];
  for (var i = 0; i < 10; i++) {
    str = str
      .replace(persianNumbers[i], i.toString())
      .replace(arabicNumbers[i], i.toString());
  }
  return str;
}

export function removeNonNumber(str: string) {
  if (typeof str === "string") {
    str = str.replace(/[^\x30-\x39]/g, "");
  }
  return str;
}

export function addDashToPanCard(value: string) {
  // return value.replace(/[^0-9]/g, "").replace(/\W/gi, '').replace(/(.{4})/g, '$1-');

  var result = "";

  for (var i = 0; i < value.length; i++) {
    if (i >= 16) break;

    if (i % 4 === 0 && i > 0) result = result + "-";

    result = result + value.charAt(i);
  }

  return result;
}

export function MytoLocaleString(s: any) {
  let s1 = s.toLocaleString();
  const p = Math.floor(s) + 0.1; // similar value but decimal
  const p1 = p.toLocaleString();
  let index;
  let point;
  for (index = p1.length - 1; index > 0; index--) {
    // find decimal point in dummy
    point = p1.charAt(index);
    if (point < "0" || point > "9") break;
  }
  if (index > 0) {
    index = s1.lastIndexOf(point); // find last point in string
    if (index > 0) s1 = s1.slice(0, index); // truncate decimal part

    return s1;
  }
  return "";
}

export function getPan(x: string) {
  if (!x) return "";

  x = fixNumbers(x);
  x = removeNonNumber(x);

  return x;
}

export function getPrice(x: string) {
  if (!x) return 0;

  return x.replaceAll(",", "");
}

export function formatDate(date: Date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

export const checkForNumbersOnly = (num: string): boolean => {
  if (num === "") return true; //empty string for when we want to delete everything
  const re: RegExp = /^0*[0-9]+$/;
  return re.test(num);
};

export const validateEmail = (email: string): boolean => {
  const re: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validateUserPass = (str: string) => {
  const regex = /(^$)|(^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9-]+$)/;
  return regex.test(str);
};

export const validateDate = (date: string): boolean => {
  const re: RegExp =
    /^(?:1[3-4][0-9]{2}|130[6-9]|145[0-3])\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/;
  return re.test(date);
};

export const checkRequiredFields = (
  formValues: any,
  requiredFields: IRequiredFieldsChecker[]
) => {
  // return requiredFields.every((f) => formValues[f]);
  for (let r of requiredFields) {
    if (!formValues[r.name] && formValues[r.name] !== 0) return false;
    if (!r.checker(formValues[r.name])) return false;
  }
  return true;
};

export const checkForEmail = (email: string): boolean => {
  const re: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const checkForFarsiAlphabetOnly = (input: string): boolean => {
  if (!input) return true;
  const re: RegExp = /^[\u0600-\u06FF\s]+$/;
  return re.test(input);
};

export const checkForFarsiAlphabetAndNumbers = (input: string): boolean => {
  if (!input) return true;
  const re: RegExp = /^[\u0600-\u06FF0-9 ]*$/;
  return re.test(input);
};

export const checkForEnglishAlphabetOnly = (input: string): boolean => {
  if (!input) return true;
  const re: RegExp = /^[a-zA-Z ]+$/;
  return re.test(input);
};

export const checkForEnglishAlphabetAndNumbers = (input: string): boolean => {
  if (!input) return true;
  const re: RegExp = /^[a-zA-Z0-9 ]*$/;
  return re.test(input);
};
export const checkForUsername = (input: string): boolean => {
  //accepts a to z , numbers  "." and "-"
  if (!input) return true;
  const re: RegExp = /^[a-zA-Z0-9 .-]*$/;
  return re.test(input);
};

export const getPercent = (x: string) => {
  const percentRegex: RegExp = /^(100(\.0{1,2})?|[1-9]?\d(\.\d{0,2})?)$/;

  if (percentRegex.test(x)) return true;
  return false;
};

export const lengthChecker = (value: string, length: number) => {
  if (value.length === length) return true;
  return false;
};

export const mobileChecker = (value: string) => {
  if (!value || !value.length) return false;
  if (value.length === 11 && value.slice(0, 2).toString() === "09") return true;
  return false;
};

export const maxLengthChecker = (value: string, length: number) => {
  if (value.length <= length) return true;
  return false;
};

export const minLengthChecker = (value: string, length: number) => {
  if (value.length < length) return false;
  return true;
};

export const englishAlphabetAndNumbersAndSpecialCharactersChecker = (
  v: string
) => {
  if (!v) return true;
  const re: RegExp = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?/~\\-]+$/;
  return re.test(v);
};

export const truthyChecker = (value: any) => !!value;
export const truthyOrZeroChecker = (value: any) => {
  if (!value && value !== 0) return false;
  return true;
};

// export const getFromDateToDateDefaultValues = () => {
//   const currentDate = new Date();

//   const sevenDaysAgo = new Date();
//   sevenDaysAgo.setDate(currentDate.getDate() - 7);

//   const formattedCurrentDate = formatDate(currentDate);
//   const formattedSevenDaysAgo = formatDate(sevenDaysAgo);

//   // Function to format date in YYYY-MM-DD
//   function formatDate(date: Date): string {
//     const year = date.getFullYear();
//     const month = (date.getMonth() + 1).toString().padStart(2, "0");
//     const day = date.getDate().toString().padStart(2, "0");
//     return `${year}-${month}-${day}`;
//   }

//   return { fromDate: formattedSevenDaysAgo, toDate: formattedCurrentDate };
// };

export const getFromDateToDateDefaultValues = () => {
  enum DateType {
    FromDate,
    ToDate,
  }

  // Get the current date
  const currentDate = new Date();
  currentDate.setMinutes(currentDate.getMinutes() + 2);
  // Calculate the date seven days ago
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(currentDate.getDate() - 7);

  // Format the current date and seven days ago with time in ISO format
  const formattedCurrentDate = formatDateWithTime(currentDate, DateType.ToDate);
  const formattedSevenDaysAgo = formatDateWithTime(
    sevenDaysAgo,
    DateType.FromDate
  );

  // Function to format date with time in ISO format and set time part to T00:00:00+03:30
  function formatDateWithTime(date: Date, dateType: DateType): string {
    if (dateType === DateType.FromDate)
      return date.toISOString().split("T")[0] + "T00:00:00";
    else return date.toISOString().split("T")[0] + "T23:59:59";
  }

  // Return an object with fromDate and toDate properties
  return { fromDate: formattedSevenDaysAgo, toDate: formattedCurrentDate };
};

export function toJalali(isoDate: string): string {
  if (!isoDate) return "";
  const jalaliDate = moment(isoDate).format("jYYYY-jMM-jDDTHH:mm:ss.SSSZ");
  return jalaliDate;
}

export const checkTextInputValidation = (
  value: string,
  kind?: TextInputKinds
): ITextInputValidatorResponse => {
  if (!kind)
    return {
      error: null,
      isValid: true,
    };
  switch (kind) {
    case "price":
    case "pan":
    case "number": {
      let error: string | null = null;
      console.log({ value });

      if (!value)
        return { error: "لطفا فقط از اعداد استفاده کنید", isValid: false };
      const res = checkForNumbersOnly(
        value?.toString().replaceAll("-", "")?.replaceAll(",", "")
      );

      if (!res) error = "لطفا فقط از اعداد استفاده کنید";
      if (res) error = "";
      return { error, isValid: res };
    }

    case "farsiAlphabet": {
      let error: string | null = null;

      const res = checkForFarsiAlphabetOnly(value);
      if (!res) error = "لطفا فقط از حروف فارسی استفاده کنید";
      if (res) error = "";

      return {
        error,
        isValid: res,
      };
    }
    case "farsiAlphabetAndNumbers": {
      let error: string | null = null;

      const res = checkForFarsiAlphabetAndNumbers(value);
      if (!res) error = "لطفا فقط از حروف فارسی و اعداد استفاده کنید";
      if (res) error = "";

      return {
        error,
        isValid: res,
      };
    }

    case "englishAlphabet": {
      let error: string | null = null;
      const res = checkForEnglishAlphabetOnly(value);
      if (!res) error = "لطفا فقط از حروف انگلیسی استفاده کنید";
      if (res) error = "";

      return {
        error,
        isValid: res,
      };
    }

    case "englishAlphabetAndNumbers": {
      let error: string | null = null;
      const res = checkForEnglishAlphabetAndNumbers(value);
      if (!res) error = "لطفا فقط از حروف انگلیسی و اعداد استفاده کنید";
      if (res) error = "";

      return {
        error,
        isValid: res,
      };
    }
    case "cellPhoneNumber": {
      let error: string | null = null;
      const res = value.length <= 11 && checkForNumbersOnly(value);
      if (!res) error = "لطفا در وارد کردن شماره تلفن همراه دقت کنید";
      if (res) error = "";

      return {
        error,
        isValid: res,
      };
    }
    case "phoneNumber": {
      let error: string | null = null;
      let res = checkForNumbersOnly(value);
      if (!res) error = "لطفا در وارد کردن شماره تلفن همراه دقت کنید";
      if (res) error = "";
      if (value[0] === "0") {
        error = "تلفن ثابت نباید با صفر شروع شود";
        res = false;
      }

      return {
        error,
        isValid: res,
      };
    }
    case "englishAlphabetAndNumbersAndSpecialCharacters": {
      let error: string | null = null;
      const res = englishAlphabetAndNumbersAndSpecialCharactersChecker(value);
      if (!res) error = "لطفا از حروف انگلیسی اعداد و !@#$... استفاده کنید";
      if (res) error = "";

      return {
        error,
        isValid: res,
      };
    }
    case "username": {
      let error: string | null = null;
      const res = checkForUsername(value);
      if (!res) error = "لطفا از حروف انگلیسی اعداد و . - استفاده کنید";
      if (res) error = "";

      return {
        error,
        isValid: res,
      };
    }

    case "percent": {
      let error: string | null = null;
      const res = getPercent(value);
      if (!res) error = "لطفا در وارد کردن درصد توجه کنید";
      if (res) error = "";

      return {
        error,
        isValid: res,
      };
    }

    default:
      return {
        error: null,
        isValid: true,
      };
  }
};

// } else if (kind === "phoneNumber") {
//   if (newValue.length) {
//     if (newValue[0] === "0")
//       setInputError("تلفن ثابت نباید با صفر شروع شود");
//     else {
//       if (newValue.length <= 8 && checkForNumbersOnly(newValue)) {
//         onChange(name, newValue);
//         setInputError("");
//       } else setInputError("لطفا در وارد کردن شماره تلفن ثابت دقت کنید");
//     }
//   }
// } else {
//   onChange(name, newValue);

//   setInputError("");
// }

export function calculateAge(date: string): any {
  if (!date) return "";

  const birthday = new Date(date);
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const legalAgeChecker = (date: string): boolean => {
  if (calculateAge(date) !== "" && calculateAge(date) >= 18) return true;
  return false;
};

export function isFutureDate(date: string): boolean {
  try {
    const currentDate = new Date();
    const d = new Date(date);
    return d > currentDate;
  } catch {
    return false;
  }
}

export const checkForNotFutureDate = (date: string): boolean =>
  !isFutureDate(date);

export const convertJalaliToGeorgianISO = (
  jalaliDate: string,
  resetTime?: boolean
) => {
  if (jalaliDate === "") return "";
  const jalaliDataWithEnglishNumbers = jalaliDate.replace(/[۰-۹]/g, (d: any) =>
    "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString()
  );

  if (!validateDate(jalaliDataWithEnglishNumbers)) {
    return "";
  }

  moment.locale("en");
  const res = new Date(
    moment
      .from(jalaliDataWithEnglishNumbers, "fa", "YYYY/MM/DD")
      .format()
      .toString()
  ).toISOString();
  if (resetTime) {
    const splitted = res.split("T");
    return splitted[0] + "T00:00:00";
  }
  return res;
};

export function parseBool(value: string): boolean | undefined {
  const lowerCaseValue = value?.toLowerCase().trim();
  if (lowerCaseValue === "true") {
    return true;
  } else if (lowerCaseValue === "false") {
    return false;
  } else {
    return undefined; // Indicates the value couldn't be parsed as boolean
  }
}

export function convertToJalali(georgianDate: string | null): DayValue {
  if (!georgianDate) return null;
  try {
    const formatedGeorgianDate = mmoment(georgianDate).format("YYYY-MM-DD");

    moment.locale("fa");
    const formatedJalaliDate = moment
      .from(formatedGeorgianDate, "en", "YYYY-MM-DD")
      .format("YYYY-MM-DD");

    return {
      year: parseInt(formatedJalaliDate.split("-")[0]),
      month: parseInt(formatedJalaliDate.split("-")[1]),
      day: parseInt(formatedJalaliDate.split("-")[2]),
    };
  } catch {
    return null;
  }
}
