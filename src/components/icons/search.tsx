import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

const SearchIcon = ({ className }: ComponentPropsWithoutRef<"svg">) => (
  <svg
    width={18}
    height={19}
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={twMerge("w-full", className)}
  >
    <path
      d="M12.755 11.664h-.79l-.28-.27a6.47 6.47 0 0 0 1.57-4.23 6.5 6.5 0 1 0-6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99 1.49-1.49zm-6 0c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5"
      fill="#9990DA"
    />
  </svg>
);
export default SearchIcon;

