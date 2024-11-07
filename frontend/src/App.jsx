import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import LayoutPage from "./Pages/LayoutPage/LayoutPage";
import LoginForm from "./Components/LoginForm/LoginForm";
import FormLayoutPage from "./Pages/FormLayoutPage/FormLayoutPage";
import MovementsPage from "./Pages/MovementsPage/MovementsPage";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import ResetPasswordForm from "./Components/ResetPasswordForm/ResetPasswordForm";
import ForgotPasswordForm from "./Components/ForgotPasswordForm/ForgotPasswordForm";

import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LayoutPage />}>
                <Route index element={<HomePage />} />
                <Route path="movements" element={<MovementsPage />} />
            </Route>
            <Route path="/in" element={<FormLayoutPage />}>
                <Route index element={<LoginForm />} />
                <Route path="login" element={<LoginForm />} />
                <Route path="register" element={<RegistrationForm />} />
                <Route path="forgot-password" element={<ForgotPasswordForm />} />
                <Route path="reset-password" element={<ResetPasswordForm />} />
            </Route>
        </Routes>
    );
}

export default App;
