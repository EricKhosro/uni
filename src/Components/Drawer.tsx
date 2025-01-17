import { SwipeableDrawer } from "@mui/material";
import React from "react";
import FiltersIcon from "../Assets/Icons/FiltersIcon";
import CloseXIcon from "../Assets/Icons/CloseXIcon";

interface IProps {
  children: JSX.Element;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  anchor?: "right" | "left" | "top" | "bottom";
  className?: string;
}

const Drawer = ({
  children,
  isOpen,
  setIsOpen,
  anchor = "right",
  className,
}: IProps) => {
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsOpen(open);
    };

  React.useEffect(() => {
    if (isOpen)
      document.getElementById("body")?.classList.add("stop-scrolling");
    else document.getElementById("body")?.classList.remove("stop-scrolling");
  }, [isOpen]);

  return (
    <SwipeableDrawer
      anchor={anchor}
      open={isOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      className={className}
    >
      <div className="min-w-[400px]">
        <div className="flex flex-row justify-between w-full items-center border-b-[1px] border-opacity-0.12 py-[18px] px-6">
          <div className="flex flex-row justify-start items-center gap-2">
            <FiltersIcon className="w-6 h-6" />
            <div className="title-medium text-textInput">فیلتر ها</div>
          </div>
          <div onClick={() => setIsOpen(false)}>
            <CloseXIcon className="w-6 h-6 !text-grayText" />
          </div>
        </div>
        {children}
      </div>
    </SwipeableDrawer>
  );
};

export default Drawer;
