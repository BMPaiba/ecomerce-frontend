// src/home/layout/HomeLayout.jsx
import { Outlet } from "react-router-dom";

export const HomeLayout = () => {
    return (
        <div>
            <h2>Bienvenido a Home</h2>
            {/* Este Outlet renderiza las páginas de home */}
            <Outlet />
        </div>
    );
};
