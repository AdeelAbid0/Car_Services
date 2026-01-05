import { useState, useEffect } from "react";
import LogoIcon from "../../assets/svg/logo.svg?react";
import HamburgerIcon from "../../assets/svg/hamburger.svg?react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../ui/Button/Button";
import { ROUTES } from "../../constants/routes";

const Header = ({ activeSection, onSectionChange }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeNav, setActiveNav] = useState("Home");
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && ["Home", "Services", "Packages"].includes(hash)) {
      setActiveNav(hash);
    }
  }, [location]);

  const handleNavClick = (item) => {
    const sectionId = item.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="flex w-[calc(100%-144px)] mx-auto justify-between h-10 transition-colors duration-300 my-4">
      <div className="cursor-pointer" onClick={() => handleNavClick("Home")}>
        <LogoIcon />
      </div>
      <div className="flex text-[#737373] font-medium text-[16px] items-center">
        <ul className="flex items-center gap-11">
          {["Home", "Services", "Packages"].map((item) => (
            <li
              key={item}
              className={`cursor-pointer hover:text-white transition-colors relative ${
                activeSection === item.toLowerCase() ? "text-white" : ""
              }`}
              onClick={() => handleNavClick(item)}
            >
              {item}
              {activeSection === item.toLowerCase() && (
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.25 bg-white rounded-full shrink-0"></span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <Button
          type="default"
          label={"Join as Partner"}
          onClick={() => {
            navigate(ROUTES.PARTNER_REGISTER);
          }}
        />

        <HamburgerIcon className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
