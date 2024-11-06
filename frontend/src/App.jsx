import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Layout from "./Components/Layout/Layout";
import FormLayout from "./Components/FormLayout/FormLayout";

import "./App.css";
import LoginForm from "./Components/LoginForm/LoginForm";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {/* Otras rutas van aqui */}
            </Route>
            <Route path="/in" element={<FormLayout />}>
                <Route index element={<LoginForm />} />
                <Route path="login" element={<LoginForm />} />
                <Route path="register" element={<RegistrationForm />} />
            </Route>
        </Routes>
    );
}

export default App;
