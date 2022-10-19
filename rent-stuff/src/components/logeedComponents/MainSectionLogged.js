import React from "react";
import '../../scss/main.scss';
import {Link} from "react-router-dom";
import decoration from "../../assets/Decoration.svg";


const MainSectionLogged = () => {

    return (
        <section className='mainSection'>
            <div className='wrapper'>
                <div className='mainSection_img'/>
                <div className='mainSection__container'>
                    <h1> Zacznij pomagać! <br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img className='decoration' src={decoration}/>
                    <div className='button__container'>
                        <button className="button__container__btn"><Link to="/UserLoginInHome/FormSection">ODDAJ<br/>RZECZY</Link></button>
                        <button className="button__container__btn"><Link to="/UserLoginInHome/FormSection">ZORGANIZUJ<br/>ZBIÓRKĘ</Link></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainSectionLogged;