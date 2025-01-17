import { useEffect, useState } from "react";
import Modal from "./Modal";
import ConfirmModal from "./ConfirmModal";
import FullScreenLoading from "Components/Loading/FullScreenLoading";

interface IMainModalProps {
  UI: JSX.Element;
  title?: string;
  containerClassName?: string;
  modalBoxClassName?: string;
  submitBtnDisabled?: boolean;
  withBtns?: boolean;
}

interface IConfirmModalProps {
  text: string | JSX.Element;
  modalBoxClassName?: string;
}

interface IProps {
  mainModal: IMainModalProps;
  confirmModal: IConfirmModalProps;
  onClose: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
}

enum OpenModal {
  Main,
  Confirm,
}

const ModalWithConfirmation = ({
  confirmModal,
  mainModal,
  onClose,
  onConfirm,
  isLoading,
}: IProps) => {
  const [openModal, setOpenModal] = useState<OpenModal>(OpenModal.Main);

  return (
    <>
      {isLoading ? <FullScreenLoading /> : <></>}
      <Modal
        UI={mainModal.UI}
        isOpen={openModal === OpenModal.Main}
        onClose={onClose}
        modalBoxClassName={mainModal.modalBoxClassName}
        onSubmit={() => setOpenModal(OpenModal.Confirm)}
        submitBtnDisabled={mainModal.submitBtnDisabled}
        title={mainModal.title}
        containerClassName={mainModal.containerClassName}
        withBtns={mainModal.withBtns}
      />
      <ConfirmModal
        isOpen={openModal === OpenModal.Confirm}
        onCancel={() => setOpenModal(OpenModal.Main)}
        onConfirm={onConfirm}
        text={confirmModal.text}
        modalBoxClassName={confirmModal.modalBoxClassName}
      />
    </>
  );
};

export default ModalWithConfirmation;
