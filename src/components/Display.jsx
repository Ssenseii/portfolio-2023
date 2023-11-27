import React from "react";
import { iconLeaf } from "../constants/Constants";

import Website from "./Website";

const Display = ({ title, src, caption, desc }) => {
    return (
        <div className="display">
            <div className="display_title">
                {iconLeaf}
                <h3>{title}</h3>
            </div>
            <p>{desc}</p>
            <Website
                src={src}
                caption={caption}
            />
        </div>
    );
};

export default Display;
