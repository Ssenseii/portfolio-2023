/// UI DESIGNS
import React from "react";
import Title from "../../components/Title";
import Website from "../../components/Website";

import {
    web1,
    web2,
    web3,
    web4,
    web5,
    web6,
    web7,
    web8,
    web9,
    web10,
    web11,

    web14,
    web15,

    web18,
    web19,

    web21,

    web23,
    web24,
    web25,
    web26,
    web27,
    web28,
    web29,

    /// icons
    iconLeaf,
} from "../../constants/Constants";

const Post5 = () => {
    return (
        <div id="post5" className="text-box">
            <Title>UI-UX Designs</Title>

            <p>
                As I continue to grow and learn, I try my best to participate in
                challenges, do community work, or freelance to support myself
                while I'm growing.
            </p>

            <p>
                Here are <span>Some of my favorite</span> works and designs (out
                of 78):
            </p>

            <div className="text-box_display">
                {iconLeaf}
                <h3>DanDaDan</h3>
            </div>
            <Website src={web4} caption={"DanDaDan - Slide"} />

            <div className="text-box_display">
                {iconLeaf}
                <h3>Dravida - Art E-Store</h3>
            </div>
            <Website src={web5} caption={"Dravida - Landing Page"} />

            <div className="text-box_display">
                {iconLeaf}
                <h3>HI-Success - Study Abroad Agency</h3>
            </div>
            <Website src={web6} caption={"Hi-Success - 2021 Design"} />
            <Website src={web7} caption={"Hi-Success - 2022 Re-Design"} />

            <div className="text-box_display">
                {iconLeaf}
                <a
                    href="https://ssenseii.github.io/I.bit/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Ibit- Puzzle Game
                </a>
            </div>
            <Website src={web8} caption={"Ibit - Slide #1: Journal Article"} />
            <Website
                src={web26}
                caption={"Ibit - Slide #4: Phone Conversation"}
            />
            <Website src={web27} caption={"Ibit - Slide #6: Choices Tree"} />

            <div className="text-box_display">
                {iconLeaf}
                <h3>Inktober 2023</h3>
            </div>
            <Website src={web9} caption={"Inktober 2023 - Landing Page"} />

            <div className="text-box_display">
                {iconLeaf}
                <h3>Instagram x Microsoft Fluent Design System</h3>
            </div>
            <Website
                src={web10}
                caption={
                    "Recreation of Instagram using Microsoft's Design System"
                }
            />

            <div className="text-box_display">
                {iconLeaf}
                <a
                    href="https://overclocker.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Overclocker: Community Gift
                </a>
            </div>
            <Website
                src={web14}
                caption={
                    "Keep track of your 'Deep Rock Galactic' obtained overclocks"
                }
            />

            <div className="text-box_display">
                {iconLeaf}
                <a
                    href="https://pixel-notes.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Pixel Notes
                </a>
            </div>
            <Website
                src={web15}
                caption={
                    "Website made entirely with pixel-art, live on vercel, with firebase Auth and storage"
                }
            />

            <div className="text-box_display">
                {iconLeaf}
                <a
                    href="https://simonslab.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Simon's Lab
                </a>
            </div>
            <Website src={web18} caption={"Simon's Lab - Landing Page"} />
            <Website
                src={web19}
                caption={"Simon's Lab - Dynamic Color Scheme"}
            />
            <Website
                src={web21}
                caption={"Simon's Lab - Project Info Screen"}
            />

            <div className="text-box_display">
                {iconLeaf}
                <h3>Tsuki - Note Taking App</h3>
            </div>
            <Website src={web24} caption={"Tsuki - Landing Page"} />
            <Website src={web23} caption={"Tsuki - Editor"} />
            <Website
                src={web25}
                caption={"Tsuki - Neumorphism + Dynamic Color"}
            />

            <div className="text-box_display">
                {iconLeaf}
                <h3>Simon's Gallery</h3>
            </div>
            <Website src={web28} caption={"Simon's Gallery - Landing Page"} />
            <Website src={web29} caption={"Simon's Gallery - Bottom Page"} />

            <div className="text-box_display">
                {iconLeaf}
                <h3>Random Ones</h3>
            </div>
            <Website src={web1} caption={"Achraf Kine - Main Page"} />
            <Website src={web2} caption={"Achraf Kine - About Page"} />
            <Website src={web3} caption={"Achraf Kine - Contact Page"} />
            <Website src={web11} caption={"Lapin Mockup - Sign In & Sign Up"} />
        </div>
    );
};

export default Post5;
