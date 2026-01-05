import { Checkbox } from "antd";
import InputText from "../../ui/InputText/InputText";
import ArrowRightIcon from "../../assets/svg/arrow-right.svg?react";
import MailIcon from "../../assets/svg/mail-placeholder.svg?react";
import PasswordIcon from "../../assets/svg/password-placeholder.svg?react";
import EyeIcon from "../../assets/svg/eye-icon.svg?react";
import UserIcon from "../../assets/svg/user.svg?react";
import AuthCard from "../../Components/AuthCard/AuthCard";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
const Register = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    console.log("Register clicked");
  };

  const handleGoogleRegister = () => {
    console.log("Google register clicked");
  };

  const handleLoginClick = () => {
    navigate(ROUTES.LOGIN);
  };

  return (
    <AuthCard
      title="Create your account"
      description="Sign up to book reliable car services in just a few steps."
      buttonText="Continue"
      buttonIcon={<ArrowRightIcon />}
      onButtonClick={handleRegister}
      onGoogleClick={handleGoogleRegister}
      footerText="Already have an account?"
      footerLinkText="Log in"
      onFooterLinkClick={handleLoginClick}
    >
      <div className="w-full space-y-4">
        <InputText
          label="Name"
          placeholder="Enter name"
          prefixIcon={UserIcon}
          className="w-full"
        />
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
        <InputText
          label="Confirm Password"
          placeholder="Confirm your password"
          prefixIcon={PasswordIcon}
          suffixIcon={EyeIcon}
          type="password"
          className="w-full"
        />
        <div className="flex items-center">
          <Checkbox className="text-[#262626] font-medium leading-5">
            I agree to the Terms of Service and Privacy Policy
          </Checkbox>
        </div>
      </div>
    </AuthCard>
  );
};

export default Register;
