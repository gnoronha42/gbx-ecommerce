import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutMain from "../components/layout";
import Home from "../pages/Home/Home";
import Ecommerce from "../pages/ecommerce/Ecommerce";

const GbxPagesRoutes: React.FC = () => {
  return (
    <LayoutMain>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
      </Routes>
    </LayoutMain>
  );
};

export default GbxPagesRoutes;
