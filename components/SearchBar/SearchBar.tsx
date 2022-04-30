import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="w-full pt-7 sm:w-full">
      <div className="bg-white ml-4 mr-4 pl-6 pr-6 pt-5 pb-5  shadow flex items-center">
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
};

export default SearchBar;
