import { useState } from "react";
import { Button } from "antd";
import LogoIcon from "../../assets/svg/logo.svg?react";
import HamburgerIcon from "../../assets/svg/hamburger.svg?react";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../Routes/routing";

const Header = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("Home");

  return (
    <div className="flex w-full justify-between h-10">
      <div>
        <LogoIcon />
      </div>
      <div className="flex text-[#737373] font-medium text-[16px] items-center">
        <ul className="flex items-center gap-11">
          {["Home", "Services", "Packages"].map((item) => (
            <li
              key={item}
              className={`cursor-pointer transition-colors relative ${
                activeNav === item ? "text-white" : "hover:text-white"
              }`}
              onClick={() => setActiveNav(item)}
            >
              {item}
              {activeNav === item && (
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white"></span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <Button
          size="small"
          className="bg-[#F4F2FF]! text-[#9A85FF]! border border-[#D8D4FF] hover:bg-[#F4F2FF]!"
          onClick={() => {
            navigate(PublicRoutes.Login.path);
          }}
        >
          Join as Partner
        </Button>
        <HamburgerIcon className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
