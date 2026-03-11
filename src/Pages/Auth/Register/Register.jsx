import { Checkbox } from "antd";
import InputText from "../../../ui/InputText/InputText";
import ArrowRightIcon from "../../../assets/svg/arrow-right.svg?react";
import MailIcon from "../../../assets/svg/mail-placeholder.svg?react";
import PasswordIcon from "../../../assets/svg/password-placeholder.svg?react";
import EyeIcon from "../../../assets/svg/eye-icon.svg?react";
import UserIcon from "../../../assets/svg/user.svg?react";
import AuthCard from "../../../Components/AuthCard/AuthCard";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { useFormik } from "formik";
import { RegisterUserInitialValues } from "./Formik/register.initialvalues";
import { RegisterValidationSchema } from "./Formik/register.validationschema";

const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: RegisterUserInitialValues,
    validationSchema: RegisterValidationSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });
  const handleRegister = () => {
    formik.handleSubmit();
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
          name="name"
          formik={formik}
          placeholder="Enter name"
          prefixIcon={<UserIcon />}
          className="w-full"
        />
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
        <InputText
          label="Confirm Password"
          placeholder="Confirm your password"
          prefixIcon={<PasswordIcon />}
          suffixIcon={<EyeIcon />}
          type="password"
          name="confirmPassword"
          formik={formik}
          className="w-full"
        />
        <div className="flex items-center">
          <Checkbox
            name="terms"
            checked={formik.values.terms}
            onChange={(e) => {
              formik.setFieldValue("terms", e.target.checked);
            }}
            className="text-foreground font-medium"
          >
            I agree to the Terms of Service and Privacy Policy
          </Checkbox>
        </div>
      </div>
    </AuthCard>
  );
};

export default Register;
