import { Button, Checkbox } from "antd";
import InputText from "../../Common/InputText/InputText";
import ArrowRightIcon from "../../assets/svg/arrow-right.svg?react";
import MailIcon from "../../assets/svg/mail-placeholder.svg?react";
import PasswordIcon from "../../assets/svg/password-placeholder.svg?react";
import EyeIcon from "../../assets/svg/eye-icon.svg?react";
import AuthCard from "../../Components/AuthCard/AuthCard";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../Routes/routing";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log("Login clicked");
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleSignUpClick = () => {
    navigate(PublicRoutes.Register.path);
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };

  return (
    <AuthCard
      title="Welcome back"
      description="Log in to manage your bookings and car services."
      buttonText="Login"
      buttonIcon={<ArrowRightIcon />}
      onButtonClick={handleLogin}
      onGoogleClick={handleGoogleLogin}
      footerText="Don't have an account?"
      footerLinkText="Sign Up"
      onFooterLinkClick={handleSignUpClick}
    >
      <div className="flex flex-col w-full gap-3">
        <InputText
          label="Email"
          placeholder="Enter email"
          prefixIcon={MailIcon}
          className="w-full"
        />
        <InputText
          label="Password"
          placeholder="Enter password"
          prefixIcon={PasswordIcon}
          suffixIcon={EyeIcon}
          type="password"
          className="w-full"
        />
        <div className="flex justify-between items-center">
          <Checkbox className="text-[#262626] font-medium leading-5">
            Remember me
          </Checkbox>
          <Button
            type="link"
            onClick={handleForgotPassword}
            className="px-0! py-0! h-auto! text-[#9A85FF] font-medium text-sm"
          >
            Forgot password?
          </Button>
        </div>
      </div>
    </AuthCard>
  );
};

export default Login;
