import React, {useState} from "react";
import '../scss/main.scss';
import decoration from '../assets/Decoration.svg'
import Fundation from "./Pagination/Fundation";
import Organization from "./Pagination/Organization";
import Local from "./Pagination/Local";



const WhoHelp = () => {

    const [currentComponent, setCurrentComponent] = useState(<Fundation/>)

    const handleClickFundation = () => {
        setCurrentComponent(<Fundation/>)
    }

    const handleClikcOrganization = () => {
        setCurrentComponent(<Organization/>)
    }

    const handleClickLocal = () =>{
        setCurrentComponent(<Local/>)
    }

    return (
        <section className='whoHelp' id='whoHelp'>
            <div className='wrapper'>
                <div className='whoHelp__container'>
                    <h6>Komu Pomagamy?</h6>
                    <img src={decoration} className='whoHelp__decoration'/>
                    <div className='whoHelp__diffrence'>
                        <div className="pagination-btn" onClick={handleClickFundation}>Fundacje</div>
                        <div className="pagination-btn" onClick={handleClikcOrganization}>Organizacja<br/>pozarządowym</div>
                        <div className="pagination-btn" onClick={handleClickLocal}>Lokalnym<br/>zbiórka</div>
                    </div>
                    {currentComponent}
                </div>
            </div>
        </section>
    )
}

export default WhoHelp;