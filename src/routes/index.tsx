import React from "react";
import { BrowserRouter } from "react-router-dom";
import GbxPagesRoutes from "./routes.gbx";
const GbxRoutes: React.FC = () => {
  return (
    <>
      <BrowserRouter basename="/ecommerce-gbx">
        <GbxPagesRoutes />
      </BrowserRouter>
    </>
  );
};

export default GbxRoutes;
