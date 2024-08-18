import React, { useState, useMemo } from "react";
import { FiSearch } from "react-icons/fi";
import { debounce } from "../utils/debounce";

interface SearchSectionProps {
  onSearch: (query: string) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const debouncedSearch = useMemo(() => debounce(onSearch, 500), [onSearch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // using  debounced search function
    debouncedSearch(query);
  };

  return (
    <div className="bg-[#DADBF0] py-16">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-bold mb-8">How can we help?</h1>
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
              className="w-full p-4 pr-12 rounded-md shadow-sm focus:ring-2 focus:ring-[#b6b9f1] focus:outline-none text-base sm:text-lg"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2">
              <FiSearch className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
