import { LANDINGPAGE_ROUTES } from "./routes/landingpage.routes";
import { AUTH_ROUTES } from "./routes/auth.routes";
import { BOOKING_ROUTES } from "./routes/booking.routes";
import { PROFILE_ROUTES } from "./routes";

export const appRoutes = [
  ...AUTH_ROUTES,
  ...LANDINGPAGE_ROUTES,
  ...BOOKING_ROUTES,
  ...PROFILE_ROUTES,
];
