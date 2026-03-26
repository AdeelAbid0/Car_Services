import Button from "../ui/Button";
import Logo from "../../assets/svg/logo-partner.svg?react";
import ArrowLeft from "../../assets/svg/arrow-left.svg?react";
const AuthCardPartner = ({
  title,
  description,
  children,
  currentStep,
  totalSteps,
  onNext,
  onBack,
  loading,
}) => {
  const renderStepIndicators = () => {
    const steps = [];
    for (let i = 1; i <= totalSteps; i++) {
      steps.push(
        <span
          key={i}
          className={`w-6 h-1.5 rounded-full ${
            i <= currentStep ? "bg-primary" : "bg-background"
          }`}
        ></span>,
      );
    }
    return steps;
  };

  return (
    <div className="flex w-full gap-2 h-screen">
      <div className="flex flex-col items-center w-1/2 bg-white rounded-4xl">
        <div className="flex flex-col items-center gap-2 mt-11">
          <h1 className="text-primary font-medium text-[16px] leading-[129%]">
            Step {currentStep}/{totalSteps}
          </h1>
          <div className="flex gap-1">{renderStepIndicators()}</div>
        </div>
        <div className="flex h-full justify-center flex-col gap-1 text-center w-[56%]">
          <h1 className="text-[44px] leading-[129%]! text-foreground! font-bold!">
            {title}
          </h1>
          <p className="text-[16px] text-muted-foreground leading-[129%] font-medium mb-8">
            {description}
          </p>
          <div className="flex flex-col gap-3">{children}</div>
          <div className="flex w-full gap-2 mt-8">
            <Button
              type="default"
              label={"Go back"}
              width="full"
              prefixIcon={<ArrowLeft />}
              onClick={onBack}
              disabled={currentStep === 1}
            />

            <Button
              type="primary"
              loading={loading}
              label={currentStep === totalSteps ? "Submit" : "Continue"}
              onClick={onNext}
              width="full"
            />
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
