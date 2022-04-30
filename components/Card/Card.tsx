import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <Link href="/id">
      <div className="sm:flex flex-col-4 sm:pl-">
        <div className="bg-white mb-4 mr-20 ml-20 mt-20 flex flex-col rounded-lg shadow-md sm:mt-14 cursor-pointer">
          <Image
            src="/project-1.jpg"
            width="300"
            height="200"
            className="flex-non rounded-t-lg object-cover w-full"
          />
          <div className="flex flex-col gap-1 items-left px-8 py-4 pb-10">
            <h1 className="font-bold mb-4 text-lg">Country</h1>
            <span>Population:</span>
            <span>Region:</span>
            <span>Capital:</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
