import React, {useEffect, useState, useRef} from "react";
import '../scss/main.scss';
import backgorundThree from '../assets/3 Columns Background.png'
import Aos from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";

const ThreeColumn = () => {

    const [bag, setbag] = useState(0);
    const [organization, setOrganization] = useState(0);
    const [grab, setGrab] = useState(0);
    const elFirst = useRef(null);
    const elSec = useRef(null);
    const elThird = useRef(null);


    useEffect(() => {
        Aos.init({duration: 1000})
        const typedFirst = new Typed(elFirst.current, {
            strings:["1","2","3","4","5","6","7","8","9","10"],
            startDelay: 500,
            typeSpeed: 0,
            backSpeed: 0,
            backDelay: 0,
            bindInputFocusEvents: true,

        });
        const typedSec = new Typed(elSec.current, {
            strings:["1","2","3","4","5","6","7","8","9","10"],
            startDelay: 500,
            typeSpeed: 0,
            backSpeed: 0,
            backDelay: 0,
            bindInputFocusEvents: true,

        });
        const typedThird = new Typed(elThird.current, {
            strings:["1","2","3","4"],
            startDelay: 500,
            typeSpeed: 40,
            backSpeed: 0,
            backDelay: 0,
            bindInputFocusEvents: true,

        });

        return () => {
            typedFirst.destroy();
            typedSec.destroy();
            typedThird.destroy();
        }
    }, [])



    return (
        <section className='three__column'>
            <div className='wrapper'>

                <div className='three__column__container'>
                    <img className='three__column__background' src={backgorundThree} alt='backgorund'/>
                    <div className='three__column__description'>
                        <div data-aos="flip-up" className='three__column__firstCont'>
                            <h2 ref={elFirst}>{bag}</h2>
                            <h3>ODDANYCH WORKÓW</h3>
                            <p className='three__column__text'>Lorem ipsum dolor sit amet, consectetur adipisc
                                Pellentesque vel enim a elit viverra
                                elementuma. Aliquam erat volutpat.</p>
                        </div>
                        <div data-aos="flip-down" className='three__column__secCont'>
                            <h2 ref={elThird}>{organization}</h2>
                            <h3>WSPARTYCH ORGANIZACJI</h3>
                            <p className='three__column__text'>Lorem ipsum dolor sit amet, consectetur adipisc
                                Pellentesque vel enim a elit viverra
                                elementuma. Aliquam erat volutpat.</p>
                        </div>
                        <div data-aos="flip-right" className='three__column__thirdCont'>
                            <h2 ref={elSec}>{grab}</h2>
                            <h3>ZORGANIZOWANYCH ZBIÓREK</h3>
                            <p className='three__column__text'>Lorem ipsum dolor sit amet, consectetur adipisc
                                Pellentesque vel enim a elit viverra
                                elementuma. Aliquam erat volutpat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThreeColumn;