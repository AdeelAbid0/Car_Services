import { Radio } from "antd";
import { useState } from "react"; // Added useState hook
import VisaLogo from "../../assets/svg/visa-logo.svg?react";
import EasypaisaLogo from "../../assets/svg/easypaisa-logo.svg?react";
import JazzcashLogo from "../../assets/svg/jazzcash-logo.svg?react";
import ArrowRight from "../../assets/svg/arrow-right.svg?react";
import Button from "../../ui/Button/Button";
import CardDetails from "./Components/CardDetails";
import LoadingPayment from "./Components/LoadingPayment";
import PaymentSuccess from "./Components/PaymentSuccess";

const SelectPaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  const handleRadioChange = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="flex w-full justify-center h-full overflow-auto">
      <div className="flex w-[72%] flex-col gap-6 h-full py-11">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold! text-[#262626] leading-11">
            Payment Method
          </h1>
          <p className="text-[16px] font-normal text-[#737373] leading-6">
            Add or manage your payment options for quick and secure checkout.
          </p>
        </div>

        <div className="mt-6">
          {currentStep === 1 ? (
            <div className="flex flex-col gap-4 w-full items-center">
              <div
                className="flex w-full max-w-85 items-center justify-between px-3 bg-white h-12 rounded-xl border border-[#E5E5E5] cursor-pointer"
                onClick={() => handleRadioChange("paypal")}
              >
                <div className="flex gap-3 items-center">
                  <Radio checked={selectedMethod === "paypal"} />
                  <p className="text-sm! font-medium! text-[#262626] leading-[129%]">
                    Paypal
                  </p>
                </div>
                <label className="text-[10px]! font-medium! text-[#737373] leading-[100%]">
                  Powered by Stripe
                </label>
              </div>
              <div
                className="flex w-full max-w-85 items-center justify-between px-3 bg-white h-12 rounded-xl border border-[#E5E5E5] cursor-pointer"
                onClick={() => handleRadioChange("debit")}
              >
                <div className="flex gap-3 items-center">
                  <Radio checked={selectedMethod === "debit"} />
                  <p className="text-sm! font-medium! text-[#262626] leading-[129%]">
                    Debit Card
                  </p>
                </div>
                <VisaLogo />
              </div>
              <div
                className="flex w-full max-w-85 items-center justify-between px-3 bg-white h-12 rounded-xl border border-[#E5E5E5] cursor-pointer"
                onClick={() => handleRadioChange("easypaisa")}
              >
                <div className="flex gap-3 items-center">
                  <Radio checked={selectedMethod === "easypaisa"} />
                  <p className="text-sm! font-medium! text-[#262626] leading-[129%]">
                    Easypaisa
                  </p>
                </div>
                <EasypaisaLogo />
              </div>
              <div
                className="flex w-full max-w-85 items-center justify-between px-3 bg-white h-12 rounded-xl border border-[#E5E5E5] cursor-pointer"
                onClick={() => handleRadioChange("jazzcash")}
              >
                <div className="flex gap-3 items-center">
                  <Radio checked={selectedMethod === "jazzcash"} />
                  <p className="text-sm! font-medium! text-[#262626] leading-[129%]">
                    Jazzcash
                  </p>
                </div>
                <JazzcashLogo />
              </div>
              <div className="w-full max-w-85">
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
            />
          ) : currentStep === 3 ? (
            <LoadingPayment />
          ) : (
            <PaymentSuccess />
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectPaymentMethod;
