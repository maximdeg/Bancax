import React from "react";
import { Link } from "react-router-dom";

const AsideNav = () => {
    return (
        <aside className="aside-nav">
            <div className="sign-in-container">
                <Link to="/login">
                    <button className="btn btn-login">Login</button>
                </Link>
                <Link to="/sing-up">
                    <button className="btn btn-sing-up">Sign up</button>
                </Link>
            </div>
            <div>
                <div className="user-info">
                    <div>
                        <img />
                    </div>
                    <div>
                        <span>Hi there!</span>
                        <span>
                            <Link to="/profile/:id_user">Edit profile</Link>
                        </span>
                    </div>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/movements">Movements</Link>
                        </li>
                        <li>
                            <Link to="/category-list">Category List</Link>
                        </li>
                        <li>
                            <Link to="/circle-graphic">Circle Graphic</Link>
                        </li>
                        <li>
                            <Link to="/bars-graphic">Bars Graphic</Link>
                        </li>
                        <li>
                            <Link to="/xy-graphic">X&Y Graphic</Link>
                        </li>
                        <li>
                            <Link to="/settings">Settings</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div></div>
        </aside>
    );
};

export default AsideNav;
