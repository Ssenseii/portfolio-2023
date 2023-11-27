import React from "react";

const Website = ({ src, caption }) => {
    return (
        <>
            <img className="webpage" src={src} alt="website.png" />
            <figcaption>{caption}</figcaption>
        </>
    );
};

export default Website;
