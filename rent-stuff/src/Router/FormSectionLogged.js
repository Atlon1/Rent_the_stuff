import React from "react";
import '../scss/main.scss';
import NavigationLoginIn from "../components/logeedComponents/NavigationLoginIn";
import Contact from "../components/Contact";
import FormSection from "../components/logeedComponents/FormSection";





export default function FormSectionLogged() {
    return (
        <>
            <NavigationLoginIn/>
            <FormSection/>
            <Contact/>
        </>
    )
};
