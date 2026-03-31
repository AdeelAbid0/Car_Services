import Button from "../../../../components/ui/Button";

const PaymentSuccess = ({ setCurrentStep }) => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="flex flex-col gap-3 max-w-82">
        <h1>Payment successfull</h1>
        <Button
          type={"primary"}
          label={"Continue"}
          // suffixIcon={<ArrowRight />}
          className={"flex w-full!"}
          onClick={() => {
            setCurrentStep(1);
          }}
        />
      </div>
    </div>
  );
};

export default PaymentSuccess;
