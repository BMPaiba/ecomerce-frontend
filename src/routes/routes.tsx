import { createBrowserRouter } from "react-router-dom";
import { authRoutes } from "@/auth/routes/routes";
import { homeRoutes } from "@/home/routes/routes";

export const router = createBrowserRouter([...homeRoutes, ...authRoutes]);
