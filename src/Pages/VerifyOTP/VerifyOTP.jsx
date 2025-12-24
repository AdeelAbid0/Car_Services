import { Button, Checkbox, Input } from "antd";
import ArrowRightIcon from "../../assets/svg/arrow-right.svg?react";
const VerifyOTP = () => {
  return (
    <div className="flex w-full justify-end relative">
      <img
        src="/login.png"
        alt="login"
        className="object-contain w-[52%] h-full absolute blur-lg"
      />
      <img
        src="/login-green.png"
        alt="login"
        className="object-contain h-full left-[43%]  absolute "
      />
      <div className="w-1/2 z-50 m-2">
        <img
          src="/Images/login-image.png"
          alt="login"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="w-1/2 relative ">
        <div className="flex w-full h-full ">
          <div className="flex justify-center items-center w-full rounded-xl bg-white my-2 mr-2  z-50 ">
            <div className="flex flex-col w-full px-37.5 justify-center items-center gap-9 z-10">
              <div className="flex flex-col gap-2">
                <h1 className="font-roboto !font-bold text-[#262626] text-[44px] leading-[129%]">
                  Verify your number
                </h1>
                <p className="text-[#737373] text-sm !font-normal">
                  Enter the code we sent to keep your account secure.
                </p>
              </div>
              <div className="flex w-full items-center flex-col gap-3">
                <div className="flex justify-center w-full">
                  <Input.OTP
                    length={6}
                    // value={otp}
                    // onChange={(value) => setOtp(value)}
                  />
                </div>
              </div>
              <div className="w-full">
                <Button type="primary" className="w-full">
                  Confirm OTP
                  <ArrowRightIcon />
                </Button>
              </div>
              <div>
                <Button type="link">Resend OTP</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
