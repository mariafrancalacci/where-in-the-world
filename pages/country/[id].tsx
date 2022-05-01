import React from "react";
import Header from "../../components/Header/Header";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Country } from "../../types";
import { GetStaticPaths } from "next";

export interface DetailsProps {
  data: Country;
}

const Details = ({ data }: DetailsProps) => {
  console.log(data);
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
              src={data.flag}
              width="300"
              height="200"
              className="flex-non object-cover w-full"
            />
            <div className="pb-10">
              <div className="flex flex-col gap-2">
                <h1 className="font-bold pt-10 mb-4 text-lg">
                  {data.name} - Details
                </h1>
                <span>Native Name: {data.nativeName}</span>
                <span>Population: {data.population}</span>
                <span>Region: {data.region}</span>
                <span>Sub Region: {data.subregion}</span>
                <span>Capital: {data.capital}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span>Top Level Domain: {data.nativeName}</span>
              {/* <span>Currencies:{data.currencies}</span>
              <span>Languages:{data.languages}</span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

// https://restcountries.com/v2/alpha/pe

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://restcountries.com/v2/all`);
  const data = await res.json();

  return {
    paths: data.map((country: Country) => {
      return { params: { id: String(country.alpha3Code) } };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const res = await fetch(`https://restcountries.com/v2/alpha/${params.id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
