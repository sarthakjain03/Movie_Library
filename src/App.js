import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Movies, Trending, TvSeries, Search } from "./pages"
import { useMediaQuery } from "@mui/material";
import { Navbar, MobileNav } from "./components";

const App = () => {
  const mobileView = useMediaQuery('(max-width:767px)')

  return (
    <div className="bg-black">
      <BrowserRouter>
        <div className="min-h-screen w-full">
          <div className="w-full static">
            {mobileView ? <MobileNav /> : <Navbar />}
          </div>
          <div>
            <Routes>
            
              <Route path="/" element={ <Navigate to="/trending" /> } exact />
              <Route path="/trending" element={<Trending />} />
              <Route path="/tvseries" element={<TvSeries />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/search" element={<Search />} />

            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App