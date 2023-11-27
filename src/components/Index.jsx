import React from "react";
import { iconSingle } from "../constants/Constants";

const Index = ({ id, title, detail }) => {

    return (
        <div className="text-box_index">
            <div className="text-box_index-title">
                {iconSingle}
                <a href={`#post${id}`}>{title}</a>
            </div>
            <p>{detail}</p>
        </div>
    );
};

export default Index;
