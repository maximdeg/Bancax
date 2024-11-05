import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="movement-buttons">
                <Link to="/deposit">
                    <button className="btn btn-deposit">Deposit</button>
                </Link>
                <Link to="/withdraw">
                    <button className="btn btn-withdraw">Withdraw</button>
                </Link>
            </div>
            <div className="logo">
                <img src="/img/logo.jpg" alt="" />
            </div>
        </header>
    );
};

export default Header;
