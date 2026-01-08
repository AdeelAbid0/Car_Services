import { useState, useEffect } from "react";
import LogoIconDark from "../assets/svg/logo-dark.svg?react";
import LogoIconLight from "../assets/svg/logo-light.svg?react";
import HamburgerIconDark from "../assets/svg/hamburger-dark.svg?react";
import HamburgerIconLight from "../assets/svg/hamburger-light.svg?react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../ui/Button/Button";
import { ROUTES } from "../constants/routes";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeNav, setActiveNav] = useState("");
  const isAuthenticated = !!localStorage.getItem("token");

  // Update active nav based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === ROUTES.HOME) setActiveNav("Home");
    else if (path === ROUTES.SERVICES) setActiveNav("Services");
    else if (path === ROUTES.PARTNERS) setActiveNav("Partners");
    else if (path === ROUTES.BOOKINGS) setActiveNav("My Bookings");
  }, [location]);

  // Base navigation items
  const baseNavItems = [
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
      label: "Partners",
      path: ROUTES.PARTNERS,
      action: () => {
        navigate(ROUTES.PARTNERS);
        setActiveNav("Partners");
      },
    },
  ];

  // Add My Bookings if authenticated
  if (isAuthenticated) {
    baseNavItems.push({
      id: 4,
      label: "My Bookings",
      path: ROUTES.BOOKINGS,
      action: () => {
        navigate(ROUTES.BOOKINGS);
        setActiveNav("My Bookings");
      },
    });
  }

  return (
    <header
      className={`flex w-full mx-auto justify-between h-21.75 transition-colors duration-300 px-19 pt-6 pb-6 ${
        location.pathname === ROUTES.HOME
          ? "bg-transparent"
          : "bg-[#FFFFFF] shadow-[0px_0.5px_15px_0px_#0000012]"
      }`}
    >
      <div
        className="cursor-pointer"
        onClick={() => {
          navigate(ROUTES.HOME);
          setActiveNav("Home");
        }}
      >
        {location.pathname === ROUTES.HOME ? (
          <LogoIconDark />
        ) : (
          <LogoIconLight />
        )}
      </div>

      <div className={`flex font-medium text-[16px] items-center pt-2`}>
        <ul className="flex items-center gap-11">
          {baseNavItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer text-[#737373] ${
                location.pathname === ROUTES.HOME
                  ? "hover:text-white"
                  : "hover:text-[#262626]"
              } transition-colors relative ${
                activeNav === item.label && location.pathname === ROUTES.HOME
                  ? "text-white"
                  : activeNav === item.label
                  ? "text-[#262626]!"
                  : ""
              } 
              `}
              onClick={item.action}
            >
              {item.label}
              {activeNav === item.label && (
                <span
                  className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.25 h-1.5 rounded-full shrink-0 ${
                    location.pathname === ROUTES.HOME
                      ? "bg-white"
                      : "bg-[#262626]"
                  }`}
                ></span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <Button
          label="Join as Partner"
          onClick={() => {
            navigate(ROUTES.PARTNER_REGISTER);
          }}
          className={`${
            location.pathname === ROUTES.HOME
              ? "bg-[#F4F2FF]! hover:bg-[#E5E0FF]! text-[#9A85FF]!"
              : "bg-[#262626]! hover:bg-[#303030]! text-white!"
          }`}
        />
        {location.pathname === ROUTES.HOME ? (
          <HamburgerIconDark className="w-full!" />
        ) : (
          <HamburgerIconLight className="w-full!" />
        )}
      </div>
    </header>
  );
};

export default Header;
