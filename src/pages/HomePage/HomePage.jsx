import React from "react";
import Intro from "../../components/Introduction/Introduction";
import Skills from "../../components/ResumeCard/ResumeCard";

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