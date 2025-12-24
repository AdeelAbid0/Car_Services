import { Button, Checkbox } from "antd";
import InputText from "../../Common/InputText/InputText";
import ArrowRightIcon from "../../assets/svg/arrow-right.svg?react";
import GoogleIcon from "../../assets/svg/google-icon.svg?react";
import MailIcon from "../../assets/svg/mail-placeholder.svg?react";
import PasswordIcon from "../../assets/svg/password-placeholder.svg?react";
import EyeIcon from "../../assets/svg/eye-icon.svg?react";
const Login = () => {
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
                  Welcome back
                </h1>
                <p className="text-[#737373] text-sm !font-normal">
                  Log in to manage your bookings and car services.
                </p>
              </div>
              <div className="flex w-full items-center flex-col gap-3">
                <div className="w-full">
                  <InputText
                    label="Email"
                    placeholder="Enter email"
                    prefixIcon={MailIcon}
                    className="w-full"
                  />
                </div>
                <div className="w-full">
                  <InputText
                    label="Password"
                    placeholder="Enter password"
                    prefixIcon={PasswordIcon}
                    suffixIcon={EyeIcon}
                  />
                </div>
                <div className="flex w-full justify-between items-center">
                  <Checkbox className="text-[#262626] font-medium leading-5">
                    Remember me
                  </Checkbox>
                  <p className="text-[#9A85FF] font-medium text-sm">
                    Forgot password?
                  </p>
                </div>
              </div>
              <div className="w-full">
                <Button type="primary" className="w-full">
                  Login <ArrowRightIcon />
                </Button>
              </div>
              <span className="w-full border-t border-[#F5F5F5]"></span>
              <div className="w-full">
                <Button type="default" className="w-full !bg-[#EAE8FF]">
                  <GoogleIcon />
                  Google
                </Button>
              </div>
              <div className="text-[#262626] font-medium leading-5 text-sm">
                <p>
                  Don't have an account?{" "}
                  <span className="text-[#9A85FF] underline cursor-pointer">
                    Sign Up
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
