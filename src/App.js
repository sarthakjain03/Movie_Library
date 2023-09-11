import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Trending } from "./pages"

import { useStateContext } from "./context/ContextProvider"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            
            <Route path="/" element={ <Navigate to="/trending" /> } exact />
            <Route path="/trending" element={<Trending />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App