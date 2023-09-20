import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../Views/Dashboard/Dashboard';
import Slider from '../Views/Slider/Slider';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/slider" element={<Slider />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
