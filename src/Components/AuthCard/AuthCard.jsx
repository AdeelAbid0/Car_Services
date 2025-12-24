import { Button } from "antd";
import GoogleIcon from "../../assets/svg/google-icon.svg?react";
const AuthCard = ({
  title,
  description,
  children,
  buttonText,
  buttonIcon,
  showGoogleButton = true,
  googleButtonText = "Google",
  footerText,
  footerLinkText,
  onFooterLinkClick,
  imageSrc = "/Images/login-image.png",
}) => {
  return (
    <div className="flex w-full justify-end relative min-h-screen">
      {/* Background Images */}
      <img
        src="/login.png"
        alt="background"
        className="object-contain w-[52%] h-full absolute blur-lg"
      />
      <img
        src="/login-green.png"
        alt="background"
        className="object-contain h-full left-[43%] absolute"
      />

      {/* Left Side - Image */}
      <div className="w-1/2 z-50 m-2">
        <img
          src={imageSrc}
          alt="auth"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-1/2 relative">
        <div className="flex w-full h-full">
          <div className="flex justify-center items-center w-full rounded-xl bg-white my-2 mr-2 z-50">
            <div className="flex flex-col w-full px-10 md:px-20 justify-center items-center gap-9">
              {/* Title and Description */}
              <div className="flex items-center flex-col gap-2 text-center w-full">
                <h1 className="font-roboto font-bold text-[#262626] text-3xl md:text-4xl lg:text-5xl leading-tight">
                  {title}
                </h1>
                {description && (
                  <p className="text-[#737373] text-sm md:text-base font-normal max-w-md mx-auto">
                    {description}
                  </p>
                )}
              </div>

              {/* Form Content */}
              <div className="w-full max-w-md space-y-4">{children}</div>

              {/* Action Buttons */}
              <div className="w-full max-w-md">
                {buttonText && (
                  <Button
                    type="primary"
                    onClick={() => {}}
                    className="w-full bg-[#9A85FF] hover:bg-[#7d6cd3] text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    {buttonText}
                    {buttonIcon && <span>{buttonIcon}</span>}
                  </Button>
                )}

                {showGoogleButton && (
                  <>
                    <div className="relative mt-9">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-[#F5F5F5]"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">or</span>
                      </div>
                    </div>
                    <div className="mt-9">
                      <Button
                        className="w-full bg-[#EAE8FF]! text-black! hover:bg-[#d9d6f2]! h-auto py-2.5 flex items-center justify-center gap-2"
                        icon={<GoogleIcon />}
                      >
                        {googleButtonText}
                      </Button>
                    </div>
                  </>
                )}
              </div>

              {/* Footer Link */}
              {footerText && (
                <div className="text-[#262626]! font-medium text-sm">
                  <p>
                    {footerText}{" "}
                    <Button
                      type="link"
                      onClick={onFooterLinkClick}
                      className="px-0! py-0! h-auto! underline cursor-pointer font-medium"
                    >
                      {footerLinkText}
                    </Button>
                  </p>
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
