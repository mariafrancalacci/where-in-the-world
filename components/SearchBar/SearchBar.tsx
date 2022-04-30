import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="w-full pt-7 sm:max-w-[38%] sm:pl-14 sm:pt-10">
      <div className="bg-white ml-4 mr-4 pl-6 pr-6 pt-5 pb-5  shadow flex items-center sm:rounded-sm sm:pt-4 pb-4 sm:ml-6">
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
};

export default SearchBar;
