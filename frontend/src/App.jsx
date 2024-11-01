import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./Components/Layout/Layout";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {/* Otras rutas van aqui */}
            </Route>
            {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
    );
}

export default App;
