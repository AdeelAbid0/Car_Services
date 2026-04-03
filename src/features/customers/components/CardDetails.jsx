import ArrowRight from "../../../assets/svg/arrow-right.svg?react";
import CardIcon from "../../../assets/svg/password-placeholder.svg?react";
import EasypaisaLogo from "../../../assets/svg/easypaisa-logo.svg?react";
import JazzcashLogo from "../../../assets/svg/jazzcash-logo.svg?react";
import InputText from "../../../components/ui/InputText";
import Button from "../../../components/ui/Button";

const CardDetails = ({ currentStep, setCurrentStep, selectedMethod }) => {
  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <div className="flex w-full max-w-85">
        <InputText
          label={"Card Number"}
          prefixIcon={<CardIcon />}
          suffixIcon={
            selectedMethod === "easypaisa" ? (
              <EasypaisaLogo />
            ) : selectedMethod === "jazzcash" ? (
              <JazzcashLogo />
            ) : null
          }
          placeholder={"Enter card no"}
        />
      </div>
      {selectedMethod === "paypal" ||
        (selectedMethod === "debit" && (
          <div className="flex gap-2.5 w-full max-w-85">
            <InputText label={"Expiry date"} placeholder={"expire date"} />
            <InputText label={"CVC"} placeholder={"cvc"} />
          </div>
        ))}

      <div className="w-full max-w-85">
        <Button
          type={"primary"}
          label={"Continue"}
          suffixIcon={<ArrowRight />}
          className={"flex w-full!"}
          onClick={() => setCurrentStep(currentStep + 1)}
        />
      </div>
    </div>
  );
};

export default CardDetails;
