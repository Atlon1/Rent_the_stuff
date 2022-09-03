import React from "react";
import '../scss/main.scss';
import decoration from '../assets/Decoration.svg';
import facebook from '../assets/Facebook.svg';
import instagram from '../assets/Instagram.svg';
import background from '../assets/Background-Contact-Form.jpg';

const Contact = () => {

    return (
        <section className='contact' id='contact'>
            <div className='wrapper'>
                <div className='contact__container'>
                    <div className='contact__background'/>
                    <div className='contact__content'>
                        <h7>Skontaktuj się z nami</h7>
                        <img src={decoration} className='contact__decoration' alt='decoration'/>
                        <form className='contact__inputCont'>
                            <div className='contact__formCont'>
                                <div className='contact__input'>
                                    <label>Wpisz sowje imię</label><input placeholder="Maciej"/>
                                </div>
                                <div className='contact__input'>
                                    <label>Wpisz swój email</label><input placeholder="abc@yx.pl"/>
                                </div>
                            </div>
                            <div className='contact__textarea'>
                                <label>Wpisz swoją wiadomość</label>
                                <textarea
                                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                            </div>
                        </form>
                        <button className='contact__submit'>Wyślij</button>
                    </div>
                </div>
                <div className='contact__fotter'>
                    <div className='contact__copywrite'>Copyright by Atlon</div>
                    <div className='contact__fbIN'>
                    <img src={facebook} className='contact__facebook' alt='facebook'/>
                    <img src={instagram} className='contact__instagram' alt='instagram'/>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;


