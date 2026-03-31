import { Radio } from "antd";
import { useState } from "react";
import VisaLogo from "../../../assets/svg/visa-logo.svg?react";
import EasypaisaLogo from "../../../assets/svg/easypaisa-logo.svg?react";
import JazzcashLogo from "../../../assets/svg/jazzcash-logo.svg?react";
import ArrowRight from "../../../assets/svg/arrow-right.svg?react";
import CardDetails from "../components/PaymentComponents/CardDetails";
import LoadingPayment from "../components/PaymentComponents/LoadingPayment";
import PaymentSuccess from "../components/PaymentComponents/PaymentSuccess";
import Button from "../../../components/ui/Button";

const SelectPaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  const handleRadioChange = (method) => {
    setSelectedMethod(method);
  };

  const handleBreadcrumbClick = (stepId) => {
    if (stepId < currentStep) {
      setCurrentStep(stepId);
    }
  };
  const getStep2Breadcrumb = () => {
    if (selectedMethod === "debit") return "Debit Card";
    if (selectedMethod === "paypal") return "PayPal";
    if (selectedMethod === "easypaisa") return "Easypaisa";
    if (selectedMethod === "jazzcash") return "Jazzcash";
    return "Payment Details";
  };

  const getFullBreadcrumb = () => {
    if (currentStep === 1) {
      return "Select Payment Method";
    } else if (currentStep === 2) {
      return `Select Payment Method › ${getStep2Breadcrumb()}`;
    } else if (currentStep === 3) {
      return `Select Payment Method › ${getStep2Breadcrumb()} › Processing`;
    } else {
      return `Select Payment Method › ${getStep2Breadcrumb()} › Success`;
    }
  };

  return (
    <div className="flex w-full justify-center h-full overflow-auto">
      <div className="flex w-[72%] flex-col gap-6 h-full py-11">
        {/* Static Heading - Same for all components */}
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold! text-foreground leading-11">
            Payment Method
          </h1>
          <p className="text-[16px] font-normal text-muted-foreground leading-6">
            Add or manage your payment options for quick and secure checkout.
          </p>
        </div>

        <div className="mt-4 flex w-full justify-center">
          <div className="flex max-w-87 items-center gap-1 text-sm text-muted-foreground">
            {getFullBreadcrumb()
              .split(" › ")
              .map((part, index, array) => (
                <div key={index} className="flex items-center">
                  <button
                    onClick={() => {
                      // Determine which step to go to based on index
                      let targetStep = 1;
                      if (index === 0) targetStep = 1;
                      else if (index === 1) targetStep = 2;
                      else if (index === 2)
                        targetStep = currentStep === 3 ? 3 : 4;

                      handleBreadcrumbClick(targetStep);
                    }}
                    className={`
                    ${
                      index === array.length - 1
                        ? "text-foreground font-medium cursor-default"
                        : "text-muted-foreground hover:text-primary cursor-pointer hover:underline"
                    }
                    transition-colors duration-200
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `}
                    disabled={index === array.length - 1}
                  >
                    {part}
                  </button>
                  {index < array.length - 1 && (
                    <span className="mx-1 text-muted-foreground">›</span>
                  )}
                </div>
              ))}
          </div>
        </div>

        <div className="mt-2">
          {currentStep === 1 ? (
            <div className="flex flex-col gap-4 w-full items-center">
              <div
                className="flex w-full max-w-85 items-center justify-between px-3 bg-white h-12 rounded-xl border border-border cursor-pointer hover:border-primary transition-colors"
                onClick={() => handleRadioChange("paypal")}
              >
                <div className="flex gap-3 items-center">
                  <Radio checked={selectedMethod === "paypal"} />
                  <p className="text-sm! font-medium! text-foreground leading-[129%]">
                    Paypal
                  </p>
                </div>
                <label className="text-[10px]! font-medium! text-muted-foreground leading-[100%]">
                  Powered by Stripe
                </label>
              </div>

              <div
                className="flex w-full max-w-85 items-center justify-between px-3 bg-white h-12 rounded-xl border border-border cursor-pointer hover:border-primary transition-colors"
                onClick={() => handleRadioChange("debit")}
              >
                <div className="flex gap-3 items-center">
                  <Radio checked={selectedMethod === "debit"} />
                  <p className="text-sm! font-medium! text-foreground leading-[129%]">
                    Debit Card
                  </p>
                </div>
                <VisaLogo />
              </div>

              <div
                className="flex w-full max-w-85 items-center justify-between px-3 bg-white h-12 rounded-xl border border-border cursor-pointer hover:border-primary transition-colors"
                onClick={() => handleRadioChange("easypaisa")}
              >
                <div className="flex gap-3 items-center">
                  <Radio checked={selectedMethod === "easypaisa"} />
                  <p className="text-sm! font-medium! text-foreground leading-[129%]">
                    Easypaisa
                  </p>
                </div>
                <EasypaisaLogo />
              </div>

              <div
                className="flex w-full max-w-85 items-center justify-between px-3 bg-white h-12 rounded-xl border border-border cursor-pointer hover:border-primary transition-colors"
                onClick={() => handleRadioChange("jazzcash")}
              >
                <div className="flex gap-3 items-center">
                  <Radio checked={selectedMethod === "jazzcash"} />
                  <p className="text-sm! font-medium! text-foreground leading-[129%]">
                    Jazzcash
                  </p>
                </div>
                <JazzcashLogo />
              </div>

              <div className="w-full max-w-85 mt-2">
                <Button
                  type={"primary"}
                  label={"Continue"}
                  disabled={selectedMethod === null}
                  suffixIcon={<ArrowRight />}
                  className={"flex w-full!"}
                  onClick={() => setCurrentStep(currentStep + 1)}
                />
              </div>
            </div>
          ) : currentStep === 2 ? (
            <CardDetails
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              selectedMethod={selectedMethod}
              goBack={() => handleBreadcrumbClick(1)}
            />
          ) : currentStep === 3 ? (
            <LoadingPayment
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              selectedMethod={selectedMethod}
              goBack={() => handleBreadcrumbClick(2)}
            />
          ) : (
            <PaymentSuccess
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectPaymentMethod;
