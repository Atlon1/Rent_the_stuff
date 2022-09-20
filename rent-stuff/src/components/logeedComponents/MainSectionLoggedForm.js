import React from "react";
import '../../scss/main.scss';
import {Link} from "react-router-dom";
import decoration from "../../assets/Decoration.svg";


const MainSectionLoggedForm = () => {

    return (
        <section className='mainSectionForm'>
            <div className='wrapper'>
                <div className='mainSection_imgForm'/>
                <div className='mainSection__containerForm'>
                    <h1> Zacznij pomagać! <br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img className='decorationForm' src={decoration}/>
                    <div className='button__containerForm'>
                        <button className="big-btnForm"><Link to="/UserLoginInHome/FormSection">ODDAJ<br/>RZECZY</Link></button>
                        <button className="big-btnForm"><Link to="/UserLoginInHome/FormSection">ZORGANIZUJ<br/>ZBIÓRKĘ</Link></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainSectionLoggedForm;