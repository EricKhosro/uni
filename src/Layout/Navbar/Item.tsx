import { ISVGProps } from "Interfaces/Components-Interfaces/iconInterfaces";
import { Link } from "react-router-dom";

interface IProps {
  checkIsActive: (url: string) => boolean;
  title: string;
  url: string;
  Icon: (url: string, isActive: boolean) => JSX.Element;
}

const Item = ({ checkIsActive, title, url, Icon }: IProps) => {
  return (
    <Link
      className={`w-full h-12 Text-16-S flex justify-start items-center pr-2 ${
        checkIsActive(url)
          ? "bg-red-04 text-red-01 border-l-[5px] border-red-01"
          : "bg-white text-gray"
      }`}
      to={url}
    >
      <div className="flex flex-row justify-start items-center gap-2">
        {Icon(url, checkIsActive(url))}
        <div>{title}</div>
      </div>
    </Link>
  );
};

export default Item;
