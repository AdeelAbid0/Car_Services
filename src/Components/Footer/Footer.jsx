import BgGradientOrange from "../GradientBg/BgGradientOrange";
import BgGradientBlue from "../GradientBg/BgGradientBlue";
import Logo from "../../assets/svg/logo.svg?react";
import FaceBookIcon from "../../assets/svg/facebook.svg?react";
import TwitterIcon from "../../assets/svg/twitter.svg?react";
import InstagramIcon from "../../assets/svg/instagram.svg?react";
import LinkedInIcon from "../../assets/svg/linkedin.svg?react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden w-full">
      <div className="absolute top-0 left-0 w-full">
        <BgGradientBlue />
      </div>
      <div className="relative flex w-full flex-col px-50 m-1 bg-[#262626] z-10">
        <div className="flex w-full justify-between pt-22.5 pb-5">
          <div className="flex w-[25%] flex-col gap-7">
            <Logo />
            <div className="flex flex-col w-full gap-2.5 text-[#A3A3A3] font-normal text-[11px] leading-4">
              <p>A108 Adam Street G-8 Markaz, Islamabad 44000 Pakistan</p>
              <p>Phone: +1 5589 55488 55</p>
              <p>Email: info@fixngo.com</p>
            </div>
            <div className="flex w-full gap-4 [&>svg]:hover:cursor-pointer">
              <FaceBookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </div>
          </div>
          <div className="flex w-[70%]">
            <div className="flex w-full justify-between">
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-semibold text-sm! leading-4">
                  Quick Links
                </h3>
                <ul className="flex flex-col gap-1 [&_li]:text-[#A3A3A3] [&_li]:leading-[250%] [&_li]:text-[11px] [&_li]:before:content-['•'] [&_li]:before:mr-1 [&_li]:hover:text-white [&_li]:hover:cursor-pointer">
                  <li>Services</li>
                  <li>Partners</li>
                  <li>About Us</li>
                  <li>FAQ</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-semibold text-sm! leading-4">
                  Our Services
                </h3>
                <ul className="flex flex-col gap-1 [&_li]:text-[#A3A3A3] [&_li]:leading-[250%] [&_li]:text-[11px] [&_li]:before:content-['•'] [&_li]:before:mr-1 [&_li]:hover:text-white [&_li]:hover:cursor-pointer">
                  <li>Car Maintainance</li>
                  <li>Car Wash & Detailing</li>
                  <li>Repairs</li>
                  <li>Battery & Tires</li>
                  <li>Roadside Assistance</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-semibold text-sm! leading-4">
                  Support
                </h3>
                <ul className="flex flex-col gap-1 [&_li]:text-[#A3A3A3] [&_li]:leading-[250%] [&_li]:text-[11px] [&_li]:before:content-['•'] [&_li]:before:mr-1 [&_li]:hover:text-white [&_li]:hover:cursor-pointer">
                  <li>Help Center</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                  <li>Refund Policy</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-semibold text-sm! leading-4">
                  For Partners
                </h3>
                <ul className="flex flex-col gap-1 [&_li]:text-[#A3A3A3] [&_li]:leading-[250%] [&_li]:text-[11px] [&_li]:before:content-['•'] [&_li]:before:mr-1 [&_li]:hover:text-white [&_li]:hover:cursor-pointer">
                  <li>Become a Partner</li>
                  <li>Partner Login</li>
                  <li>Partner Support</li>
                  <li>Partner Terms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full  justify-center py-7">
          <span className="flex font-normal text-white text-[11px] leading-4 whitespace-pre">
            © Copyright 2025<span className="font-bold"> FIXnGO</span>. All
            Rights Reserved
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-[50%] w-full">
        <BgGradientOrange />
      </div>
    </footer>
  );
};

export default Footer;
