import { toast } from "react-toastify";
// import uploadFileImg from "../../Assets/Images/uploadFile.png";
import Button from "../Button/Button";
import { useState, useRef } from "react";
import UploadFileIcon from "Assets/Icons/UploadFileIcon";
import PaperIcon from "Assets/Icons/PaperIcon";

type FileType =
  | "everything"
  | "pdf"
  | "image"
  | "jpgOnly"
  | "dsv"
  | "excel"
  | "csv"
  | "text"
  | "pem"
  | "csv&Excel"
  | ".txt,.key,.pem";

interface IProps {
  name: string;
  swaggerName?: string;
  value: FormData | null;
  onChange: (
    name: string,
    value: FormData | null,
    fileTypeName: string,
    fileTypeNumber: number
  ) => void;
  fileType?: FileType;
  disabled?: boolean;
  fileTypeName?: string;
  fileTypeNumber?: number;
  UI?: JSX.Element;
  className?: string;
}

const FileInput = ({
  name,
  value,
  onChange,
  fileType = "everything",
  swaggerName = "uploadedFile",
  disabled = false,
  fileTypeName,
  fileTypeNumber,
  UI,
  className,
}: IProps) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const getFileExtention = () => {
    switch (fileType) {
      case "jpgOnly":
        return ".jpg";
      case "image":
        return "image/png, image/gif, image/jpeg";
      case "pdf":
        return "application/pdf";
      case "dsv":
        return "text/dsv, .dsv";
      case "excel":
        return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel";
      case "csv":
        return ".csv, text/csv";
      case "csv&Excel":
        return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .csv, text/csv";
      case "text":
        return ".txt";
      case "pem":
        return ".pem";
      case ".txt,.key,.pem":
        return ".txt,.key,.pem";
    }
  };

  const uploadBtnClickHandler = () => {
    if (value) return;
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.click();
    }
  };

  const onChangeHandler = (file: File) => {
    // setFile(file);
    // if (!getFileExtention()?.toString().includes(file.type))
    //   return toast.error(`فایل باید از نوع ${getFileExtention()} باشد`);

    const data = new FormData();
    data.append(swaggerName, file, file.name);
    data.append("title", name);
    data.append("fileName", file.name);

    onChange(name, data, fileTypeName || "", fileTypeNumber || -1);
  };

  const handleDrag = function (e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function (e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();

    if (disabled) return;
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      if (!fileType || fileType === "everything") {
        onChangeHandler(e.dataTransfer.files[0]);
        return;
      }
      if (
        !e.dataTransfer.files[0].type &&
        e.dataTransfer.files[0].name.split(".")[
          e.dataTransfer.files[0].name.split(".").length - 1
        ] === "dsv"
      ) {
        if (fileType === "dsv") {
          onChangeHandler(e.dataTransfer.files[0]);
          return;
        } else
          toast.error(
            `فرمت فایل انتخاب شده درست نیست لطفا فایل ${fileType} انتخاب کنید`
          );
      } else if (
        e.dataTransfer.files[0].type &&
        getFileExtention()?.includes(e.dataTransfer.files[0].type)
      ) {
        onChangeHandler(e.dataTransfer.files[0]);
        return;
      } else
        toast.error(
          `فرمت فایل انتخاب شده درست نیست لطفا فایل ${fileType} انتخاب کنید`
        );
    }
  };

  const handleInputChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (disabled) return;

    if (e.target.files && e.target.files[0]) {
      if (!fileType || fileType === "everything") {
        onChangeHandler(e.target.files[0]);
        return;
      }
      if (
        !e.target.files[0].type &&
        e.target.files[0].name.split(".")[
          e.target.files[0].name.split(".").length - 1
        ] === "dsv"
      ) {
        if (fileType === "dsv") {
          onChangeHandler(e.target.files[0]);
          return;
        } else
          toast.error(
            `فرمت فایل انتخاب شده درست نیست لطفا فایل ${fileType} انتخاب کنید`
          );
      } else if (
        fileType === ".txt,.key,.pem" &&
        fileType
          .split(",")
          .includes(
            "." +
              e.target.files[0].name.split(".")[
                e.target.files[0].name.split(".").length - 1
              ]
          )
      ) {
        onChangeHandler(e.target.files[0]);
        return;
      } else if (
        !e.target.files[0].type &&
        e.target.files[0].name.split(".")[
          e.target.files[0].name.split(".").length - 1
        ] === "pem"
      ) {
        if (fileType === "pem") {
          onChangeHandler(e.target.files[0]);
          return;
        } else
          toast.error(
            `فرمت فایل انتخاب شده درست نیست لطفا فایل ${fileType} انتخاب کنید`
          );
      } else if (
        e.target.files[0].type &&
        getFileExtention()?.includes(e.target.files[0].type)
      ) {
        onChangeHandler(e.target.files[0]);
        return;
      } else
        toast.error(
          `فرمت فایل انتخاب شده درست نیست لطفا فایل ${fileType} انتخاب کنید`
        );
    }
  };

  return (
    <form
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      // className={`w-60 h-60 border-2 border-dashed ${
      //   dragActive ? "border-red-01" : "border-gray3"
      // } ${
      //   disabled ? "cursor-not-allowed" : "cursor-pointer"
      // } flex flex-col justify-start items-center gap-4 px-[70px] pb-3 pt-8 rounded-[8px] z-[11] ${className}`}
      onClick={!disabled ? uploadBtnClickHandler : () => {}}
      className="w-full"
    >
      <input
        type="file"
        className="hidden"
        onChange={handleInputChange}
        ref={inputRef}
        multiple={false}
        accept={getFileExtention()}
      />
      {UI ? (
        UI
      ) : (
        <div className="flex flex-col justify-start items-center border-2 border-dashed border-borderColor p-3 cursor-pointer rounded">
          <PaperIcon
            className={`w-8 h-8 ${disabled ? "!text-disable" : "!text-gray2"}`}
          />
          <div
            className={`label-medium ${
              disabled ? "!text-disable" : "!text-on-surface"
            }`}
          >
            کشیدن و انداختن
          </div>
        </div>
      )}
    </form>
  );
};

export default FileInput;
