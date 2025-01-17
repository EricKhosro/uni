import Button from "Components/Button/Button";
import "./modal.css";
import CloseIcon from "@mui/icons-material/Close";

interface IModalProps {
  UI: JSX.Element;
  onClose: () => void;
  isOpen: boolean;
  title?: string;
  containerClassName?: string;
  modalBoxClassName?: string;
  onSubmit?: () => void;
  submitBtnDisabled?: boolean;
  withBtns?: boolean;
  submitBtnText?: string | JSX.Element;
  readonly?: boolean;
}

const Modal = ({
  UI,
  onClose,
  isOpen,
  title,
  containerClassName,
  modalBoxClassName,
  onSubmit,
  submitBtnDisabled,
  withBtns,
  submitBtnText,
  readonly = false,
}: IModalProps) => {
  if (!isOpen) return <></>;
  return (
    <div className={`modal-container !inset-0 ${containerClassName}`}>
      <div
        className={`modal-box relative !max-h-full !overflow-y-auto ${modalBoxClassName}`}
      >
        {title ? (
          <div className="w-full bg-red-04 py-3 px-6 flex flex-row justify-between items-center">
            <div className="text-red-02 title-medium">{title}</div>
          </div>
        ) : (
          <></>
        )}
        <div
          className="absolute top-1 left-2 z-[1000]"
          onClick={(e) => e.stopPropagation()}
        >
          <CloseIcon
            className="!text-grayText !w-5 !h-5 !cursor-pointer z-[999999]"
            onClick={onClose}
          />
        </div>
        <div
          className="p-5 overflow-auto w-full h-full relative"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {readonly ? (
            <div className="w-full !h-full inset-0 z-[999] bg-transparent absolute" />
          ) : (
            <></>
          )}
          {UI}
          {withBtns ? (
            <div className="flex flex-row justify-start items-center gap-2 w-[200px] mr-auto">
              <Button text="انصراف" onClick={onClose} type="secondary" />
              <Button
                text={submitBtnText ? submitBtnText : "ثبت نهایی"}
                onClick={onSubmit ? onSubmit : () => {}}
                type="primary"
                disabled={submitBtnDisabled}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
