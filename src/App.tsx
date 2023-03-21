import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ConfigProvider } from 'antd';
import Routers from "./routes";
import GbxRoutes from "./routes";

function App() {
  return (
      <ConfigProvider>
          <GbxRoutes/>
      </ConfigProvider>
  );
}

export default App;
