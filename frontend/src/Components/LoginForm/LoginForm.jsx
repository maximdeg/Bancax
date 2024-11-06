import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <div>
            <h2> Login</h2>
            <h3>Welcome Back</h3>
            <div>
                <label htmlFor="email">Login</label>
                <input type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            <div>
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
                <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <div>
                <button type="submit" className="btn btn-login">
                    Sign In
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
