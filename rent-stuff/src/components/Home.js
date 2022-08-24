import React from "react";
import '../scss/main.scss';
import Navigation from "./navigation";
import MainSection from "./MainSection";
import ThreeColumn from "./ThreeColumn";
import SimpleSteps from "./SimpleSteps";

const Home = () => {

    return (
        <>
            <Navigation/>
            <MainSection/>
            <ThreeColumn/>
            <SimpleSteps/>
        </>
    )
}

export default Home;