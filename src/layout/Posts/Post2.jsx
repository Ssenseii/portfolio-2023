/// Markdown Editor

import React from "react";
import Title from "../../components/Title";
import Website from "../../components/Website";
import Image from "../../components/Image";


const Post2 = () => {
    return (
        <div id="post2" className="text-box">
            <Title> Markdown editor</Title>
            <p>
                This is a small prototype for a code mirror written entirely
                with typescript and then compiled into javascript.
            </p>

            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web13.png"
                }
                caption="Simon's Editor"
            ></Website>

            <p>You write your tags + text in the green box</p>
            <Image
                src={"https://g-host-iiiing.sirv.com/portfolio/mkd-1.png"}
                caption={"Glassmorphic Editor Screen"}
            ></Image>

            <p>
                And receive your finished HTML result to be copied using the
                "Copy to Clipboard" Button
            </p>

            <Image
                src={"https://g-host-iiiing.sirv.com/portfolio/mkd-2.png"}
                caption={"Preview Screen (With Styles)"}
            ></Image>

            <p>
                This prototype works by parsing each line and changing it from
                markdown to HTML. It parses each line as a paragraph tag by
                default.
            </p>

            <p>
                It is well documented with <span>*comments*</span> and a pretty
                detailed github{" "}
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Ssenseii/simons-editor-prototype"
                >
                    ReadMe
                </a>{" "}
                page on how to modify it
            </p>

            <Image
                src={"https://g-host-iiiing.sirv.com/portfolio/mkd-3.png"}
                caption={"ReadMe Page - FAQ Section"}
            ></Image>

            <p>
                The <span>script.ts </span>
                implements both the{" "}
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://en.wikipedia.org/wiki/Visitor_pattern"
                >
                    Visitor
                </a>{" "}
                pattern and the{" "}
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern"
                >
                    Chain of Responsibility
                </a>{" "}
                pattern for each line to achieve the right HTML tag.
            </p>

            <p>
                It's now deployed on GitHub pages and I mainly used it a while
                back for creating documentation for Simon's Lab.
            </p>

            <a
                target="_blank"
                rel="noreferrer"
                href="https://ssenseii.github.io/simons-editor-prototype/"
            >
                DEMO
            </a>

            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web17.png"
                }
                caption="Use Case - Simon's Docs"
            ></Website>

            <p>
                I learned a lot of <span>typescript</span> concepts while
                working with this mainly how to effectively use unions with
                different types and interfaces. I understood more about code
                mirroring and markdown. Also, got to use two programming
                patterns: The visitor pattern and Chain of Responsibility
                pattern.
            </p>

            <p>
                Question I get asked the most about this project is{" "}
                <span>
                    Why did I create it from scratch when i could have used an
                    online tool?
                </span>
            </p>

            <p>
                It was just a fun challenge for me to become a better
                programmer.
            </p>
        </div>
    );
};

export default Post2;
