import React from "react";
import { Link } from "react-router-dom";

import "./AsideNav.css";

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
            <div className="middle-container">
                <div className="user-info">
                    <div className="user-img">
                        <Link to="/profile/:id_user">
                            <img src="/user-1.jpg" />
                        </Link>
                    </div>
                    <div className="user-name">
                        <span className="name">Hi there!</span>
                        <span className="user-link">
                            <Link to="/profile/:id_user" className="link">
                                Edit profile
                            </Link>
                        </span>
                    </div>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li>
                            <Link to="/home" className="link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/movements" className="link">
                                Movements
                            </Link>
                        </li>
                        <li>
                            <Link to="/category-list" className="link">
                                Category List
                            </Link>
                        </li>
                        <li>
                            <Link to="/circle-graphic" className="link">
                                Circle Graphic
                            </Link>
                        </li>
                        <li>
                            <Link to="/bars-graphic" className="link">
                                Bars Graphic
                            </Link>
                        </li>
                        <li>
                            <Link to="/xy-graphic " className="link">
                                X&Y Graphic
                            </Link>
                        </li>
                        <li>
                            <Link to="/settings" className="link">
                                Settings
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="bottom-container"></div>
        </aside>
    );
};

export default AsideNav;
