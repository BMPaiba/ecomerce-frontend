import { Link } from "react-router-dom";
import LogoIcon from "./icons/logo";
import PersonIcon from "./icons/user";

interface Props {}

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export const Header = ({}: Props) => {
  return (
    <header className="hidden md:flex w-full items-center justify-between px-12 py-3">
      <div>
        <LogoIcon />
      </div>
      <ul className="flex items-center justify-center gap-10 text-primary-900">
        {links.map(({ href, label }) => (
          <Link to={href}> {label} </Link>
        ))}
      </ul>
      <div className="flex items-center justify-between gap-2 rounded-2xl border border-primary-600 px-3 py-2 text-primary-600">
        <PersonIcon />
        <Link to={"/auth/login"} className="hover:cursor-pointer">Login</Link>
        <span className="">|</span>
        <Link to={"/auth/register"} className="hover:cursor-pointer">Register</Link>
      </div>
    </header>
  );
};
