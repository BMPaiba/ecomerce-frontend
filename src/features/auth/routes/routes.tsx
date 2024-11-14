import { AuthLayout } from "../layout/auth-layout";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

export const authRoutes = [
  {
    path: "auth/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "*",
        index: true,
        element: <Login />,
      },
    ],
  },
];
