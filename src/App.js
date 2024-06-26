import React, { useEffect } from "react";
import NavBar from "./components/Navbar/NavBar";
import HeroSection from "./components/HeroPart/Hero";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import { useState } from "react";
import Section from "./components/Section/Section";
import styles from "./App.module.css";
import FilterTabs from "./components/FilterTab/Filtertab";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [allSongsData, setAllSongsData] = useState([]);

  const generateTopAlbumData = async () => {
    const data = await fetchTopAlbums();
    setTopAlbumData(data);
  };

  const generateNewAlbumData = async () => {
    const data = await fetchNewAlbums();
    setNewAlbumData(data);
  };

  const generateAllSongsData = async () => {
    const data = await fetchSongs();
    setAllSongsData(data);
  };

  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
    generateAllSongsData();
  }, []);

  return (
    <>
      <NavBar />
      <HeroSection />
      <div className={styles.albumSectionWrapper}>
        <Section title="Top Albums" data={topAlbumData} type="album" />
        <Section title="New Albums" data={newAlbumData} type="album" />
        <hr />
        <div>
          <h3 className={styles.tabs}>Songs</h3>
        </div>

        <FilterTabs data={allSongsData} />
      </div>
    </>
  );
}

export default App;
