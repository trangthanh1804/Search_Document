import Home from "pages/home/home.component";
import DetailCourse from "pages/detail-course/detail-course.component";
import Dashboard from "pages/dasboard/dashboard.component";
import Login from "pages/login/login";

export const mainRoutes = [
  {
    path: "/",
    Component: Home,
    exact: true,
  },
  {
    path: "/detail-course/:id",
    Component: DetailCourse,
    exact: true,
  },
  {
    path: "/login",
    Component: Login,
    exact: true,
  },
];

export const adminRoutes = [
  {
    path: "/admin",
    Component: Dashboard,
    exact: true,
  },
];
