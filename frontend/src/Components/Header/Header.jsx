import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalTransaction from "../ModalTransaction/ModalTransaction";
import "./Header.css";

const Header = ({ isOpen, setIsOpen }) => {
    // const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="movement-buttons">
                {/* <Link to="/deposit"> */}
                {/* <button className="btn btn-deposit"> */}
                <button className="btn btn-deposit" onClick={() => setIsOpen(true)}>
                    Deposit
                </button>
                {/* </Link> */}
                <Link to="/withdraw">
                    <button className="btn btn-withdraw">Withdraw</button>
                </Link>
                {isOpen && <ModalTransaction setIsOpen={setIsOpen} />}
            </div>
            <div className="logo">
                <img src="/img/logo.jpg" alt="" />
            </div>
        </header>
    );
};

export default Header;
