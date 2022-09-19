import React from "react";
import Header from "../../components/Header/Header";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Country } from "../../types";
import { GetStaticPaths } from "next";
import Border from "../../components/Border/Border";

export interface DetailsProps {
  data: Country;
}

const Details = ({ data }: DetailsProps) => {
  console.log(data);
  return (
    <>
      <Header />
      <div className="px-4 sm:px-24 h-screen ">
        <div className="pt-10 pb-12 flex ">
          <Link href="/">
            <button
              className="shadow-md focus:outline-none px-8 py-2 text-primary flex justify-between items-center bg-white rounded-md 
             "
            >
              <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
              <span>Back</span>
            </button>
          </Link>
        </div>

        <div className="md:flex md:items-start">
          <img
            src={data.flag}
            width="500"
            height="300"
            className="object-cover"
          />

          <div className="xl:pl-32 md:pl-10 md:pl-10 sm:pt-6">
            <div>
              <h1 className="font-bold text-xl md:text-2xl pt-8 pb-6 md:pt-0">
                {data.name}
              </h1>
              <div className="md:flex md:mb-8 md:gap-x-[200px]">
                <div className="flex flex-col gap-3 mb-4 md:mb-0">
                  <p className="text-xs  font-semibold">
                    Native Name:
                    <span className="text-gray-700 pl-1 font-normal">
                      {data.nativeName}
                    </span>
                  </p>
                  <p className="text-xs  font-semibold">
                    Population:
                    <span className="text-gray-700 pl-1 font-normal">
                      {data.population}
                    </span>
                  </p>
                  <p className="text-xs  font-semibold">
                    Region:
                    <span className="text-gray-700 pl-1 font-normal">
                      {data.region}
                    </span>
                  </p>
                  <p className="text-xs  font-semibold">
                    Sub Region:
                    <span className="text-gray-700 pl-1 font-normal">
                      {data.subregion}
                    </span>
                  </p>
                  <p className="text-xs  font-semibold">
                    Capital:
                    <span className="text-gray-700 pl-1 font-normal">
                      {data.capital}
                    </span>
                  </p>
                </div>

                <div className="flex flex-col gap-3 mb-12 md:mb-0">
                  <p className="text-xs pt-8 md:pt-0  font-semibold">
                    Top Level Domain:
                    <span className="text-gray-700 pl-1 font-normal">
                      {data?.topLevelDomain.join(",")}
                    </span>
                  </p>
                  <p className="text-xs  font-semibold">
                    Currencies:
                    <span className="text-gray-700 pl-1 font-normal">
                      {data?.currencies?.map((c) => c.code).join(",")}
                    </span>
                  </p>
                  <p className="text-xs  font-semibold">
                    Languages:
                    <span className="text-gray-700 pl-1 font-normal">
                      {data?.languages?.map((l) => l.name).join(",")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="pb-12 md:pb-0 md:pt-0 flex-row-2 md:inline-flex md:flex-wrap gap-2 md:w-[750px] ">
              <p className="text-sm font-semibold ">Border Countries:</p>

              {data.borders ? (
                data.borders?.map((b) => <Border key={b} border={b} />)
              ) : (
                <p className="text-gray-700 font-normal pt-1 text-xs">
                  No border
                </p>
              )}
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
