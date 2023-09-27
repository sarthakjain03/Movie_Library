import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Movies, Trending, TvSeries, Search } from "./pages"

// import { useStateContext } from "./context/ContextProvider"
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="bg-black">
      <BrowserRouter>
        <div className="min-h-screen w-full">
          <div className="md:static w-full fixed">
            <Navbar />
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