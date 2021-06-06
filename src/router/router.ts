import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import loadable from "../utils/loadable.js";
const Home = loadable(() => import("@/pages/Home"));
const User = loadable(() => import("@/pages/User"));
const Rank = loadable(() => import("@/pages/Rank"));
const Square = loadable(() => import("@/pages/Square"));
const Settings = loadable(() => import("@/pages/Settings"));
export type RouteType = {
  component: any;
  to: string;
  needAuth?: boolean;
} & FontAwesomeIconProps;
const router: RouteType[] = [
  {
    icon: "home",
    to: "/",
    needAuth: false,
    component: Home,
  },
  {
    icon: "user",
    to: "/user",
    needAuth: true,
    component: User,
  },
  {
    icon: "trophy",
    to: "/rank",
    needAuth: true,
    component: Rank,
  },
  {
    icon: "th",
    to: "/square",
    needAuth: true,
    component: Square,
  },
  {
    icon: "cogs",
    to: "/settings",
    needAuth: false,
    component: Settings,
  },
];
router.forEach((route: RouteType) => {
  route.size = "2x";
});
export default router;
