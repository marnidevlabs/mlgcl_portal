const routes = [
  {
    path: "/",
    path_name: "Home",
    component: "modules/home",
    layout: "Minimal",
  },
  {
    path: "/subject",
    path_name: "Subject",
    component: "modules/subject/pages/Subject",
    auth: true,
  },
  {
    path: "/dashboard",
    path_name: "Dashboard",
    component: "modules/dashboard/pages/Dashboard",
    auth: true,
  },
  {
    path: "/profile",
    path_name: "Profile",
    component: "modules/profile/pages/Profile",
    auth: true,
  },
  {
    path: "/employee",
    path_name: "Employee",
    component: "modules/employee/pages/Employee",
    auth: true,
  },
];

export default routes;
