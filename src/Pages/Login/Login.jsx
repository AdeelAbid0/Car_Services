import { Checkbox } from "antd";
import InputText from "../../ui/InputText/InputText";
import ArrowRightIcon from "../../assets/svg/arrow-right.svg?react";
import MailIcon from "../../assets/svg/mail-placeholder.svg?react";
import PasswordIcon from "../../assets/svg/password-placeholder.svg?react";
import EyeIcon from "../../assets/svg/eye-icon.svg?react";
import AuthCard from "../../Components/AuthCard/AuthCard";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button/Button";
import { ROUTES } from "../../constants/routes";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log("Login clicked");
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleSignUpClick = () => {
    navigate(ROUTES.REGISTER_USER);
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
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-2">
            <Checkbox className="m-0" />
            <span className="text-[#262626] font-medium leading-5">
              Remember me
            </span>
          </div>
          <Button
            type="link"
            label="Forgot password?"
            onClick={handleForgotPassword}
          />
        </div>
      </div>
    </AuthCard>
  );
};

export default Login;
