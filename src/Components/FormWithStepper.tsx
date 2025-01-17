import { IStepperProps } from "../Interfaces/componentsInterface";
import Stepper from "./Stepper";

interface IProps extends IStepperProps {
  form: JSX.Element;
}
//xs:gap-16 2xl:gap-[180px]
const FormWithStepper = ({ activeStep, form, image, steps }: IProps) => {
  return (
    <div className="flex flex-row justify-start items-start  w-full">
      <Stepper activeStep={activeStep} image={image} steps={steps} />
      <div className="w-full flex flex-row justify-center items-center">
        {form}
      </div>
    </div>
  );
};

export default FormWithStepper;
