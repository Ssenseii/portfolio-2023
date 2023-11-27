import React from "react";

const Image = ({src, caption}) => {
    return (
        <>
            <img src={src} alt="alternate.png" />
            <figcaption>{caption}</figcaption>
        </>
    );
};

export default Image;
