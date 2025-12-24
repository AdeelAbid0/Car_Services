import { Input } from "antd";
import ArrowRightIcon from "../../assets/svg/arrow-right.svg?react";
import AuthCard from "../../Components/AuthCard/AuthCard";

const VerifyOTP = () => {
  const handleVerifyOTP = () => {
    console.log("Verify OTP clicked");
  };

  const handleResendOTP = () => {
    console.log("Resend OTP clicked");
  };

  const handleGoBack = () => {
    console.log("Go back clicked");
  };

  return (
    <AuthCard
      title="Verify your number"
      description="Enter the code we sent to keep your account secure."
      buttonText="Confirm OTP"
      buttonIcon={<ArrowRightIcon />}
      onButtonClick={handleVerifyOTP}
      showGoogleButton={false}
      footerText="Didn't receive the code?"
      footerLinkText="Resend OTP"
      onFooterLinkClick={handleResendOTP}
    >
      <div className="w-full flex flex-col items-center gap-6">
        <div className="w-full flex justify-center">
          <Input.OTP
            length={6}
            // value={otp}
            // onChange={(value) => setOtp(value)}
            className="otp-input"
            style={{
              "--otp-input-gap": "0.5rem",
              "--otp-input-size": "3.5rem",
            }}
          />
        </div>
        <p className="text-xs text-gray-500 text-center">
          Check your spam folder if you don't see the code in your inbox
        </p>
      </div>
    </AuthCard>
  );
};

export default VerifyOTP;
