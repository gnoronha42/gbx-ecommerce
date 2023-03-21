import React from "react";
import "./App.css";
import { ConfigProvider } from 'antd';
import GbxRoutes from "./routes";
import {

    QueryClient,
    QueryClientProvider,
} from 'react-query'

function App() {
   const queryClient = new QueryClient()

    return (
      <ConfigProvider>
        <QueryClientProvider client={queryClient}>
          <GbxRoutes/>
        </QueryClientProvider>
      </ConfigProvider>
  );
}

export default App;
