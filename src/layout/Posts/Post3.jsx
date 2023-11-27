/// simonsnotes

import React from "react";
import Title from "../../components/Title";
import Image from "../../components/Image";
import Website from "../../components/Website";


const Post3 = () => {
    return (
        <div id="post3" className="text-box">
            <Title>Simon's Notes</Title>

            <p>
                My notes folder is littered with .txt files. I developed Simon's
                notes in React to harbor all my notes and also personal thoughts
                I don't mind sharing with the world.
            </p>
            <p>
                It's completely responsive. Very easy to read and comes with
                many <span>accessibility</span> options.
            </p>

            <Image
                src={"https://g-host-iiiing.sirv.com/portfolio/smn-1.png"}
                caption={"My Notes Folder"}
            ></Image>

            <p>These are the first concept sketches</p>

            <Image
                src={"https://g-host-iiiing.sirv.com/portfolio/smn-2.png"}
                caption={"Simon's Notes - Conception Sketches"}
            ></Image>

            <p>
                Here are both the <span>Figjam Conception</span> file and{" "}
                <span>Figma Final Design</span> file
            </p>
            <iframe
                title="figjamSimonsNotes"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5qqn6zWXRg9WrkZg6Fxwxd%2FSimons-Notes%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3Dde8z5DXyUTA6dFBU-1"
                allowFullScreen
            ></iframe>
            <figcaption>FigJam File</figcaption>

            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web22.png"
                }
                caption={"Desktop Design"}
            ></Website>

            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web31.png"
                }
                caption={"Mobile Design - Light Theme"}
            ></Website>
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web30.png"
                }
                caption={"Mobile Design - Dark Theme"}
            ></Website>

            <p>
                The main thing I learned while making Simon"s Notes is that{" "}
                <span> the users don't care what techniques you use</span> to
                achieve your goal as long as the website functions perfectly for
                them and helps them realize what they want.
            </p>

            <p>Here's the final website hosted on Vercel, Have fun reading:</p>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://simons-notes.vercel.app/e"
            >
                Simon's Notes
            </a>

            <p>
                and the source code, it's built entirely with <span>React</span>
                . Excuse the readme, I mostly used it to track my progress while
                coding the website.
            </p>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Ssenseii/simons-notes"
            >
                React Source Code
            </a>

            <p>
                Recently I've been thinking of building a second version of this
                website where people can authenticate. Customize the colors,
                fonts, tags, and logos to create their own notes using Sanity's
                CMS.
            </p>
        </div>
    );
};

export default Post3;
