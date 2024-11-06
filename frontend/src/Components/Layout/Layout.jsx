import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

import "./Layout.css";

const Layout = () => {
    const location = useLocation();

    return (
        <div className="layout-container">
            {location.pathname !== "/login" && <Sidebar />}
            <div className="page-container">
                {location.pathname !== "/login" && <Header />}
                <main className="main">
                    <Outlet />
                </main>
                {location.pathname !== "/login" && <Footer />}
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
//
//         </div>
