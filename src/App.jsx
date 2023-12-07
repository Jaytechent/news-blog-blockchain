import React from "react";
import { Route, Routes } from "react-router-dom"; // Make sure to import from 'react-router-dom'
import Home from "./pages/Home";
import SportPage from "./pages/SportPage"; // Import SportPage and other components
import Entertainment from "./pages/Entertainment";
import FinancePage from "./pages/FinancePage";
import Technology from "./pages/Technology";
import MainLayout from "./layout/MainLayout";
import TravelPage from "./pages/TravelPage";
import BlockchainPage from "./pages/BlockchainPage";
import CoinPrice from "./pages/CoinPrice";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="/sport" element={<SportPage />} />
          <Route path="/health" element={<TravelPage />} />
          <Route path="/music" element={<Entertainment />} />
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/technews" element={<Technology />} />
          <Route path="/crypto" element={<BlockchainPage />} />
          <Route path="/coins" element={<CoinPrice />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
