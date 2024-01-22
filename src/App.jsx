import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Movies, TVshows } from "./components/pages";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-shows" element={<TVshows />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
