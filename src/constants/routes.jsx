export const ROUTES = {
  // Landing page routes
  HOME: "/",
  SERVICES: "/services",
  PARTNERS: "/partners",
  ABOUT: "/about",
  FAQs: "/faq",
  CONTACT: "/contact",

  // Auth routes
  JOIN: "/join",
  LOGIN: "/login",
  REGISTER_USER: "/register-user",
  PARTNER_REGISTER: "/register-partner",
  FORGOT_PASSWORD: "/forgot-password",
  VERIFY_OTP: "/verify-otp",
  PROFILE: "/profile",

  // Unauthorized route
  UNAUTHORIZED: "/unauthorized",

  // Private routes Customer
  BOOKINGS: "/bookings",
  MY_WALLET: "/my-wallet",
  PAYMENT: "/payment",

  // Partners Private routes
  PARTNER_DASHBOARD: "partner/dashboard",
  PARTNER_MANAGE_SERVICES: "partner/manage-services",
  // partner profile menu
  PARTNER_PROFILE: "/partner/profile",
  PARTNER_PAYMENT: "/partner/payment",
  PARTNER_SUPPORT: "/partner/support",

  //Super Admin Routes
  SUPERADMIN_DASHBOARD: "superadmin/dashboard",
  SUPERADMIN_SERVICES: "superadmin/services",
  SUPERADMIN_PARTNERS: "superadmin/partners",
  SUPERADMIN_PROFILE: "superadmin/profile",
};
