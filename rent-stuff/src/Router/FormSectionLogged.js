import React from "react";
import '../scss/main.scss';
import NavigationLoginIn from "../components/logeedComponents/NavigationLoginIn";
import Contact from "../components/Contact";
import FormSection from "../components/logeedComponents/FormSection";
import MainSectionLoggedForm from "../components/logeedComponents/MainSectionLoggedForm";





export default function FormSectionLogged() {
    return (
        <>
            <NavigationLoginIn/>
            <MainSectionLoggedForm/>
            <FormSection/>
            <Contact/>
        </>
    )
};
