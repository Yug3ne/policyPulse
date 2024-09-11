import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import MainLayout from "./components/MainLayout";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes that use Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>

        {/* Routes that use MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/policyPulse" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
