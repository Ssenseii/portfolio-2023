import React from "react";
import { iconDouble } from "../constants/Constants";

const Title = ({children}) => {
    return (
        <div className="text-box_title">
            {iconDouble}
            <h2>{children}</h2>
        </div>
    );
};

export default Title;
