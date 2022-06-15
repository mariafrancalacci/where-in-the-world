import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

type SearchProps = {
  setSearchText: (text: string) => void;
};

const SearchBar = ({ setSearchText }: SearchProps) => {
  return (
    <div className="w-full pt-7 sm:max-w-[38%] md:pl-10 pt-10">
      <div className="bg-white ml-4 mr-4 pl-6 pr-6 pt-5 pb-5 shadow-md flex items-center rounded-sm pt-4 pb-4 ">
        <FontAwesomeIcon icon={faSearch} className="pr-4" />
        <input
          type="text"
          placeholder="Search for a country..."
          className="font-sans w-full"
          onChange={(event) => setSearchText(event.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default SearchBar;
