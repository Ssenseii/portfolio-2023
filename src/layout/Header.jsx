import React, { useState, useEffect } from "react";

import {
    iconCV,
    iconTheme,
    iconMail,
    iconGithub,
    iconBackToTop
} from "../constants/Constants";

import CV from "../assets/downloadable/CV Frontend - EN  - Aboussabr Saad (November 2023).pdf"

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [theme, setTheme] = useState(false);

    if (theme) {
        document.documentElement.style.setProperty("--primary", "#0d070c");
        document.documentElement.style.setProperty("--secondary", "#dcd9d9");
        document.documentElement.style.setProperty("--accent", "#2ab1ab");
    } else {
        document.documentElement.style.setProperty("--primary", "#FBFBFC");
        document.documentElement.style.setProperty("--secondary", "#353637");
        document.documentElement.style.setProperty("--accent", "#41A9BF");
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const currentScrollPos = window.scrollY;
            if (prevScrollPos > currentScrollPos) {
                document.getElementById("header").style.top = "0";
            } else {
                document.getElementById("header").style.top = "-4rem";
            }
            setPrevScrollPos(currentScrollPos);
        });

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    });

    return (
        <header id="header" className="header">
            <button title="Resumé - CV" className="header__action">
                <a
                    href={CV}
                    download
                >
                    {iconCV}
                </a>
            </button>
            <button title="Github" className="header__action">
                <a
                    href="https://github.com/ssenseii"
                    target="_blank"
                    rel="noreferrer"
                >
                    {iconGithub}
                </a>
            </button>
            <button title="Email" className="header__action">
                <a href="mailto: saadabou.study@gmail.com">{iconMail}</a>
            </button>
            <button
                title="Scroll Back To Top"
                className="header__action"
                onClick={() => {
                    document.documentElement.scrollTop = 0;
                }}
            >
                {iconBackToTop}
            </button>
            <button
                title="Theme"
                className="header__action"
                onClick={() => {
                    setTheme(!theme);
                }}
            >
                {iconTheme}
            </button>
        </header>
    );
};

export default Header;
