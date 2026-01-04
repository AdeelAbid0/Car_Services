import { Button } from "antd";
import Logo from "../../assets/svg/logo-partner.svg?react";

const AuthCardPartner = ({
  title,
  description,
  children,
  currentStep = 1,
  totalSteps = 4,
  onNext,
  onBack,
}) => {
  const renderStepIndicators = () => {
    const steps = [];
    for (let i = 1; i <= totalSteps; i++) {
      steps.push(
        <span
          key={i}
          className={`w-6 h-1.5 rounded-full ${
            i <= currentStep ? "bg-[#9A85FF]" : "bg-[#F4F2FF]"
          }`}
        ></span>
      );
    }
    return steps;
  };

  return (
    <div className="flex w-full gap-2 h-screen">
      <div className="flex flex-col items-center w-1/2 bg-white rounded-4xl">
        <div className="flex flex-col items-center gap-2 mt-11">
          <h1 className="text-[#9A85FF] font-medium text-[16px] leading-[129%]">
            Step {currentStep}/{totalSteps}
          </h1>
          <div className="flex gap-1">{renderStepIndicators()}</div>
        </div>
        <div className="flex h-full justify-center flex-col gap-1 text-center w-[56%]">
          <h1 className="text-[44px] leading-[129%]! text-[#262626]! font-bold!">
            {title}
          </h1>
          <p className="text-[16px] text-[#737373] leading-[129%] font-medium mb-8">
            {description}
          </p>
          <div className="flex flex-col gap-3">{children}</div>
          <div className="flex w-full gap-2 mt-8">
            <Button
              type="default"
              className="w-full text-[#9A85FF]! bg-[#F4F2FF]! hover:bg-[#F4F2FF]! hover:text-[#9A85FF]!"
              onClick={onBack}
              disabled={currentStep === 1}
            >
              Go back
            </Button>
            <Button type="primary" className="w-full" onClick={onNext}>
              {currentStep === totalSteps ? "Submit" : "Continue"}
            </Button>
          </div>
        </div>
      </div>
      <div className="flex w-1/2 flex-col gap-7 p-11 bg-white rounded-4xl">
        <Logo className="shrink-0" />
        <div className="flex w-full justify-center">
          <img
            src="/Images/partner-register.png"
            alt="partner"
            className="object-cover h-[80vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthCardPartner;
