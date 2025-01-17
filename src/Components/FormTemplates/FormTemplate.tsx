interface IProps {
  header: JSX.Element;
  form: JSX.Element;
}

const FormTemplate = ({ form, header }: IProps) => {
  return (
    <div className="w-full flex flex-col justify-start items-start border-[1px] border-opacity-0.08 rounded-[4px]">
      <div className="w-full h-14 flex justify-start items-center bg-red-04 border-b-[1px] border-opacity-0.08 rounded-s-[2px] pr-16 px-3">
        {header}
      </div>
      <div className="bg-white w-full min-h-48 flex justify-start items-center">
        {form}
      </div>
    </div>
  );
};

export default FormTemplate;
