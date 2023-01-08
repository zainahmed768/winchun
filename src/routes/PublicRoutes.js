import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import "../assets/css/variables.css";

const PublicRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default PublicRoutes;
