import React from "react";
import "./MovementsWindow.css";

const MovementsWindow = () => {
    return (
        <div className="movements-window">
            <div className="movements-title">
                <h2>Movements</h2>
            </div>
            <MovementsList />
        </div>
    );
};

export default MovementsWindow;

const MovementsList = () => {
    const movements = [
        {
            id: 1,
            action: "withdraw",
            source: "Bank",
            amount: 100,
            description: "Class income",
            date: "2022-01-01",
        },
        {
            id: 2,
            action: "deposit",
            source: "Bank",
            amount: 100,
            description: "Class income",
            date: "2022-01-01",
        },
        {
            id: 3,
            action: "withdraw",
            source: "Bank",
            amount: 100,
            description: "Class income",
            date: "2022-01-01",
        },
        {
            id: 4,
            action: "deposit",
            source: "Bank",
            amount: 100,
            description: "Class income",
            date: "2022-01-01",
        },
    ];
    return (
        <div className="movements-list">
            {movements.map((movement) => {
                return <MovementCard key={movement.id} movement={movement} />;
            })}
        </div>
    );
};

const MovementCard = ({ movement }) => {
    const { action, source, amount, description, date } = movement;
    return (
        <div className="movement-card">
            <div>
                <div>{date}</div>
                <div>{amount}</div>
                <div>{source}</div>
            </div>
            <div>
                <div>{description}</div>
            </div>
        </div>
    );
};
