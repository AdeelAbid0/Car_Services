import {
  AUTH_ROUTES,
  CUSTOMER_ROUTES,
  PARTNER_ROUTES,
  PUBLIC_ROUTES,
  SUPERADMIN_ROUTES
} from "./routes/index.jsx";

export const appRoutes = [
  ...AUTH_ROUTES,
  ...PUBLIC_ROUTES,
  ...CUSTOMER_ROUTES,
  ...PARTNER_ROUTES,
  ...SUPERADMIN_ROUTES
];
