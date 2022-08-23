import React from "react";
import '../scss/main.scss';
import Navigation from "./navigation";
import MainSection from "./MainSection";
import ThreeColumn from "./ThreeColumn";

const Home = () => {

    return (
        <>
            <Navigation/>
            <MainSection/>
            <ThreeColumn/>
        </>
    )
}

export default Home;