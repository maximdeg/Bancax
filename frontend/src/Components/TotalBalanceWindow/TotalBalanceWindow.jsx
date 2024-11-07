import React from "react";

import "./TotalBalanceWindow.css";

const TotalBalanceWindow = () => {
    return (
        <div className="total-balance-window">
            <div className="total-balance">
                <h3>Total balance</h3>
                <span>AR$ 5432.10</span>
            </div>
            <div className="total-balance-details">
                <h4>Details</h4>
                <ul>
                    <li>
                        <span>
                            Debito: <strong>AR$ 5000.00</strong>
                        </span>
                    </li>
                    <li>
                        <span>
                            Mercado pago: <strong>AR$ 400.00</strong>
                        </span>
                    </li>
                    <li>
                        <span>
                            Tarjetas de credito: <strong>AR$ 30.00</strong>
                        </span>
                    </li>
                    <li>
                        <span>
                            Efectivo: <strong>AR$ 2.00</strong>
                        </span>
                    </li>
                    <li>
                        <span>
                            Ahorros: <strong>AR$ 0.10</strong>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TotalBalanceWindow;
