import PartnerLogo from "../../../assets/svg/partner-logo.svg?react";
import CarLogo from "../../../assets/svg/car.svg?react";
import Logo from "../../../assets/svg/logo-dark.svg?react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

const Join = ({ imageSrc = "/Images/hero-image.png" }) => {
  const navigate = useNavigate();
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
      <div className="w-1/2 min-h-[90vh] flex">
        <div className="w-full mr-2 m-2 rounded-xl bg-white z-40 overflow-y-auto">
          <div className="min-h-full flex w-full items-center justify-center">
            <div className="flex flex-col w-[56%]! max-w-99.5 text-center gap-3">
              <div className="flex w-full justify-center flex-col gap-1">
                <h1 className="text-[32px]! font-bold! text-foreground leading-[129%]">
                  Get Started with FixnGo
                </h1>
                <p className="text-sm font-normal text-muted-foreground leading-[129%]">
                  Select your role to continue and enjoy a seamless car service
                  experience.
                </p>
              </div>
              <div
                className="flex flex-col items-center gap-4 w-full bg-background hover:bg-muted-background cursor-pointer px-15 py-7 rounded-2xl mt-6"
                onClick={() => {
                  navigate(ROUTES.REGISTER_USER);
                }}
              >
                <CarLogo />
                <div className="flex flex-col gap-1">
                  <h1 className="text-[18px]! text-foreground! font-semibold">
                    Join as a Customer
                  </h1>
                  <p className="text-xs text-muted-foreground font-normal leading-4">
                    Book car services, choose verified partners, and schedule
                    repairs from one platform.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center gap-4 w-full bg-background hover:bg-muted-background cursor-pointer px-15 py-7 rounded-2xl"
                onClick={() => {
                  navigate(ROUTES.PARTNER_REGISTER);
                }}
              >
                <PartnerLogo />
                <div className="flex flex-col gap-1 ">
                  <h1 className="text-[18px]! text-foreground! font-semibold">
                    Join as a Service Partner
                  </h1>
                  <p className="text-xs text-muted-foreground font-normal leading-4">
                    Grow your auto service business with real bookings, manage
                    services, and get paid securely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="w-1/2 p-2 pl-0 z-40 flex items-center relative">
        <span className="absolute top-11 left-11">
          <Logo />
        </span>
        <img
          src={imageSrc}
          alt="auth"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Join;
