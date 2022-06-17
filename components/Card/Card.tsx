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
      <div className="mt-12 rounded-lg shadow-lg bg-white pb-4 cursor-pointer transition duration-300 ease-in-out cursor-pointer transform hover:scale-101 hover:shadow-2xl  ">
        <Image
          src={imageUrl}
          width="350"
          height="200"
          className="flex-non rounded-t-md object-cover w-full"
        />
        <div className="p-6">
          <h3 className="font-bold mb-4">{name}</h3>
          <p className="text-xs font-bold">
            Population:
            <span className="text-gray-700 pl-1 font-normal">{population}</span>
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
    </Link>
  );
};

export default Card;
