import React from "react";
import Header from "../components/Header/Header";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Countryflag = () => {
  return (
    <>
      <Header />
      <div>
        <div className="px-4 pt-12 sm:px-24 h-screen">
          <Link href="/">
            <button className="shadow-lg bg-white px-7 py-2 flex justify-between items-center">
              <FontAwesomeIcon className="mr-4" icon={faArrowLeft} />
              <span>Back</span>
            </button>
          </Link>

          <div className="flex flex-col pt-20 sm:items-start ">
            <Image
              src="/project-1.jpg"
              width="300"
              height="200"
              className="flex-non object-cover w-full"
            />
            <div className="pb-10">
              <div className="flex flex-col gap-2">
                <h1 className="font-bold pt-10 mb-4 text-lg">Country Name</h1>
                <span>Native Name:</span>
                <span>Population:</span>
                <span>Region:</span>
                <span>Sub Region:</span>
                <span>Capital:</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span>Top Level Domain:</span>
              <span>Currencies:</span>
              <span>Languages:</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countryflag;
