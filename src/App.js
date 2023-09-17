import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Movies, Trending, TvSeries } from "./pages"

// import { useStateContext } from "./context/ContextProvider"
import { Navbar, SearchBar } from "./components";

const App = () => {
  return (
    <div className="bg-black">
      <BrowserRouter>
        <div className="min-h-screen w-full">
          <div className="md:static w-full fixed">
            <Navbar />
          </div>
          <div className="w-full flex justify-center items-center mt-5">
            <SearchBar />
          </div>
          <div>
            <Routes>
            
              <Route path="/" element={ <Navigate to="/trending" /> } exact />
              <Route path="/trending" element={<Trending />} />
              <Route path="/tvseries" element={<TvSeries />} />
              <Route path="/movies" element={<Movies />} />

            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App