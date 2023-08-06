import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

const Rutas = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Rutas;
