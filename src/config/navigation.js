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
  superAdmin: [
    {
      id: 1,
      label: "Home",
      path: ROUTES.HOME,
      auth: false,
    },
    {
      id: 2,
      label: "Dashboard",
      path: ROUTES.SUPERADMIN_DASHBOARD,
      auth: true,
    },
    {
      id: 3,
      label: "Services",
      path: ROUTES.SUPERADMIN_SERVICES,
      auth: true,
    },
    {
      id: 4,
      label: "Partners",
      path: ROUTES.SUPERADMIN_PARTNERS,
      auth: true,
    },
  ],
};
export const getNavItems = (user) => {
  const isAuthenticated = !!localStorage.getItem("token");
  let navItems = [];

  if (user?.user?.role === "isPartner") {
    navItems = [...baseNavItems.partner];
  } else if (user?.user?.role === "isAdmin") {
    navItems = [...baseNavItems.admin];
  } else if (user?.user?.role === "isSuperAdmin") {
    navItems = [...baseNavItems.superAdmin];
  } else {
    navItems = [...baseNavItems.customer];
  }

  return navItems.filter(
    (item) => !item.auth || (item.auth && isAuthenticated),
  );
};

// Export NAV_ITEMS for backward compatibility if needed
// Dropdown menu items for different user roles
const dropdownItems = {
  customer: [
    {
      id: 1,
      label: "Profile",
      icon: "User",
      path: ROUTES.PROFILE,
    },
    {
      id: 2,
      label: "Bookmark",
      icon: "Bookmark",
      path: ROUTES.HOME,
    },
    {
      id: 3,
      label: "Contact Us",
      icon: "Phone",
      path: ROUTES.CONTACT,
    },
    {
      id: 4,
      label: "About Us",
      icon: "Info",
      path: ROUTES.ABOUT,
    },
    {
      id: 5,
      label: "Have Question in Mind?",
      icon: "Question",
      path: ROUTES.FAQs,
    },
    {
      id: 6,
      label: "Logout",
      icon: "Logout",
      action: "handleLogout",
      className: "text-danger hover:text-danger/80",
    },
  ],
  partner: [
    {
      id: 1,
      label: "Profile",
      icon: "User",
      path: ROUTES.PARTNER_PROFILE,
    },
    {
      id: 2,
      label: "Payment & Payout",
      icon: "Payment",
      path: ROUTES.PARTNER_PAYMENT,
    },
    {
      id: 3,
      label: "Support and Help",
      icon: "Support",
      path: ROUTES.PARTNER_SUPPORT,
    },
    {
      id: 4,
      label: "Logout",
      icon: "Logout",
      action: "handleLogout",
      className: "text-danger hover:text-danger/80",
    },
  ],
  admin: [
    {
      id: 6,
      label: "Logout",
      icon: "Logout",
      action: "handleLogout",
      className: "text-danger hover:text-danger/80",
    },
  ],
  superAdmin: [
    {
      id: 1,
      label: "Profile",
      icon: "User",
      path: ROUTES.SUPERADMIN_PROFILE,
    },
    {
      id: 6,
      label: "Logout",
      icon: "Logout",
      action: "handleLogout",
      className: "text-danger hover:text-danger/80",
    },
  ],
};

// Function to get dropdown items based on user role
export const getDropdownItems = (user, handleLogout) => {
  let items = [];

  if (user?.user?.role === "isPartner") {
    items = [...dropdownItems.partner];
  } else if (user?.user?.role === "isAdmin") {
    items = [...dropdownItems.admin];
  } else if (user?.user?.role === "isSuperAdmin") {
    items = [...dropdownItems.superAdmin];
  } else {
    items = [...dropdownItems.customer];
  }

  // Replace the handleLogout action
  return items.map((item) => {
    if (item.action === "handleLogout") {
      return { ...item, action: handleLogout };
    }
    return item;
  });
};

export const NAV_ITEMS = baseNavItems;
