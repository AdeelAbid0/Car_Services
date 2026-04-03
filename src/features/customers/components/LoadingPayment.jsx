import { useEffect } from "react";

const LoadingPayment = ({ currentStep, setCurrentStep }) => {
  useEffect(() => {
    setTimeout(() => {
      setCurrentStep(currentStep + 1);
    }, 2000);
  }, []);
  return (
    <div>
      <h1>Processing payment</h1>
    </div>
  );
};

export default LoadingPayment;
