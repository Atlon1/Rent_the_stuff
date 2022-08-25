import React from "react";
import '../scss/main.scss';
import decoration from '../assets/Decoration.svg';
import people from '../assets/People.jpg';
import signature from '../assets/Signature.svg';

const AboutUs = () => {

    return (
        <section className='aboutUs' id='aboutUs'>
            <div className='wrapper'>
                <div className='aboutUs__container'>
                    <div className='aboutUs__content'>
                        <h5>O nas</h5>
                        <img className='aboutUs__decoration' src={decoration}/>
                        <div className='aboutUs__text'>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</div>
                        <img className='aboutUs__signature' src={signature}/>
                    </div>
                    <img className='aboutUs__people' src={people}/>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;