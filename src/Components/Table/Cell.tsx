import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { addSeperatorToInput } from "Utilities/inputUtilities";

interface IProps {
  type: string | undefined;
  headerName: string;
  clonedRow: any;
}

const Cell = ({ clonedRow, headerName, type }: IProps) => {
  function unCapitalizeFirstLetter(input: string): string {
    return input.charAt(0).toLowerCase() + input.slice(1);
  }

  const val = clonedRow[unCapitalizeFirstLetter(headerName)];
  const className =
    clonedRow[unCapitalizeFirstLetter(headerName) + "Classname"];
  if (typeof val === "number" && val % 1 !== 0)
    return (
      <div dir="ltr" className={className ? className : ""}>
        {val.toFixed(2)}
      </div>
    );

  switch (type) {
    case "Price":
      if (val)
        return (
          <div className={`ltr ${className ? className : ""}`}>
            {addSeperatorToInput(val, "price")}
          </div>
        );
      return <div>-</div>;

    case "Normal":
      return <div className={className ? className : ""}>{val}</div>;

    case "Boolean":
      if (val)
        return (
          <CheckIcon
            className={className ? className : ""}
            color="success"
            fontSize="small"
          />
        );
      return (
        <CloseIcon
          className={className ? className : ""}
          color="error"
          fontSize="small"
        />
      );

    case "Link":
      return (
        <a
          href={val}
          className={`urderline text-blue-400 hover:text-blue-800 ${
            className ? className : ""
          }`}
          target="_blank"
        >
          URL
        </a>
      );

    default: {
      if (val) return <div className={className ? className : ""}>{val}</div>;
      return <b>-</b>;
    }
  }
};

export default Cell;
