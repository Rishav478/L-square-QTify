import React, { useEffect } from "react";
import NavBar from "./components/Navbar/NavBar";
import HeroSection from "./components/HeroPart/Hero";
import { fetchTopAlbums } from "./api/api";
import { useState } from "react";
import Section from "./components/Section/Section";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);

  const generateTopAlbumData = async () => {
    const data = await fetchTopAlbums();
    setTopAlbumData(data);
  };

  useEffect(() => {
    generateTopAlbumData();
  }, []);

  return (
    <>
      <NavBar />
      <HeroSection />
      <Section title="Top Albums" data={topAlbumData} type="album" />
    </>
  );
}

export default App;
