import React from "react";
import { Link } from "react-router-dom";

import "./RegistrationForm.css";
const RegistrationForm = () => {
    return (
        <div className="login-container">
            <h2> Sign up</h2>
            {/* <h3>Welcome back!</h3> */}
            <form action="" className="registration-form">
                <div className="form-group">
                    <label htmlFor="name">Full name</label>
                    <input type="name" name="name" id="name" placeholder="John Doe" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="example@email.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="********" />
                </div>
                <div className="form-group">
                    <label htmlFor="password-confirm">Confirm Password</label>
                    <input type="password" name="password-confirm" id="password-confirm" placeholder="********" />
                </div>
                <div className="btn-container">
                    <button className="btn btn-signup">Sign Up</button>
                </div>
            </form>
            <div className="link-container">
                <span>
                    Already have an account?{" "}
                    <Link className="link link-signup" to={"/in/login"}>
                        Log in!
                    </Link>
                </span>
            </div>
            <div className="copyright-container">
                <span>© Maxim Degtiarev 2024. Only for portfolio purposes.</span>
            </div>
        </div>
    );
};

export default RegistrationForm;
