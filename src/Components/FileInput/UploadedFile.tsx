import PaperIcon from "Assets/Icons/PaperIcon";
import TrashcanIcon from "Assets/Icons/TrashcanIcon";

interface IProps {
  file: FormData;
  onDelete: () => void;
}

const UploadedFile = ({ file, onDelete }: IProps) => {
  return (
    <div className="w-full h-12 p-2 bg-red-04 flex flex-row justify-start items-center relative ltr gap-2 shadow-3 border-[1px] border-borderColor rounded">
      <div className="w-8 h-8 p-1 rounded border-[1px] border-red-02 !bg-white">
        <PaperIcon className="text-red-02 w-6 h-6" />
      </div>
      <div className="label-medium text-black">
        {file.get("fileName")?.toString()}
      </div>
      <div className="absolute right-2 top-3 cursor-pointer" onClick={onDelete}>
        <TrashcanIcon className="w-6 h-6 !text-gray2" />
      </div>
    </div>
  );
};

export default UploadedFile;
