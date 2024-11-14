import { BreadcrumbComponent } from "./breadcrumb";
import { Search } from "./search";

interface Props {}

export const SearchBar = ({}: Props) => {
  return (
    <div className="flex h-8 w-full items-center justify-between bg-primary-400 px-12">
      <BreadcrumbComponent />
      <Search />
    </div>
  );
};
