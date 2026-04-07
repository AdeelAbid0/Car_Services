import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import LogoIconDark from "../../assets/svg/logo-dark.svg?react";
import LogoIconLight from "../../assets/svg/logo-light.svg?react";
import { ROUTES } from "../../constants/routes";
import User from "../../assets/svg/profile.svg?react";
import ChevronDown from "../../assets/svg/chevron-down.svg?react";
import Info from "../../assets/svg/info.svg?react";
import Phone from "../../assets/svg/call-border.svg?react";
import Logout from "../../assets/svg/logout.svg?react";
import Bookmark from "../../assets/svg/bookmark.svg?react";
import Question from "../../assets/svg/question.svg?react";
import Payment from "../../assets/svg/payment-partner.svg?react";
import Support from "../../assets/svg/support.svg?react";
import { getNavItems, getDropdownItems } from "../../config/navigation";
import Button from "../../shared/components/ui/Button";

const Header = ({ user, token }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const isAuthenticated = !!localStorage.getItem("token");

  useEffect(() => {
    const handleClickOutside = event => {
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

  const navItems = getNavItems(user);
  const dropdownItems = getDropdownItems(user, handleLogout);

  const iconComponents = {
    User: <User />,
    Bookmark: <Bookmark />,
    Phone: <Phone />,
    Info: <Info />,
    Question: <Question />,
    Logout: <Logout />,
    Profile: <User />,
    Payment: <Payment />,
    Support: <Support />
  };

  return (
    <header
      className={`flex w-full mx-auto justify-between items-center h-16 md:h-21.75 transition-colors duration-300 px-4 sm:px-10 md:px-19 pt-3 sm:pt-4 md:pt-6 pb-3 sm:pb-4 md:pb-6 ${
        location.pathname === ROUTES.HOME
          ? "bg-transparent"
          : "bg-white shadow-[0px_0.5px_15px_0px_#0000012]"
      }`}
    >
      <NavLink to={ROUTES.HOME} className="cursor-pointer flex items-center">
        <div className="w-6 h-5 xs:w-7 xs:h-6 sm:w-auto sm:h-auto">
          {location.pathname === ROUTES.HOME ? (
            <LogoIconDark className="w-22 h-7 sm:w-full sm:h-full" />
          ) : (
            <LogoIconLight className="w-22 h-7 sm:w-full sm:h-full" />
          )}
        </div>
      </NavLink>

      <div
        className={`hidden md:flex font-medium text-[16px] items-center pt-2`}
      >
        <ul className="flex items-center gap-11">
          {navItems.map(item => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `cursor-pointer transition-colors relative ${
                    location.pathname === ROUTES.HOME
                      ? "text-muted-foreground hover:text-white"
                      : "text-muted-foreground hover:text-foreground"
                  } ${
                    isActive && location.pathname === ROUTES.HOME
                      ? "text-white"
                      : isActive
                        ? "text-foreground!"
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
                            : "bg-foreground"
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

      <div className="flex items-center gap-2 sm:gap-4">
        {!isAuthenticated ? (
          <>
            <Button
              label="Sign In"
              size="small"
              onClick={() => {
                navigate(ROUTES.LOGIN);
              }}
              className={`hidden sm:block text-xs sm:text-sm ${
                !location.pathname === ROUTES.HOME
                  ? "bg-background! hover:bg-[#E5E0FF]! text-primary!"
                  : "bg-foreground! hover:bg-[#303030]! text-white! border! border-border!"
              }`}
            />
            {/* {location.pathname === ROUTES.HOME ? (
              <HamburgerIconDark className="w-full!" />
            ) : (
              <HamburgerIconLight className="w-full!" />
            )} */}
            <Button
              label="Join"
              size="small"
              onClick={() => {
                // navigate(ROUTES.PARTNER_REGISTER);
                navigate(ROUTES.JOIN);
              }}
              className={`text-xs sm:text-sm ${
                location.pathname === ROUTES.HOME
                  ? "bg-background! hover:bg-[#E5E0FF]! text-primary!"
                  : "bg-foreground! hover:bg-[#303030]! text-white! "
              }`}
            />
          </>
        ) : (
          <div className="relative " ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors cursor-pointer ${
                location.pathname === ROUTES.HOME
                  ? "text-white"
                  : "text-foreground"
              }`}
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gray-300 flex items-center justify-center"></div>
              <div
                className={`${
                  location.pathname === ROUTES.HOME
                    ? "text-white"
                    : "text-foreground"
                }`}
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div
                className={`absolute right-0 top-0 mt-19 w-61 rounded-2xl shadow-lg z-50 p-4 flex flex-col gap-2.5 bg-white ${
                  location.pathname === ROUTES.HOME
                    ? "text-foreground"
                    : "bg-white border border-gray-200"
                }`}
              >
                {dropdownItems.map(item => {
                  const IconComponent = iconComponents[item.icon] || null;

                  if (item.label === "Logout") {
                    return (
                      <div
                        key={item.id}
                        className="border-t-[0.5px] border-border pt-2 mt-1"
                      >
                        {item.path ? (
                          <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                              `flex items-center gap-2 p-2 rounded-lg hover:bg-background/30 cursor-pointer ${
                                isActive ? "bg-background/30 font-medium" : ""
                              } ${item.className || ""}`
                            }
                            onClick={() => {
                              if (item.action) item.action();
                              setShowDropdown(false);
                            }}
                          >
                            <span className="w-5 h-5 flex items-center justify-center">
                              {IconComponent}
                            </span>
                            <span>{item.label}</span>
                          </NavLink>
                        ) : (
                          <div
                            onClick={() => {
                              if (item.action) item.action();
                              setShowDropdown(false);
                            }}
                            className={`flex items-center gap-2 p-2 rounded-lg hover:bg-background/30 cursor-pointer ${item.className || ""}`}
                          >
                            <span className="w-5 h-5 flex items-center justify-center">
                              {IconComponent}
                            </span>
                            <span>{item.label}</span>
                          </div>
                        )}
                      </div>
                    );
                  }

                  // For regular items
                  return item.path ? (
                    <NavLink
                      key={item.id}
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center gap-2 p-2 rounded-lg hover:bg-background/30 cursor-pointer text-sm! ${
                          isActive
                            ? "bg-background/30 font-normal! text-foreground!"
                            : ""
                        } ${item.className || ""}`
                      }
                      onClick={() => {
                        if (item.action) item.action();
                        setShowDropdown(false);
                      }}
                    >
                      <span className="w-5 h-5 flex items-center justify-center">
                        {IconComponent}
                      </span>
                      <span>{item.label}</span>
                    </NavLink>
                  ) : (
                    <div
                      key={item.id}
                      onClick={() => {
                        if (item.action) item.action();
                        setShowDropdown(false);
                      }}
                      className={`flex items-center gap-2 p-2 rounded-lg hover:bg-background/30 cursor-pointer ${item.className || ""}`}
                    >
                      <span className="w-5 h-5 flex items-center justify-center">
                        {IconComponent}
                      </span>
                      <span>{item.label}</span>
                    </div>
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
