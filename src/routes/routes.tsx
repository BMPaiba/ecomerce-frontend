import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/layout/main-layout";
import { homeRoutes } from "@/features/home/routes/routes";
import { authRoutes } from "@/features/auth/routes/routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,  
    children: [
      ...homeRoutes,          
      ...authRoutes,           
    ],
  },
]);
