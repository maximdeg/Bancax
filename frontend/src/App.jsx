import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

const HomePage = lazy(() => import("./Pages/HomePage/HomePage.jsx"));
const MovementsPage = lazy(() => import("./Pages/MovementsPage/MovementsPage.jsx"));
const LayoutPage = lazy(() => import("./Pages/LayoutPage/LayoutPage.jsx"));
const LoginForm = lazy(() => import("./Components/LoginForm/LoginForm.jsx"));
const FormLayoutPage = lazy(() => import("./Pages/FormLayoutPage/FormLayoutPage.jsx"));
const RegistrationForm = lazy(() => import("./Components/RegistrationForm/RegistrationForm.jsx"));
const ResetPasswordForm = lazy(() => import("./Components/ResetPasswordForm/ResetPasswordForm.jsx"));
const ForgotPasswordForm = lazy(() => import("./Components/ForgotPasswordForm/ForgotPasswordForm.jsx"));

function App() {
    return (
        <Suspense fallback={<Loading />}>
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
        </Suspense>
    );
}

export default App;

const Loading = () => {
    return (
        <div className="loading-page">
            <div className="lds-ripple" bis_skin_checked="1">
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1"></div>
            </div>
        </div>
    );
};
