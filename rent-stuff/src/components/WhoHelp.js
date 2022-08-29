import React from "react";
import '../scss/main.scss';
import decoration from '../assets/Decoration.svg'
import {Link} from "react-router-dom";
import Fundation from "./Pagination/Fundation";


const WhoHelp = () => {

    return (
        <section className='whoHelp' id='whoHelp'>
            <div className='wrapper'>
                <div className='whoHelp__container'>
                    <h6>Komu Pomagamy?</h6>
                    <img src={decoration} className='whoHelp__decoration'/>
                    <div className='whoHelp__diffrence'>
                        <Link className="pagination-btn" to="Fundation">Fundacje</Link>
                        <Link className="pagination-btn" to="Login">Organizacja<br/>pozarządowym</Link>
                        <Link className="pagination-btn" to="Login">Lokalnym<br/>zbiórka</Link>
                    </div>
                    <div className='whoHelp__text'>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
                        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </div>

                    <Fundation/>
                </div>
            </div>
        </section>
    )
}

export default WhoHelp;