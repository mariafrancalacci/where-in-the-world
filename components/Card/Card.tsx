import React from "react";
import Image from "next/image";
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
      <div className="bg-white lg:mb-4 lg:mr-8 lg:ml-8 mt-20 flex flex-col rounded-lg shadow-md sm:mt-14 cursor-pointer">
        <Image
          src={imageUrl}
          width="350"
          height="200"
          className="flex-non rounded-t-lg object-cover w-full"
        />
        <div className="flex flex-col gap-1 items-left px-8 py-4 pb-10">
          <h1 className="font-bold mb-4 text-lg ">{name}</h1>
          <span>Population: {population}</span>
          <span>Region: {region}</span>
          <span>Capital: {capital}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
