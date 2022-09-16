import React from "react";
import '../scss/main.scss';
import NavigationLoginIn from "../components/logeedComponents/NavigationLoginIn";
import MainSection from "../components/MainSection";
import ThreeColumn from "../components/ThreeColumn";
import SimpleSteps from "../components/SimpleSteps";
import AboutUs from "../components/AboutUs";
import WhoHelp from "../components/WhoHelp";
import Contact from "../components/Contact";





export default function UserLoginInHome() {
    return (
        <>
            <NavigationLoginIn/>
            <MainSection/>
            <ThreeColumn/>
            <SimpleSteps/>
            <AboutUs/>
            <WhoHelp/>
            <Contact/>
        </>
    )
};