import React from "react";
import '../scss/main.scss';
import Navigation from "../components/navigation";
import MainSection from "../components/MainSection";
import ThreeColumn from "../components/ThreeColumn";
import SimpleSteps from "../components/SimpleSteps";
import AboutUs from "../components/AboutUs";
import WhoHelp from "../components/WhoHelp";
import Contact from "../components/Contact";




export default function Home() {
    return (
        <>
            <Navigation/>
            <MainSection/>
            <ThreeColumn/>
            <SimpleSteps/>
            <AboutUs/>
            <WhoHelp/>
            <Contact/>
        </>
    )
};