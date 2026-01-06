import { useState, useEffect } from "react";
import LogoIcon from "../../assets/svg/logo.svg?react";
import HamburgerIcon from "../../assets/svg/hamburger.svg?react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../ui/Button/Button";
import { ROUTES } from "../../constants/routes";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeNav, setActiveNav] = useState("");
  // Update active nav based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === ROUTES.HOME) setActiveNav("Home");
    else if (path === ROUTES.SERVICES) setActiveNav("Services");
    else if (path === ROUTES.PACKAGES) setActiveNav("Packages");
  }, [location]);
  const navItems = [
    {
      id: 1,
      label: "Home",
      path: ROUTES.HOME,
      action: () => {
        navigate(ROUTES.HOME);
        setActiveNav("Home");
      },
    },
    {
      id: 2,
      label: "Services",
      path: ROUTES.SERVICES,
      action: () => {
        navigate(ROUTES.SERVICES);
        setActiveNav("Services");
      },
    },
    {
      id: 3,
      label: "Packages",
      path: ROUTES.PACKAGES,
      action: () => {
        navigate(ROUTES.PACKAGES);
        setActiveNav("Packages");
      },
    },
  ];
  return (
    <header
      className={`flex w-full mx-auto justify-between h-21.75 transition-colors duration-300 px-19 pt-6 pb-6 ${
        location.pathname === ROUTES.HOME ? "transparent" : "bg-[#171717]"
      }`}
    >
      <div
        className="cursor-pointer"
        onClick={() => {
          navigate(ROUTES.HOME);
          setActiveNav("Home");
        }}
      >
        <LogoIcon />
      </div>

      <div className="flex text-[#737373] font-medium text-[16px] items-center pt-2">
        <ul className="flex items-center gap-11">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-white transition-colors relative ${
                activeNav === item.label ? "text-white" : ""
              }`}
              onClick={() => item.action()}
            >
              {item.label}
              {activeNav === item.label && (
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.25 bg-white rounded-full shrink-0"></span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <Button
          type="default"
          label="Join as Partner"
          onClick={() => navigate(ROUTES.REGISTER_PARTNER)}
          className="text-[#9A85FF] bg-[#F4F2FF] hover:bg-[#E5E0FF]"
        />
        <HamburgerIcon className="cursor-pointer" />
      </div>
    </header>
  );
};
export default Header;
