import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LayoutMain from "../components/layout";
import Home from "../pages/Home/Home";


const GbxPagesRoutes: React.FC = () => {


    return (

            <LayoutMain>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </LayoutMain>


    );
}

export default GbxPagesRoutes;