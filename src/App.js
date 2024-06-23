import React, { useEffect } from "react";
import NavBar from "./components/Navbar/NavBar";
import HeroSection from "./components/HeroPart/Hero";
import { fetchTopAlbums, fetchNewAlbums } from "./api/api";
import { useState } from "react";
import Section from "./components/Section/Section";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);

  const generateTopAlbumData = async () => {
    const data = await fetchTopAlbums();
    console.log(data);
    setTopAlbumData(data);
  };

  const generateNewAlbumData = async () => {
    const data = await fetchNewAlbums();
    setNewAlbumData(data);
  };
  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
  }, []);

  return (
    <>
      <NavBar />
      <HeroSection />
      <Section title="Top Albums" data={topAlbumData} type="album" />
      <Section title="New Albums" data={newAlbumData} type="album" />
    </>
  );
}

export default App;
