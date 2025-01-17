import { ICommonFormTemplateProps } from "../../Interfaces/componentsInterface";
import FormTemplate from "./FormTemplate";

const CommonFormTemplate = ({
  desc,
  form,
  icon,
  title,
}: ICommonFormTemplateProps) => {
  const getHeader = () => (
    <div className="flex flex-row justify-start items-center gap-4">
      <div
        className={`flex justify-center items-center w-10 h-10 border-2 rounded-full border-red-02 text-red-02 bg-red-04`}
      >
        <div>{icon}</div>
      </div>
      <div className="flex flex-col justify-start items-start gap-1">
        <div className="title-small text-red-02">{title}</div>
        <div className="label-medium text-gray2">{desc}</div>
      </div>
    </div>
  );

  const getForm = () => <div className="p-8 w-full">{form}</div>;

  return <FormTemplate form={getForm()} header={getHeader()} />;
};

export default CommonFormTemplate;
