import React, {useEffect, useRef} from "react";
import '../../scss/main.scss';
import decoration from "../../assets/Decoration.svg";
import Typed from "typed.js";

const MainSectionLoggedForm = () => {

    const firstRef = useRef(null)

    useEffect(() => {
        const typedFirst = new Typed(firstRef.current, {
            strings:["Oddaj rzeczy, których nie chcesz <br/>POTRZEBUJACYM","Oddaj rzeczy, których nie chcesz <br/>Samotnym Matkom","Oddaj rzeczy, których nie chcesz <br/>Dzieciom"],
            startDelay: 0,
            typeSpeed: 20,
            backSpeed: 10,
            backDelay: 2000,
            bindInputFocusEvents: true,
            loop: true
        });

        return () => {
            typedFirst.destroy();

        }
    }, [])
    return (
        <section className='mainSectionForm'>
            <div className='wrapper'>
                <div className='mainSection_imgForm'/>
                <div className='mainSection__containerForm'>
                    <h1 ref={firstRef}> Oddaj rzeczy, których nie chcesz <br/>POTRZEBUJACYM</h1>
                    <img className='decorationForm' src={decoration} alt='decoration'/>
                    <div className='mainSectionForm__paragraph'> Wystarcza 4 proste kroki:</div>
                    <div className='mainSectionForm__fourSteps'>
                        <div className='mainSectionForm__fourSteps__element'>
                            <div className='mainSectionForm__fourSteps__text'>
                                <h2>1<br/> Wybierz<br/> rzeczy</h2>
                            </div>
                        </div>
                        <div className='mainSectionForm__fourSteps__element'>
                            <div className='mainSectionForm__fourSteps__text'>
                                <h2>2<br/> Spakuj je<br/>w worki</h2>
                            </div>
                        </div>
                        <div className='mainSectionForm__fourSteps__element'>
                            <div className='mainSectionForm__fourSteps__text'>
                                <h2>3<br/> Wybierz<br/>fundacje</h2>
                            </div>
                        </div>
                        <div className='mainSectionForm__fourSteps__element'>
                            <div className='mainSectionForm__fourSteps__text'>
                                <h2>4<br/> Zamów <br/>kuriera</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainSectionLoggedForm;