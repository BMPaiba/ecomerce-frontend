// src/auth/layout/AuthLayout.jsx
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div>
      <h2>Autenticación</h2>
      {/* Este Outlet renderiza las páginas de autenticación */}
      <Outlet />
    </div>
  );
};
