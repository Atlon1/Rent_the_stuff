import React, {useEffect}from "react";
import "../../scss/main.scss";
import decoration from '../../assets/Decoration.svg'
import icon1 from '../../assets/Icon-1.svg'
import icon2 from '../../assets/Icon-2.svg'
import icon3 from '../../assets/Icon-3.svg'
import icon4 from '../../assets/Icon-4.svg'
import {Link} from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";


const SimpleStepsLogged = () => {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    return (
        <section className='simpleSteps' id='simpleSteps'>
            <div className='wrapper'>
                <div className='simpleSteps__container'>
                    <h4 data-aos="fade-up-left">Wystarczą 4 proste kroki</h4>
                    <img data-aos="fade-up-right" className='simpleSteps__decoration' src={decoration}
                         alt='decoration'/>
                    <div className='simpleSteps__content'>
                        <div className='simpleSteps__content__firstCont'>
                            <div className='simpleSteps__firstContent'>
                                <img data-aos="fade-up" className='simpleSteps__icon1' src={icon1} alt='shirt'/>
                                <div data-aos="flip-left" className='simpleSteps__header'>Wybierz rzeczy</div>
                                <span> </span>
                                <p data-aos="flip-left" className='simpleSteps__text'>ubrania, zabawki, sprzęt i
                                    inne</p>
                            </div>
                            <div className='simpleSteps__secContent'>
                                <img data-aos="fade-down" className='simpleSteps__icon2' src={icon2} alt="bag"/>
                                <div data-aos="flip-up" className='simpleSteps__header'>Spakuj je</div>
                                <span> </span>
                                <p data-aos="flip-up" className='simpleSteps__text'>skorzystaj z worków na śmieci</p>
                            </div>
                        </div>
                        <div className='simpleSteps__content__secCont'>
                            <div className='simpleSteps__thirdContent'>
                                <img data-aos="zoom-in-left" className='simpleSteps__icon3' src={icon3} alt='loop'/>
                                <div data-aos="flip-up" className='simpleSteps__header'>Zdecyduj komu chcesz pomóc</div>
                                <span> </span>
                                <p data-aos="flip-up" className='simpleSteps__text'>wybierz zaufane miejsce</p>
                            </div>
                            <div className='simpleSteps__fourContent'>
                                <img data-aos="zoom-out-down" className='simpleSteps__icon4' src={icon4} alt='around'/>
                                <div data-aos="flip-left" className='simpleSteps__header'>Zamów kuriera</div>
                                <span> </span>
                                <p data-aos="flip-left" className='simpleSteps__text'>kurier przyjedzie w dogodnym
                                    terminie</p>
                            </div>
                        </div>
                    </div>
                    <button data-aos="flip-left" className="big-btn"><Link to="/Rent_the_stuff/UserLoginInHome/FormSection">ODDAJ<br/>RZECZY</Link></button>
                </div>
            </div>
        </section>
    )
}

export default SimpleStepsLogged;