import React from "react";

import Header from "./layout/Header";
import WelcomeScreen from "./layout/Welcome-Screen";
import Introduction from "./layout/Introduction";
import Contents from "./layout/Contents";
import Finale from "./layout/Finale";

/// Posts

import Post1 from "./layout/Posts/Post1";
import Post2 from "./layout/Posts/Post2";
import Post3 from "./layout/Posts/Post3";
import Post4 from "./layout/Posts/Post4";
import Post5 from "./layout/Posts/Post5";
import Post6 from "./layout/Posts/Post6";
import Post7 from "./layout/Posts/Post7";

function App() {
    return (
        <>
            <Header />
            <WelcomeScreen />
            <article className="wrapper">
                <Introduction />
                <Contents />

                <Post1 />
                <Post2 />
                <Post3 />
                <Post4 />
                <Post5 />
                <Post6 />
                <Post7 />

                <Finale />
            </article>
        </>
    );
}

export default App;
