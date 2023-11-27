/// Art, Writing and Programming

import React from "react";
import Title from "../../components/Title";

import { dbr_1, dbr_2, dbr_3, dbr_4, art_0 } from "../../constants/Constants";
import Image from "../../components/Image";

const Post6 = () => {
    return (
        <div id="post6" className="text-box">
            <Title>Art & Programming</Title>

            <p>
                Outside Frontend Development and UI-UX Design, I write and draw
                a lot. Also, I program outside my area of expertise and study
                different programming languages like <span>Python</span>,{" "}
                <span>Shell Script</span> ,and <span>Lua</span>
            </p>

            <p>
                Here's a Database design I did for a fictional Centralized Book
                Store
            </p>

            <Image src={dbr_1} caption={"Problem"}></Image>
            <Image src={dbr_2} caption={"Data"}></Image>
            <Image src={dbr_3} caption={"End Points"}></Image>
            <Image src={dbr_4} caption={"UML Diagram"}></Image>

            <p>
                you can find most of my programming exercices either on{" "}
                <a
                    href="https://www.codewars.com/users/Ssenseii"
                    target="_blank"
                    rel="noreferrer"
                >
                    CodeWars
                </a>{" "}
                or by looking through my{" "}
                <a
                    href="https://github.com/ssenseii"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>{" "}
                repositories.
            </p>

            <p>
                As for my Art, I've shared enough of it over the years and you
                can always find it, but here's my favorite piece that I can show
                to employers:
            </p>

            <Image src={art_0} caption={"Make Art."}></Image>
        </div>
    );
};

export default Post6;
