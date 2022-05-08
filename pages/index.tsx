import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import SearchFilter from "../components/SearchFilter/SearchFilter";
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
      <SearchBar setSearchText={setSearchText} />
      <SearchFilter
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
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
