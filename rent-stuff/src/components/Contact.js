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
                    <img src={background} className='contact_background'/>
                    <div className='contact__content'>
                        <h7>Skontaktuj się z nami</h7>
                        <img src={decoration} className='contact__decoration'/>
                        <div className='contact__inputCont'>
                            <div className='contact__firstCont'>
                                <div className='contact__firstCont__text'>Wpisz swoje imię</div>
                                <input className='contact__firstCont__name' type={"text"}/>
                            </div>
                            <div className='contact__SecCont'>
                                <div className='contact__SecCont__text'>Wpisz swoj email</div>
                                <input className='contact__SectCont__name' type={"text"}/>
                            </div>
                            <div className='contact__SecCont__text'>Wpisz swoja wiadomość</div>
                            <input className='contact__textarea' type={'textarea'}/>
                        </div>
                    </div>
                </div>
                <div className='contact__fotter'>
                    <div className='contact__copywrite'>Copyright by Atlon</div>
                    <img src={facebook} className='contact__facebook'/>
                    <img src={instagram} className='contact__instagram'/>
                </div>
            </div>
        </section>
    )
}

export default Contact;


