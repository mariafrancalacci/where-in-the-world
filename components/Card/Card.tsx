import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="mb-4 mr-20 ml-20 mt-20 t flex flex-col rounded-lg shadow-md">
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
  );

  //   padding-bottom: -15rem;
  //   margin-bottom: 2rem;
  //   display: grid;
  //   grid-template-rows: 2;
  //   border-radius: 15px;
  //   overflow: hidden;
  //   box-shadow: 0px 4px 15px 0px #0000001A;
  //   border-radius: 1rem 1rem 0.5rem 0.5rem;
};

export default Card;
