import { Header } from "@/components/header";
import { SearchBar } from "@/components/search-bar";
import { ThemeProvider } from "@/components/theme-provider";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <body className="font-poppins">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <SearchBar />
        <Outlet />
      </ThemeProvider>
    </body>
  );
};
