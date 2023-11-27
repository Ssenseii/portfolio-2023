import React from "react";
import { iconDouble } from "../constants/Constants";


const WelcomeScreen = () => {
    return (
        <div className="welcome">
            <div className="welcome-wrapper">
                <div className="welcome_year">
                    {iconDouble}
                    <p>2023</p>
                </div>
                <div className="welcome_title">
                    <h1>Portfolio</h1>
                </div>
                <div className="welcome_author">
                    <p>Aboussabr Saad</p>
                    <p>a.k.a</p>
                    <p>
                        <span>Simon Reinhardt</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WelcomeScreen;
