import CheckIcon from "../Assets/Icons/CheckIcon";
import { IStepperProps } from "../Interfaces/componentsInterface";

const Stepper = ({ image, steps, activeStep }: IStepperProps) => {
  const getIcon = (icon: JSX.Element, index: number) => {
    if (index < activeStep)
      return (
        <div className="w-8 h-8 flex justify-center items-center rounded-full bg-confirm">
          <CheckIcon className="text-white w-5 h-5" />
        </div>
      );
    return (
      <div
        className={`flex justify-center items-center w-8 h-8 border-2 rounded-full ${
          index === activeStep
            ? "border-red-02 text-red-02 bg-red-04"
            : "border-icon-color text-icon-color bg-opacity-0.08"
        }`}
      >
        <div>{icon}</div>
      </div>
    );
  };

  const isActive = (index: number) => {
    if (index <= activeStep) return true;
    return false;
  };

  return (
    <div className="flex flex-col justify-start items-center px-12 pt-7 pb-8 gap-[11px] bg-background shadow-4 border-[1px] border-borderColor rounded">
      <img src={image} className="w-[58px] h-[58px]" />
      <div className="whitespace-nowrap">
        {steps.map((step, index) => (
          <div
            className="flex flex-col justify-start items-start cursor-default"
            key={index}
          >
            <div className="flex flex-row gap-2 justify-start items-center">
              <div>{getIcon(step.icon, index)}</div>
              <div
                className={`title-small ${
                  isActive(index) ? "text-grayText" : "text-icon-color"
                }`}
              >
                {step.title}
              </div>
            </div>
            {index !== steps.length - 1 ? (
              <div
                className={`w-[2px] h-4 mr-[15px] mb-2 mt-1 ${
                  isActive(index) ? "bg-red-02" : "bg-opacity-0.12"
                }`}
              ></div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
