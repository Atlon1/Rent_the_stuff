import React, {useEffect, useRef} from "react";
import '../scss/main.scss';
import {Link} from "react-router-dom";
import decoration from "../assets/Decoration.svg";
import Typed from "typed.js";



const MainSection = () => {

    const firstRef = useRef(null)

    useEffect(() => {
        const typedFirst = new Typed(firstRef.current, {
            strings:["Zacznij pomagać! <br/>Oddaj niechciane rzeczy w zaufane ręce...","Zacznij pomagać! <br/>Nie wyrzucaj, możesz pomóc....","Zacznij pomagać! <br/>Tylko od Ciebie, zależy komu chcesz przekazać odrobine dobra!"],
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
        <section className='mainSection'>
            <div className='wrapper'>
                <div className='mainSection_img'/>
                <div className='mainSection__container'>
                    <h1 ref={firstRef}> Zacznij pomagać! <br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img className='decoration' src={decoration} alt='decoration'/>
                    <div className='button__container'>
                        <button className="button__container__btn"><Link to="Login">ODDAJ<br/>RZECZY</Link></button>
                        <button className="button__container__btn"><Link to="Login">ZORGANIZUJ<br/>ZBIÓRKĘ</Link></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainSection;