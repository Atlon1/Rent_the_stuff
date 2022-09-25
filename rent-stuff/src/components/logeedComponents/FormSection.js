import React from "react";
import '../../scss/main.scss';

const FormSection = () => {

    return(
        <section className='form'>
            <div className="wrapper">
                <div className='form__yellowBar'>
                    <div className='form__yellowBar__header'>Ważne!</div>
                    <div className='form__yellowBar__content'>Uzupłenij szczegóły dotczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</div>
                </div>
                <div className='form__pageOne'>
                    <div className='form__pageOne__steps'> Krok 1/4</div>
                </div>
            </div>
        </section>
    )
}

export default FormSection;