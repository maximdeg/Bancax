import React from "react";
import { Link } from "react-router-dom";

import "./LoginForm.css";
const LoginForm = () => {
    return (
        <div className="login-container">
            <h2> Login</h2>
            {/* <h3>Welcome back!</h3> */}
            <form action="" className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Login</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="remember-container">
                    <div>
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <Link to="/forgot-password" className="link link-forgot">
                        Forgot Password?
                    </Link>
                </div>
                <div className="btn-container">
                    <button className="btn btn-signin">Sign In</button>
                </div>
            </form>
            <div className="link-container">
                <span>
                    New to Bancax?{" "}
                    <Link className="link link-signup" to={"/register"}>
                        Sign up!
                    </Link>
                </span>
            </div>
            <div className="copyright-container">
                <span>
                    © Maxim Degtiarev 2024. Only for portfolio purposes.
                </span>
            </div>
        </div>
    );
};

export default LoginForm;
