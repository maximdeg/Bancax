import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AsideNav from "../AsideNav/AsideNav";

import "./Layout.css";

const Layout = () => {
    // const location = useLocation();
    return (
        <div className="layout-container">
            <AsideNav />
            <div className="page-container">
                <Header />
                <main className="main">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;

// <div className="layout-container">
//             {location.pathname !== "/login" && <Header />}
//             <main className="main">
//                 {location.pathname !== "/login" && <AsideNav />}
//                 <Outlet />
//             </main>
//             {location.pathname !== "/login" && <Footer />}
//         </div>
