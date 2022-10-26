import React, {useEffect} from "react";
import '../scss/main.scss';
import decoration from '../assets/Decoration.svg';
import people from '../assets/People.jpg';
import signature from '../assets/Signature.svg';
import Aos from "aos";
import "aos/dist/aos.css";


const AboutUs = () => {

    useEffect(() => {
        Aos.init({duration: 1000})
    },[])

    return (
        <section className='aboutUs' id='aboutUs'>
            <div className='wrapper'>
                <div className='aboutUs__container'>
                    <div data-aos="flip-left" className='aboutUs__content'>
                        <h5>O nas:</h5>
                        <img className='aboutUs__decoration' src={decoration} alt='decoration'/>
                        <div className='aboutUs__text'>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</div>
                        <img className='aboutUs__signature' src={signature} alt='signature'/>
                    </div>
                    <img data-aos="flip-right" className='aboutUs__people' src={people} alt='people'/>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;