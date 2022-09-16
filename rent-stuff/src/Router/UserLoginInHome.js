import React from "react";
import '../scss/main.scss';
import NavigationLoginIn from "../components/logeedComponents/NavigationLoginIn";
import MainSectionLogged from "../components/logeedComponents/MainSectionLogged";
import ThreeColumn from "../components/ThreeColumn";
import SimpleStepsLogged from "../components/logeedComponents/SimpleStepsLogged";
import AboutUs from "../components/AboutUs";
import WhoHelp from "../components/WhoHelp";
import Contact from "../components/Contact";






export default function UserLoginInHome() {
    return (
        <>
            <NavigationLoginIn/>
            <MainSectionLogged/>
            <ThreeColumn/>
            <SimpleStepsLogged/>
            <AboutUs/>
            <WhoHelp/>
            <Contact/>
        </>
    )
};