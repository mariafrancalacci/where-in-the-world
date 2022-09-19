import React from "react";
import Link from "next/link";

interface CardProps {
  imageUrl: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  id: string;
}

const Card = ({
  imageUrl,
  capital,
  population,
  region,
  name,
  id,
}: CardProps) => {
  return (
    <Link href={`/country/${id}`}>
      <div className="mb-4 bg-white last:mb-0 sm:mb-0 transition duration-300 ease-in-out cursor-pointer transform hover:scale-101 hover:shadow-2xl  w-9/12 sm:w-full flex flex-col items-center rounded-md overflow-hidden shadow-md">
        <img src={imageUrl} className="flex-none h-40 object-cover w-full" />
        <div className=" flex-grow w-full px-6 pt-6 pb-10 text-primary">
          <h3 className="font-bold text-base mb-4">{name}</h3>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-bold">
              Population:
              <span className="text-gray-700 pl-1 font-normal">
                {population}
              </span>
            </p>
            <p className="text-xs font-bold">
              Region:
              <span className="text-gray-700 pl-1 font-normal">{region}</span>
            </p>
            <p className="text-xs font-bold">
              Capital:
              <span className="text-gray-700 pl-1 font-normal">{capital}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
