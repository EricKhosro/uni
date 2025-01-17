import CommonFormTemplate from "./FormTemplates/CommonFormTemplate";
import { ICommonFormTemplateProps } from "../Interfaces/componentsInterface";
import Button from "./Button/Button";
import { useNavigate } from "react-router-dom";
import PlusIcon from "../Assets/Icons/PlusIcon";
interface IAddNewData {
  text: string;
  pageUrl: string;
}

interface IPageTemplateProps {
  addNewData?: IAddNewData;
  formTemplate: ICommonFormTemplateProps;
}

const PageTemplate = ({ addNewData, formTemplate }: IPageTemplateProps) => {
  const navigate = useNavigate();

  const getBtn = () => {
    if (!addNewData) return <></>;
    return (
      <div className="absolute left-0 -top-14">
        <Button
          onClick={() => navigate(addNewData.pageUrl)}
          text={
            <div className="flex flex-row justify-start items-center gap-2">
              <div>{addNewData.text}</div>
              <PlusIcon className="w-5 h-5 !text-white" />
            </div>
          }
          type="primary"
        />
      </div>
    );
  };

  return (
    <div className="w-full relative mt-3">
      {getBtn()}
      <CommonFormTemplate
        title={formTemplate.title}
        form={formTemplate.form}
        desc={formTemplate.desc}
        icon={formTemplate.icon}
      />
    </div>
  );
};

export default PageTemplate;
