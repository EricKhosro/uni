import ModalBtnGroup from "Components/Button/ModalBtnGroup";
import React from "react";
import Modal from "./Modal";

interface IProps {
  text: string | JSX.Element;
  onConfirm: () => void;
  onCancel: () => void;
  isLoading?: boolean;
  isOpen: boolean;
  modalBoxClassName?: string;
}

const ConfirmModal = ({
  onCancel,
  onConfirm,
  text,
  isLoading,
  isOpen,
  modalBoxClassName,
}: IProps) => {
  const getUI = () => (
    <div className="flex flex-col justify-end items-end w-full p-2 h-full">
      <div className="title-medium2 text-center text-on-surface w-full">
        {text}
      </div>
      <div className="w-[200px] flex flex-row justify-start items-center gap-2 mt-8">
        <ModalBtnGroup
          onCancel={onCancel}
          onConfirm={onConfirm}
          isLoading={isLoading}
        />
      </div>
    </div>
  );

  return (
    <Modal
      UI={getUI()}
      isOpen={isOpen}
      onClose={onCancel}
      modalBoxClassName={modalBoxClassName}
    />
  );
};

export default ConfirmModal;
