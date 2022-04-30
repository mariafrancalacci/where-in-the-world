import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Card from "../components/Card/Card";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <SearchBar />
      <Card />
      <Component {...pageProps} />{" "}
    </>
  );
}

export default MyApp;
