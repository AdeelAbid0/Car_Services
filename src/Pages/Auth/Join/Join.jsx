import PartnerLogo from "../../../assets/svg/partner-logo.svg?react";
import CarLogo from "../../../assets/svg/car.svg?react";
import ArrowRight from "../../../assets/svg/arrow-right.svg?react";
import Logo from "../../../assets/svg/logo-dark.svg?react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import Button from "../../../ui/Button";
import { useState } from "react";

const Join = ({ imageSrc = "/Images/hero-image.png" }) => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState("partner"); // set null when enable customer card
  const [selectedPath, setSelectedPath] = useState(ROUTES.PARTNER_REGISTER); // set null when enable customer card
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
                className={`flex flex-col items-center gap-4 w-full bg-background mt-6 hover:bg-primary-hover cursor-pointer px-13 py-7 rounded-2xl border border-transparent hover:border hover:border-primary hover:shadow-primary group ${selectedCard === "partner" ? "border-primary! bg-primary-hover!" : ""}`}
                onClick={() => {
                  setSelectedCard("partner");
                  setSelectedPath(ROUTES.PARTNER_REGISTER);
                }}
              >
                <PartnerLogo
                  className={`group-hover:scale-110 transition-transform duration-300 fill-muted-foreground group-hover:stroke-primary group-hover:text-primary group-hover:fill-primary ${selectedCard === "partner" ? "fill-primary!" : ""}`}
                />
                <div className="flex flex-col gap-1 ">
                  <h1
                    className={`text-[18px]! text-foreground! font-semibold group-hover:text-primary! ${selectedCard === "partner" ? "text-primary!" : ""}`}
                  >
                    Join as a Service Partner
                  </h1>
                  <p className="text-xs text-muted-foreground font-normal leading-4">
                    Grow your auto service business with real bookings, manage
                    services, and get paid securely.
                  </p>
                </div>
              </div>
              <div
                className="opacity-50 flex flex-col items-center gap-4 w-full bg-background hover:bg-primary-hover cursor-pointer px-13 py-7 rounded-2xl border border-transparent"
                // className={`flex flex-col items-center gap-4 w-full bg-background hover:bg-primary-hover cursor-pointer px-15 py-7 rounded-2xl border border-transparent hover:border hover:border-primary hover:shadow-primary group ${selectedCard === "customer" ? "border-primary! bg-primary-hover!" : ""}`}
                // onClick={() => {
                //   setSelectedCard("customer");
                //   setSelectedPath(ROUTES.REGISTER_USER);
                // }}
              >
                <CarLogo
                  className={`group-hover:scale-110 transition-transform duration-300 fill-muted-foreground group-hover:stroke-primary group-hover:text-primary group-hover:fill-primary ${selectedCard === "customer" ? "fill-primary!" : ""}`}
                />
                <div className="flex flex-col gap-1">
                  <h1
                    className={`text-[18px]! text-foreground! font-semibold group-hover:text-primary! ${selectedCard === "customer" ? "text-primary!" : ""}`}
                  >
                    Join as a Customer
                  </h1>
                  <p className="text-xs text-muted-foreground font-normal leading-4">
                    Book car services, choose verified partners, and schedule
                    repairs from one platform.
                  </p>
                </div>
              </div>
              <div className="w-full">
                <Button
                  type={"primary"}
                  label="Continue"
                  suffixIcon={<ArrowRight className="w-5 h-5" />}
                  className="w-full"
                  onClick={() => {
                    navigate(selectedPath);
                  }}
                />
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
