import React from "react";
import { Outlet } from "react-router-dom";
import "./FormLayout.css";

const FormLayout = () => {
    return (
        <section className="form-section">
            <div className="form-container">
                <Outlet />
            </div>
        </section>
    );
};

export default FormLayout;
