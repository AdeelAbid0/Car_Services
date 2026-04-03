import { Checkbox } from "antd";
import InputText from "../../../components/ui/InputText";
import ArrowRightIcon from "../../../assets/svg/arrow-right.svg?react";
import MailIcon from "../../../assets/svg/mail-placeholder.svg?react";
import PasswordIcon from "../../../assets/svg/password-placeholder.svg?react";
import EyeIcon from "../../../assets/svg/eye-icon.svg?react";
import AuthCard from "../../../components/AuthCard";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import { ROUTES } from "../../../constants/routes";
import { useFormik } from "formik";
import { LoginInitialValues } from "../forms/login/login.initialvalues";
import { LoginValidationSchema } from "../forms/login/login.validationschema";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: LoginInitialValues,
    validationSchema: LoginValidationSchema,
    onSubmit: (values) => {
      console.log({ values });
    },
  });

  const handleLogin = () => {
    formik.handleSubmit();
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
          prefixIcon={<MailIcon />}
          name="email"
          formik={formik}
          className="w-full"
        />
        <InputText
          label="Password"
          placeholder="Enter password"
          prefixIcon={<PasswordIcon />}
          suffixIcon={<EyeIcon />}
          type="password"
          name="password"
          formik={formik}
          className="w-full"
        />
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-2">
            <Checkbox className="m-0" />
            <span className="text-foreground font-medium leading-5">
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
