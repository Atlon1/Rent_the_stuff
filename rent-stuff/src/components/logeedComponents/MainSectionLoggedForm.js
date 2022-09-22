import React from "react";
import '../../scss/main.scss';
import {Link} from "react-router-dom";
import decoration from "../../assets/Decoration.svg";


const MainSectionLoggedForm = () => {

    return (
        <section className='mainSectionForm'>
            <div className='wrapper'>
                <div className='mainSection_imgForm'/>
                <div className='mainSection__containerForm'>
                    <h1> Oddaj rzeczy, których nie chcesz <br/>POTRZEBUJACYM</h1>
                    <img className='decorationForm' src={decoration}/>
                    <div className='mainSectionForm__paragraph'> Wystarcza 4 proste kroki:</div>
                    <div className='mainSectionForm__fourSteps'>
                        <div className='mainSectionForm__fourSteps__element'>
                            <div className='mainSectionForm__fourSteps__text'>
                                <h2>1</h2> <br/> Wybierz<br/> rzeczy
                            </div>
                        </div>
                        <div className='mainSectionForm__fourSteps__element'>
                            <div className='mainSectionForm__fourSteps__text'>
                                <h2>2</h2> <br/> Spakuj je<br/> w worki
                            </div>
                        </div>
                        <div className='mainSectionForm__fourSteps__element'>
                            <div className='mainSectionForm__fourSteps__text'>
                                <h2>3</h2><br/> Wybierz<br/>fundacje
                            </div>
                        </div>
                        <div className='mainSectionForm__fourSteps__element'>
                            <div className='mainSectionForm__fourSteps__text'>
                                <h2>4</h2><br/> Zamów <br/>kuriera
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainSectionLoggedForm;