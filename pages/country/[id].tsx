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
      <div>
        <div className="px-10 md:px-12 pt-12 h-screen ">
          <Link href="/">
            <button
              className="px-8 py-2 mb-16 bg-white 
             shadow-md rounded-lg"
            >
              <FontAwesomeIcon className="mr-4" icon={faArrowLeft} />
              <span>Back</span>
            </button>
          </Link>

          <div className="grid md:grid-cols-2 gap-y-5 ">
            <Image
              src={data.flag}
              width="500"
              height="300"
              className="object-cover"
            />

            <div className="pb-10 flex-col md:pl-20">
              <h1 className="font-bold pt-6 md:pt-10 pb-6 text-xl">
                {data.name}
              </h1>
              <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 pb-2 align-baseline">
                <div>
                  <p className="text-xs pb-3 font-semibold">
                    Native Name:
                    <span className="text-gray-700 pl-1 font-normal">
                      {data.nativeName}
                    </span>
                  </p>
                  <p className="text-xs pb-3 font-semibold">
                    Population:
                    <span className="text-gray-700 pl-1 font-normal">
                      {data.population}
                    </span>
                  </p>
                  <p className="text-xs pb-3 font-semibold">
                    Region:
                    <span className="text-gray-700 pl-1 font-normal">
                      {data.region}
                    </span>
                  </p>
                  <p className="text-xs pb-3 font-semibold">
                    Sub Region:
                    <span className="text-gray-700 pl-1 font-normal">
                      {data.subregion}
                    </span>
                  </p>
                  <p className="text-xs pb-3 font-semibold">
                    Capital:
                    <span className="text-gray-700 pl-1 font-normal">
                      {data.capital}
                    </span>
                  </p>
                </div>

                <div>
                  <p className="text-xs pt-8 md:pt-6 pb-3 font-semibold">
                    Top Level Domain:
                    <span className="text-gray-700 pl-1 font-normal">
                      {data?.topLevelDomain.join(",")}
                    </span>
                  </p>
                  <p className="text-xs pb-3 font-semibold">
                    Currencies:
                    <span className="text-gray-700 pl-1 font-normal">
                      {data?.currencies?.map((c) => c.code).join(",")}
                    </span>
                  </p>
                  <p className="text-xs pb-3 font-semibold">
                    Languages:
                    <span className="text-gray-700 pl-1 font-normal">
                      {data?.languages?.map((l) => l.name).join(",")}
                    </span>
                  </p>
                </div>
              </div>
              <div className="md:pt-16 md:pb-0 md:flex-row gap-2">
                <p className="text-sm font-semibold pt-1.5 pb-3 ">
                  Border Countries:
                </p>
                <span className="flex flex-row gap-2 ">
                  {data.borders ? (
                    data.borders?.map((b) => <Border key={b} border={b} />)
                  ) : (
                    <p className="text-gray-700 pt-3 font-normal text-xs">
                      No border
                    </p>
                  )}
                </span>
              </div>
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
