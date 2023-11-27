/// Low Poly Laboratory

import React from "react";
import Title from "../../components/Title";
import Image from "../../components/Image";
import Website from "../../components/Website";

import {
    web12,
    lpl_1,
    lpl_2,
    lpl_3,
    lpl_4,
    lpl_5,
    lpl_6,
    lpl_7,
    lpl_8,
} from "../../constants/Constants";

const Post1 = () => {
    return (
        <div id="post1" className="text-box">
            <Title>Low Poly Laboratory</Title>

            <p>
                Low Poly Laboratory is a scalable 3d editor powered by threejs,
                written with no frameworks
            </p>

            <Website
                src={web12}
                caption={"Low Poly Laboratory - Alpha Release"}
            ></Website>

            <p>
                The idea for LPL started when I was learning about the workings
                of <span> threejs</span>.
            </p>
            <p>
                {" "}
                I was trying to understand how they work with buffer geometries
                that I came up with the idea for a 3d editor that would give
                someone - with no prior knowledge of threejs or 3d modeling -
                enough tools to play around and make whatever they want in a
                safe learning-friendly environment
            </p>

            <p>
                It started with a few sketches on a white paper to understand
                the kind of direction I wanted:
            </p>

            <Image src={lpl_1} caption={"My First Sketches"}></Image>

            <p>
                Then, I started prototyping on <span>Figma</span> where I set my
                goals, rules, features, and ideas board.
            </p>

            <iframe
                title="LPL"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FxGD74tVLHkt6A44iqqL1AD%2FLow-Poly-Laboratory---THREEJS-3D-Editor%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3DfpjjzznW62ZSPOOz-1"
                allowFullScreen
            >
                Low Poly Laboraty - Figma
            </iframe>
            <figcaption>Figma Design File (CTRL + Scroll = Zoom)</figcaption>

            <p>
                I applied my sketches and ideas to my <span>LO-FI design</span>,
                which contains the skeleton of the entire editor in raw colored
                boxes format.
            </p>

            <Image src={lpl_2} caption={"LoFi Design"}></Image>

            <p>
                The Low Fidelity design translated well into my{" "}
                <span> HI-FI Design. </span>
                Where I created my style sheet: colors, fonts, sizes from
                smallest to largest, radii and grid spacing. I also left space
                to add more features later.
            </p>

            <Image src={lpl_3} caption={"HiFi Design"}></Image>

            <p>
                Then I got to work on the prototype which used dat.gui to
                control the assets and materials. When I was assured you can
                control more than one object at a time and change its
                properties. I started working on Low Poly Laboratory's source
                code.
            </p>

            <p>
                It took me a couple of days to get the core functionality/design
                working. It was met with a lot of back and forth between me and
                three's manual and source code.
            </p>

            <p>
                You can watch the entire devlog and testing of Low Poly
                Laboratory on Youtube.
            </p>

            <a target="_blank" rel="noreferrer" href="youtube.com">
                Youtube Link
            </a>

            <p>You can access the source code on github: </p>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Ssenseii/low-poly-laboratory"
            >
                Source Code
            </a>

            <p>Or you can check out the demo and try it out for yourself !!</p>

            <a
                target="_blank"
                rel="noreferrer"
                href="https://low-poly-laboratory.vercel.app/"
            >
                Low Poly Laboratory - Pre-Alpha Release
            </a>
            <p>
                Here are some of the things you can make in Low Poly laboratory:
            </p>

            <Image src={lpl_4} caption={"Perfume Bottle"}></Image>
            <Image src={lpl_5} caption={"Low Triangle Ocean"}></Image>
            <Image
                src={lpl_6}
                caption={"Reflective Lollipop with Bubblegum Core"}
            ></Image>
            <Image src={lpl_7} caption={"Glassified Donut"}></Image>
            <Image
                src={lpl_8}
                caption={"Oh it's just a... PERRY THE PLATYPUS !!!"}
            ></Image>

            <p>
                LPL is in constant development, and always will be as long as
                threejs is evolving...
            </p>
        </div>
    );
};

export default Post1;
