import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as SolidMoon } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import useTheme from "../../hooks/useTheme";

const Header = () => {
  const { colorTheme, changeTheme } = useTheme();
  const handleToggleTheme = () => {
    console.log(colorTheme);
    changeTheme(colorTheme === "light" ? "dark" : "light");
  };
  return (
    <header className="bg-white dark:bg-cyan-400 flex justify-between shadow-sm px-4 py-10 sm:px-20 sm:py-5">
      <Link href="/">
        <h1 className="cursor-pointer font-sans font-bold text-lg  ">
          Where in the world?
        </h1>
      </Link>
    </header>
  );
};

export default Header;
