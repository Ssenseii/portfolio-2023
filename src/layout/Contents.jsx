import React from "react";
import Title from "../components/Title";
import Index from "../components/Index";

const Contents = () => {
    return (
        <div className="text-box">
            <Title>Table Of Contents</Title>
            <Index id="1" title={"Low Poly Laboratory"} detail={"3D Editor Powered by ThreeJS"} />
            <Index id="2" title={"Markdown Editor"} detail={"Typescript Code Mirror"} />
            <Index id="3" title={"Simon's Notes"} detail={"A Collection of My Thoughts"} />
            <Index id="4" title={"Simon's Gallery"} detail={"My 2023 Illustrations Showcase"} />
            <Index id="5" title={"UI-UX Examples"} detail={"Various Designs I Worked on"} />
            <Index id="6" title={"Art & Programming"} detail={"3D, Pixel Art, Books and More..."} />
            <Index id="7" title={"How I made this Portfolio"} detail={"Detailed Process Behind My Work"} />
        </div>
    );
};

export default Contents;
