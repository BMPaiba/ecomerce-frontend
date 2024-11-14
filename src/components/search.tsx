import SearchIcon from "./icons/search";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Props {}

export const Search = ({}: Props) => {
  return (
    <div className="flex h-8 w-72 items-center space-x-2">
      <div className="relative w-72">
        <Input
          type="text"
          placeholder="buscar..."
          className="h-7 border-none bg-white pr-10 outline-none focus:outline-none focus:ring-2 focus-visible:ring-blue-500" // Ajusta padding
        />
        <Button
          type="submit"
          className="absolute right-0 top-0 h-full border-none bg-transparent px-3 focus:outline-none"
        >
          <SearchIcon className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
