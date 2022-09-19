import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as SolidMoon } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import useTheme from "../../hooks/useTheme";

const Header = () => {
  return (
    <header className="bg-white flex justify-between px-4 py-8 shadow-sm sm:px-24 sm:py-6">
      <Link href="/">
        <h1 className="transition duration-300 ease-in-out cursor-pointer transform hover:scale-125 text-primary font-bold sm:text-lg">
          Where in the world?
        </h1>
      </Link>
    </header>
  );
};

export default Header;
