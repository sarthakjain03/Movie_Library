import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"

import { useStateContext } from "./context/ContextProvider"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>

            <Route path="/" element={<LandingPage />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App