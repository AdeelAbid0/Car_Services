import { NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import UserIcon from "../../../assets/svg/user.svg?react";
import ServiceIcon from "../../../assets/svg/service.svg?react";
import PartnerIcon from "../../../assets/svg/partner.svg?react";
import ProfileIcon from "../../../assets/svg/profile.svg?react";

const BottomNavigation = () => {
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem("token");

  const navItems = [
    {
      label: "Home",
      path: ROUTES.HOME,
      icon: UserIcon
    },
    {
      label: "Services",
      path: ROUTES.SERVICES,
      icon: ServiceIcon
    },
    {
      label: "Partners",
      path: ROUTES.PARTNERS,
      icon: PartnerIcon
    },
    {
      label: isAuthenticated ? "Profile" : "Login",
      path: isAuthenticated ? ROUTES.PROFILE : ROUTES.LOGIN,
      icon: ProfileIcon
    }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50">
      <div className="flex justify-around items-center h-[74px]">
        {navItems.map(item => {
          const IconComponent = item.icon;
          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <IconComponent className="w-6 h-6" />
                  <span className="text-[10px] font-medium">{item.label}</span>
                  {isActive && (
                    <div className="absolute bottom-0 w-12 h-1 bg-primary rounded-t-full"></div>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
