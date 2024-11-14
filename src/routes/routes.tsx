import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/layout/main-layout";
import { homeRoutes } from "@/features/home/routes/routes";
import { authRoutes } from "@/features/auth/routes/routes";
import { NotFound } from "@/features/not-found/pages/404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,  
    children: [
      ...homeRoutes,          
      ...authRoutes,          
      {
        path: "*",  // Ruta comodín para cualquier ruta no coincidente
        element: <NotFound />, // Componente 404
      }, 
    ],
  },
]);
