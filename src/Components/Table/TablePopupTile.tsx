import React from "react";

interface IProps {
  title: string;
  onClick: () => void;
  disabled?: boolean;
}

const TablePopupTile = ({ onClick, title, disabled }: IProps) => {
  const clickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (disabled) return;
    onClick();
  };

  return (
    <div
      className={`text-xs flex justify-center items-center whitespace-nowrap ${
        disabled
          ? "text-disable cursor-not-allowed"
          : "text-textInput hover:text-red-02 hover:bg-red-04 focus:text-red-02 focus:bg-red-04 cursor-pointer"
      }  py-2 px-4 h-8 w-full text-start`}
      onClick={clickHandler}
    >
      {title}
    </div>
  );
};

export default TablePopupTile;
