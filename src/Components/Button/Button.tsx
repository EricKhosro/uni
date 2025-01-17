import { MouseEventHandler } from "react";
import { Button as MuiButton } from "@mui/material";
import "./btnStyles.css";
import Loading from "../Loading/Loading";

export interface IButtonProps {
  onClick: () => void;
  text: string | JSX.Element;
  className?: string;
  disabled?: boolean;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  isLoading?: boolean;
  type: "primary" | "secondary" | "text" | "elevated";
}

const Button = ({
  onClick,
  text,
  className,
  disabled,
  startIcon,
  endIcon,
  isLoading,
  type,
}: IButtonProps) => {
  const onButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (isLoading) return;
    onClick();
  };

  const getLoadingClassnames = () => {
    switch (type) {
      case "primary":
        return disabled ? "!text-opacity-0.12" : "!text-white";

      case "secondary":
        return disabled ? "!text-opacity-0.12" : "!text-red-01";

      case "elevated":
        return disabled ? "!text-opacity-0.12" : "!text-red-01";

      case "text":
        return disabled ? "!text-opacity-0.12" : "!text-red-01";
    }
  };

  const getLoading = () => <Loading className={getLoadingClassnames()} />;

  const getStartIcon = () => {
    if (isLoading) return <Loading className={getLoadingClassnames()} />;
    if (startIcon) return startIcon;
    return <></>;
  };

  const getEndIcon = () => {
    if (isLoading) return <Loading className={getLoadingClassnames()} />;
    if (endIcon) return endIcon;
    return <></>;
  };

  return (
    <MuiButton
      disabled={disabled || false}
      onClick={onButtonClick}
      className={`whitespace-nowrap base-button title-medium ${type}-button ${className}`}
      fullWidth
      type="button"
      startIcon={getStartIcon()}
      endIcon={getEndIcon()}
    >
      {isLoading ? getLoading() : text}
    </MuiButton>
  );
};

export default Button;
