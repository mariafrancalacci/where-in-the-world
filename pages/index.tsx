import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import SearchFilter from "../components/SearchFilter/SearchFilter";
import useTheme from "../hooks/useTheme";
import styles from "../styles/Home.module.css";
import { Country } from "../types";

interface HomeProps {
  data: Country[];
}

const Home: NextPage<HomeProps> = ({ data }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  return (
    <>
      <Header />
      <div className="md:flex justify-between">
        <SearchBar setSearchText={setSearchText} />
        <SearchFilter
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      </div>
      <div className="flex flex-col items-center justify-center content-start sm:items-start gap-16 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-12 lg:gap-16s lg:ml-16 lg:mr-16 ">
        {data
          .filter((c) =>
            selectedRegion === ""
              ? true
              : c.region === selectedRegion &&
                c.name.toUpperCase().includes(searchText.toUpperCase())
          )
          .map((country: Country) => {
            return (
              <Card
                key={country.name}
                imageUrl={country.flag}
                population={country.population}
                region={country.region}
                capital={country.capital || ""}
                name={country.name}
              />
            );
          })}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(`https://restcountries.com/v2/all`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Home;
