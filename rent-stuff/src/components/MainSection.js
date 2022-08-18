import React from "react";
import '../scss/main.scss';
import {Link} from "react-router-dom";
import decoration from "../assets/Decoration.svg";


const MainSection = () => {

    return (
        <section className='mainSection'>
            <div className='wrapper'>
                <div className='mainSection_img'/>
                <div className='mainSection__container'>
                    <h1> Zacznij pomagać! <br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img className='decoration' src={decoration}/>
                    <div className='button__container'>
                        <button className="big-btn"><Link to="Login">Oddaj<br/>rzeczy</Link></button>
                        <button className="big-btn"><Link to="Register">Zorganizuj<br/>zbiórkę</Link></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainSection;