import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div>
                <Link to="/deposit">
                    <button className="btn btn-deposit">Deposit</button>
                </Link>
                <Link to="/withdraw">
                    <button className="btn btn-withdraw">Withdraw</button>
                </Link>
            </div>
            <div>
                <img style={{ width: "50px" }} src="./logo.jpg" alt="" />
            </div>
        </header>
    );
};

export default Header;
