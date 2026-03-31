import GoogleIcon from "../assets/svg/google-icon.svg?react";
import Button from "./ui/Button";
import Logo from "../assets/svg/logo-dark.svg?react";

const AuthCard = ({
  title,
  description,
  children,
  buttonText,
  buttonIcon,
  onButtonClick,
  showGoogleButton = true,
  googleButtonText = "Google",
  footerText,
  footerLinkText,
  onFooterLinkClick,
  imageSrc = "/Images/hero-image.png",
}) => {
  return (
    <div className="relative flex w-full h-screen">
      {/* Background Images */}
      <img
        src="/login.png"
        alt="background"
        className="pointer-events-none select-none absolute right-0 h-full w-[52%] object-contain blur-lg"
      />
      <img
        src="/login-green.png"
        alt="background"
        className="pointer-events-none select-none absolute right-0 h-full object-contain"
      />

      {/* Left Side */}
      <div className="w-1/2 p-2 pr-0 z-40 flex items-center relative">
        <span className="absolute left-11 top-11">
          <Logo />
        </span>
        <img
          src={imageSrc}
          alt="auth"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="w-1/2 min-h-[90vh] flex">
        <div className="w-full mr-2 m-2 rounded-xl bg-white z-40 overflow-y-auto">
          <div className="min-h-full flex items-center justify-center">
            <div className="flex flex-col w-full px-10 md:px-20 py-10 gap-9">
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="font-bold! text-foreground text-3xl md:text-4xl lg:text-5xl leading-tight">
                  {title}
                </h1>
                {description && (
                  <p className="text-muted-foreground text-sm md:text-base max-w-md">
                    {description}
                  </p>
                )}
              </div>

              {/* Form */}
              <div className="w-full max-w-md mx-auto space-y-4">
                {children}
              </div>

              {/* Buttons */}
              <div className="w-full max-w-md mx-auto">
                {buttonText && (
                  <Button
                    type="primary"
                    label={buttonText}
                    suffixIcon={buttonIcon}
                    onClick={onButtonClick}
                    className="w-full bg-primary hover:bg-primary/40 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2"
                  />
                )}

                {showGoogleButton && (
                  <>
                    <div className="relative my-8">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-muted-background" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">or</span>
                      </div>
                    </div>

                    <Button
                      type="default"
                      label={googleButtonText}
                      prefixIcon={<GoogleIcon />}
                      className="w-full"
                    />
                  </>
                )}
              </div>

              {/* Footer */}
              {footerText && (
                <div className="flex justify-center gap-1 text-foreground font-medium text-sm">
                  <span>{footerText}</span>
                  <Button
                    type="link"
                    label={footerLinkText}
                    onClick={onFooterLinkClick}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
