import { AUTH_ROUTES } from "./auth.routes";
import { LANDINGPAGE_ROUTES } from "./landingpage.routes";

export const appRoutes = [...AUTH_ROUTES, ...LANDINGPAGE_ROUTES];
