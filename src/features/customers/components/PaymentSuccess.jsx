import Button from "../../../shared/components/ui/Button";
import PaySuccess from "../../../assets/svg/payment-success.svg?react";

const PaymentSuccess = ({ setCurrentStep }) => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="flex w-full flex-col text-center gap-3 max-w-82">
        <PaySuccess />
        <h1 className="text-xl font-semibold leading-8">Payment Complete</h1>
        <p className="text-sm text-muted-foreground leading-5">
          Your Payment has been completed. Bundle of thanks for choosing us.
        </p>
        <Button
          type={"primary"}
          label={"Continue"}
          // suffixIcon={<ArrowRight />}
          className={"flex w-full! "}
          onClick={() => {
            setCurrentStep(1);
          }}
        />
      </div>
    </div>
  );
};

export default PaymentSuccess;
