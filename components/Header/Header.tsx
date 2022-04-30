import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as SolidMoon } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white flex justify-between shadow-sm px-4 py-10 sm:px-20 sm:py-5">
      <Link href="/">
        <h1 className="cursor-pointer font-bold text-lg ">
          Where in the world?
        </h1>
      </Link>

      <button className="">
        <FontAwesomeIcon icon={SolidMoon} className="mr-2" />
        Dark Mode
      </button>
    </header>
  );
};

export default Header;
