import type { NextPage } from "next";
import Head from "next/head";
import { useMemo, useState } from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import SearchFilter from "../components/SearchFilter/SearchFilter";
import { Country } from "../types";

interface HomeProps {
  data: Country[];
}

const Home: NextPage<HomeProps> = ({ data }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const filteredData = useMemo<Country[]>(() => {
    let show = false;
    if (
      !selectedRegion ||
      (selectedRegion === "Filter by Region" && !searchText)
    ) {
      show = true;
    }
    return data
      .filter((c) =>
        selectedRegion === "" || selectedRegion === "Filter by Region"
          ? true
          : c.region === selectedRegion
      )
      .filter((c) => c.name.toUpperCase().includes(searchText.toUpperCase()));
  }, [data, selectedRegion, searchText]);

  return (
    <div className="bg-slate-50">
      <Header />
      <div className="px-4 sm:px-24">
        <div className="sm:grid sm:grid-cols-12 sm:gap-4 sm:content-center items-center mb-8 sm:mb-0">
          <SearchBar setSearchText={setSearchText} />
          <SearchFilter
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
        </div>
        <div className="flex flex-col sm:items-start items-center justify-center gap-16 sm:grid sm:grid-cols-2 content-start lg:grid-cols-4 sm:gap-12">
          {filteredData.map((country: Country) => {
            return (
              <Card
                key={country.name}
                imageUrl={country.flag}
                population={country.population}
                region={country.region}
                capital={country.capital || ""}
                name={country.name}
                id={country.alpha3Code}
              />
            );
          })}
        </div>
      </div>
    </div>
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
