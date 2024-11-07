import React from "react";
import TotalBalanceWindow from "../../Components/TotalBalanceWindow/TotalBalanceWindow";
import MovementsWindow from "../../Components/MovementsWindow/MovementsWindow";

import "./HomePage.css";

const HomePage = () => {
    return (
        <section className="home-section">
            <TotalBalanceWindow />
            <MovementsWindow />
        </section>
    );
};

export default HomePage;
