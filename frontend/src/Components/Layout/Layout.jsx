import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AsideNav from "../AsideNav/AsideNav";

const Layout = () => {
    const location = useLocation();
    return (
        <>
            {location.pathname !== "/login" && <Header />}
            {location.pathname !== "/login" && <AsideNav />}
            <Outlet />
            {location.pathname !== "/login" && <Footer />}
        </>
    );
};

export default Layout;
