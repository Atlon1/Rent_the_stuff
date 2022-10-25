import React from "react";
import '../scss/main.scss';
import decoration from '../assets/Decoration.svg';
import {Link} from "react-router-dom";

const WylogowanoSection = () => {

    return (
        <section className='wylogowano'>
            <div className='wrapper'>
                <div className='wylogowano__container'>
                    <div className='wylogowano__title'>Wylogowano nastąpiło pomyślnie!</div>
                    <img src={decoration} className='wylogowano__decoration' alt='decoration'/>
                    <div className='wylogowano__register'>
                        <button className='wylogowano__btn'><Link to="/Rent_the_stuff">Strona główna</Link></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WylogowanoSection;