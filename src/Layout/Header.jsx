import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import LogoIconDark from "../assets/svg/logo-dark.svg?react";
import LogoIconLight from "../assets/svg/logo-light.svg?react";
import HamburgerIconDark from "../assets/svg/hamburger-dark.svg?react";
import HamburgerIconLight from "../assets/svg/hamburger-light.svg?react";
import Button from "../ui/Button/Button";
import { ROUTES } from "../constants/routes";
import User from "../assets/svg/profile.svg?react";
import ChevronDown from "../assets/svg/chevron-down.svg?react";
import Info from "../assets/svg/info.svg?react";
import Phone from "../assets/svg/call.svg?react";
import Logout from "../assets/svg/logout.svg?react";
import Bookmark from "../assets/svg/bookmark.svg?react";
import Question from "../assets/svg/question.svg?react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const isAuthenticated = !!localStorage.getItem("token");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate(ROUTES.HOME);
    setShowDropdown(false);
  };

  // Navigation items
  const navItems = [
    {
      id: 1,
      label: "Home",
      path: ROUTES.HOME,
    },
    {
      id: 2,
      label: "Services",
      path: ROUTES.SERVICES,
    },
    {
      id: 3,
      label: "Partners",
      path: ROUTES.PARTNERS,
    },
  ];

  // Add My Bookings if authenticated
  if (isAuthenticated) {
    navItems.push({
      id: 4,
      label: "My Bookings",
      path: ROUTES.BOOKINGS,
    });
  }

  // Dropdown menu items
  const dropdownItems = [
    {
      id: 1,
      label: "Profile",
      icon: <User />,
      path: "/profile",
    },
    {
      id: 2,
      label: "Bookmark",
      icon: <Bookmark />,
      path: "/bookmark",
    },
    {
      id: 3,
      label: "Contact Us",
      icon: <Phone />,
      path: "/contact",
    },
    {
      id: 4,
      label: "About Us",
      icon: <Info />,
      path: "/about",
    },
    {
      id: 5,
      label: "Have Question in Mind?",
      icon: <Question />,
      path: "/faq",
    },
    {
      id: 6,
      label: "Logout",
      icon: <Logout />,
      action: handleLogout,
      className: "text-[#EF4444] hover:text-[#DC2626]",
    },
  ];

  return (
    <header
      className={`flex w-full mx-auto justify-between h-21.75 transition-colors duration-300 px-19 pt-6 pb-6 ${
        location.pathname === ROUTES.HOME
          ? "bg-transparent"
          : "bg-[#FFFFFF] shadow-[0px_0.5px_15px_0px_#0000012]"
      }`}
    >
      <NavLink to={ROUTES.HOME} className="cursor-pointer">
        {location.pathname === ROUTES.HOME ? (
          <LogoIconDark />
        ) : (
          <LogoIconLight />
        )}
      </NavLink>

      <div className={`flex font-medium text-[16px] items-center pt-2`}>
        <ul className="flex items-center gap-11">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `cursor-pointer transition-colors relative ${
                    location.pathname === ROUTES.HOME
                      ? "text-[#737373] hover:text-white"
                      : "text-[#737373] hover:text-[#262626]"
                  } ${
                    isActive && location.pathname === ROUTES.HOME
                      ? "text-white"
                      : isActive
                      ? "text-[#262626]"
                      : ""
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span
                        className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.25 h-1.5 rounded-full shrink-0 ${
                          location.pathname === ROUTES.HOME
                            ? "bg-white"
                            : "bg-[#262626]"
                        }`}
                      ></span>
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        {!isAuthenticated ? (
          <>
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
          </>
        ) : (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors cursor-pointer ${
                location.pathname === ROUTES.HOME
                  ? "text-white"
                  : "text-[#262626]"
              }`}
            >
              <div className="w-11 h-11 rounded-full bg-gray-300 flex items-center justify-center"></div>
              <ChevronDown
                className={`w-4 h-4 transition-transform stroke-white ${
                  showDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div
                className={`absolute right-0 top-0 mt-19 w-61 rounded-2xl shadow-lg z-50 p-4 flex flex-col gap-2.5 bg-white ${
                  location.pathname === ROUTES.HOME
                    ? "text-[#262626]"
                    : "bg-white border border-gray-200"
                }`}
              >
                {dropdownItems.map((item) => {
                  if (item.id === 6) {
                    return (
                      <div className="border-t-[0.5px] border-[#E5E5E5]">
                        <button
                          key={item.id}
                          onClick={item.action}
                          className={`mt-2! flex gap-3 px-2.5 py-2 rounded-[10px] items-center w-full text-[#EF4444]! text-sm! hover:bg-gray-50 transition-colors ${
                            item.className || ""
                          } ${
                            location.pathname === ROUTES.HOME
                              ? "hover:bg-[#F5F5F5]"
                              : ""
                          }`}
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </button>
                      </div>
                    );
                  }

                  // Baaki sab items ke liye NavLink use karenge
                  return (
                    <NavLink
                      key={item.id}
                      to={item.path}
                      className={({ isActive }) =>
                        `flex gap-3 px-2.5 py-2 rounded-[10px] items-center w-full text-sm! hover:bg-gray-50 transition-colors ${
                          isActive ? "bg-[#F5F5F5]" : ""
                        } ${item.className || ""} ${
                          location.pathname === ROUTES.HOME
                            ? "hover:bg-[#F5F5F5]"
                            : ""
                        }`
                      }
                      onClick={() => setShowDropdown(false)}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </NavLink>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
