
import { Search } from "lucide-react";

interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="w-5 h-5 text-gray-400" />
      </div>
      <input
        type="search"
        className="block w-full py-3 pl-10 pr-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tracking-blue focus:border-transparent"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
