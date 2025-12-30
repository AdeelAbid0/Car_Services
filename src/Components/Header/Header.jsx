import { useState, useEffect } from "react";
import { Button } from "antd";
import LogoIcon from "../../assets/svg/logo.svg?react";
import HamburgerIcon from "../../assets/svg/hamburger.svg?react";
import { useNavigate, useLocation } from "react-router-dom";
import { PublicRoutes } from "../../Routes/routing";

const Header = ({ scrolled }) => {
  // ✅ scrolled prop قبول کریں
  const navigate = useNavigate();
  const location = useLocation();
  const [activeNav, setActiveNav] = useState("Home");

  // Update active nav based on URL hash
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && ["Home", "Services", "Packages"].includes(hash)) {
      setActiveNav(hash);
    }
  }, [location]);

  const handleNavClick = (item) => {
    setActiveNav(item);

    // Scroll to section
    const sectionId = item.toLowerCase();
    const element = document.getElementById(sectionId);

    if (element) {
      // Smooth scroll to section
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Update URL with hash without page reload
      navigate(`/#${sectionId}`, { replace: true });
    } else {
      // If on another page, navigate to landing with hash
      navigate(`${PublicRoutes.Landing.path}#${sectionId}`);
    }
  };

  return (
    <div className="flex w-[calc(100%-144px)] mx-auto justify-between h-10 transition-colors duration-300 my-4">
      <div className="cursor-pointer" onClick={() => handleNavClick("Home")}>
        <LogoIcon />
      </div>
      <div className="flex text-[#737373] font-medium text-[16px] items-center">
        <ul className="flex items-center gap-11">
          {["Home", "Services", "Packages"].map((item) => (
            <li
              key={item}
              className={`cursor-pointer hover:text-white transition-colors relative ${
                activeNav === item ? "text-white" : ""
              }`}
              onClick={() => handleNavClick(item)}
            >
              {item}
              {activeNav === item && (
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.25 bg-white rounded-full shrink-0"></span>
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
