import React from "react";
import Title from "../components/Title";

import { profile } from "../constants/Constants";

const Finale = () => {
    return (
        <div className="text-box">
            <Title>In Conclusion:</Title>

            <p>I love what I do.</p>

            <p>
                This is my passion, this is what I will do for 10 hours a day,
                everyday without rest.
            </p>

            <p>
                I will continue to create because it is what I do best.
                Creating art, stories, experiences... They are{" "}
                <span>my legacy</span>
            </p>

            <p>
                I will continue to create because I love what I do no matter
                what, and I'll always give back to <span> the community </span>{" "}
                that gave me so much for free.
            </p>

            <div className="endcard">
                <img className="profile" src={profile} alt="" />

                <p>Aboussabr Saad</p>
                <p>saadabou.study@gmail.com</p>
                <p>2023</p>
            </div>
        </div>
    );
};

export default Finale;
