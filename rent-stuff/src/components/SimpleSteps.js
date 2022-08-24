import React from "react";
import "../scss/main.scss";
import decoration from '../assets/Decoration.svg'
import icon1 from '../assets/Icon-1.svg'
import icon2 from '../assets/Icon-2.svg'
import icon3 from '../assets/Icon-3.svg'
import icon4 from '../assets/Icon-4.svg'
import {Link} from "react-router-dom";

const SimpleSteps = () => {

    return (
        <section className='simpleSteps' id='simpleSteps'>
            <div className='wrapper'>
                <div className='simpleSteps__container'>
                    <h4>Wystarczą 4 proste kroki</h4>
                    <img className='simpleSteps__decoration' src={decoration}/>
                    <div className='simpleSteps__content'>
                        <div className='simpleSteps__firstContent'>
                            <img className='simpleSteps__icon1' src={icon1}/>
                            <div className='simpleSteps__header'>Wybierz rzeczy</div>
                            <span> </span>
                            <p className='simpleSteps__text'>ubrania, zabawki, sprzęt i inne</p>
                        </div>
                        <div className='simpleSteps__secContent'>
                            <img className='simpleSteps__icon2' src={icon2}/>
                            <div className='simpleSteps__header'>Spakuj je</div>
                            <span> </span>
                            <p className='simpleSteps__text'>skorzystaj z worków na śmieci</p>
                        </div>
                        <div className='simpleSteps__thirdContent'>
                            <img className='simpleSteps__icon3' src={icon3}/>
                            <div className='simpleSteps__header'>Zdecyduj komu chcesz pomóc</div>
                            <span> </span>
                            <p className='simpleSteps__text'>wybierz zaufane miejsce</p>
                        </div>
                        <div className='simpleSteps__fourContent'>
                            <img className='simpleSteps__icon4' src={icon4}/>
                            <div className='simpleSteps__header'>Zamów kuriera</div>
                            <span> </span>
                            <p className='simpleSteps__text'>kurier przyjedzie w dogodnym terminie</p>
                        </div>
                    </div>
                    <button className="big-btn"><Link to="Login">ODDAJ<br/>RZECZY</Link></button>
                </div>
            </div>
        </section>
    )
}

export default SimpleSteps;