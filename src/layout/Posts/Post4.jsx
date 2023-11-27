import React from "react";
import Title from "../../components/Title";
import Website from "../../components/Website";

import { vScrollBehaviour, web16 } from "../../constants/Constants";

const Post4 = () => {
    return (
        <div id="post4" className="text-box">
            <Title>Simon's Gallery</Title>
            <p>
                My simplest website and the fastest I've ever made. It's built
                with typescript for fun to host the illustrations that I made
                all throughout 2023.
            </p>
            <Website src={web16} caption= "Simon's 2023 Gallery"></Website>
            <p>
                It is responsive obviously. On desktop, it works by clicking and
                dragging to the left and right, with damping enabled for smooth
                transitions.
            </p>

            <video controls autoPlay>
                <source src={vScrollBehaviour} type="video/mp4" />
            </video>

            <p>
                Also has its own dedicated email service. That directly sends
                any message typed to my gmail.
            </p>

            <p>Here's the final website:</p>

            <a
                target="_blank"
                rel="noreferrer"
                href="https://simonsgallery.vercel.app/"
            >
                Simon's Gallery
            </a>

            <p>You can download and save any artwork you like.</p>
        </div>
    );
};

export default Post4;
