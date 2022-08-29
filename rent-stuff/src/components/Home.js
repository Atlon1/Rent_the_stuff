import React from "react";
import '../scss/main.scss';
import Navigation from "./navigation";
import MainSection from "./MainSection";
import ThreeColumn from "./ThreeColumn";
import SimpleSteps from "./SimpleSteps";
import AboutUs from "./AboutUs";
import WhoHelp from "./WhoHelp";

const Home = () => {

    return (
        <>
            <Navigation/>
            <MainSection/>
            <ThreeColumn/>
            <SimpleSteps/>
            <AboutUs/>
            <WhoHelp/>
        </>
    )
}

export default Home;