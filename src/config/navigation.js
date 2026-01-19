import { ROUTES } from "../constants/routes";

// Base navigation items that don't depend on authentication
const baseNavItems = {
  customer: [
    {
      id: 1,
      label: "Home",
      path: ROUTES.HOME,
      auth: false,
    },
    {
      id: 2,
      label: "Services",
      path: ROUTES.SERVICES,
      auth: false,
    },
    {
      id: 3,
      label: "Partners",
      path: ROUTES.PARTNERS,
      auth: false,
    },
    {
      id: 4,
      label: "My Bookings",
      path: ROUTES.BOOKINGS,
      auth: true,
    },
  ],
  partner: [
    {
      id: 1,
      label: "Home",
      path: ROUTES.HOME,
      auth: false,
    },
    {
      id: 2,
      label: "Dashboard",
      path: ROUTES.PARTNER_DASHBOARD,
      auth: true,
    },
    {
      id: 3,
      label: "Manage Services",
      path: ROUTES.PARTNER_MANAGE_SERVICES,
      auth: true,
    },
  ],
  admin: [
    // Will be added later
  ],
};
export const getNavItems = (user) => {
  const isAuthenticated = !!localStorage.getItem("token");
  let navItems = [];

  if (user?.user?.role === "isPartner") {
    navItems = [...baseNavItems.partner];
  } else if (user?.user?.role === "isAdmin") {
    navItems = [...baseNavItems.admin];
  } else {
    navItems = [...baseNavItems.customer];
  }

  return navItems.filter(
    (item) => !item.auth || (item.auth && isAuthenticated),
  );
};

// Export NAV_ITEMS for backward compatibility if needed
export const NAV_ITEMS = baseNavItems;
