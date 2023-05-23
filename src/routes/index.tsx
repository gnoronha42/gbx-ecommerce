import React from "react";
import { BrowserRouter } from "react-router-dom";
import GbxPagesRoutes from "./routes.gbx";
const GbxRoutes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <GbxPagesRoutes />
      </BrowserRouter>
    </>
  );
};

export default GbxRoutes;
