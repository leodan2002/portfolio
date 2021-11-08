import React from "react";
import Intro from "../components/intro/intro";
import Skills from "../components/skill/skill";

function Home(){
    return (
        <div>
            <h1>Home</h1>
            <Skills />
            <Intro />
        </div>
    )
}

export default Home;