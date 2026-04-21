import { NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { getNavItems } from "../../../config/navigation";

const BottomNavigation = ({ user }) => {
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem("token");

  const navItems = getNavItems(user);

  // const navItems = [
  //   {
  //     label: "Home",
  //     path: ROUTES.HOME,
  //     icon: UserIcon
  //   },
  //   {
  //     label: "Services",
  //     path: ROUTES.SERVICES,
  //     icon: ServiceIcon
  //   },
  //   {
  //     label: "Partners",
  //     path: ROUTES.PARTNERS,
  //     icon: PartnerIcon
  //   },
  //   {
  //     label: isAuthenticated ? "Profile" : "Login",
  //     path: isAuthenticated ? ROUTES.PROFILE : ROUTES.LOGIN,
  //     icon: ProfileIcon
  //   }
  // ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50">
      <div className="flex justify-around items-center h-14">
        {navItems.map(item => {
          const IconComponent = item.icon;
          return (
            <NavLink
              key={item.label}
              to={item.path}
              className="flex flex-col items-center justify-center w-full h-full gap-1 transition-colors"
            >
              {({ isActive }) => (
                <>
                  <IconComponent
                    className={`w-6 h-6 transition-colors ${
                      isActive
                        ? "fill-primary! text-primary! "
                        : "text-muted-foreground fill-transparent!"
                    }`}
                  />
                  <span
                    className={`text-[12px] font-medium transition-colors ${
                      isActive
                        ? "text-primary stroke-2"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </span>
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
