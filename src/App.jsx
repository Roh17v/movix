import { useState } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Movies from "./components/pages/Movies";
import TVshows from "./components/pages/TVshows";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-shows" element={<TVshows />} />
      </Routes>
    </div>
  );
}

export default App;
