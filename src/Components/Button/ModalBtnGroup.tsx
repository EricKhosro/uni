import React from "react";
import Button from "./Button";

interface IProps {
  onConfirm: () => void;
  onCancel: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  confirmText?: string | JSX.Element;
}

const ModalBtnGroup = ({
  onCancel,
  onConfirm,
  isLoading,
  disabled,
  confirmText,
}: IProps) => {
  return (
    <div className="w-[200px] flex flex-row justify-start items-center gap-2">
      <Button
        text={confirmText || "تایید"}
        onClick={onConfirm}
        type="primary"
        isLoading={isLoading}
        disabled={disabled}
      />

      <Button text="انصراف" onClick={onCancel} type="secondary" />
    </div>
  );
};

export default ModalBtnGroup;
