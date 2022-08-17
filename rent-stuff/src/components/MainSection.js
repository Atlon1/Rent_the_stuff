import React from "react";
import '../scss/main.scss';

const MainSection = () => {

    return (
        <section className='mainSection'>
            <div className='wrapper'>
                <div className='mainSection__container'>
                    <h1> Zacznij pomagac!</h1>
                    <p> Oddaj niechciane rzeczy w zaufane ręce</p>
                    <img src={require('../assets/Decoration.svg')}/>
                </div>
            </div>
        </section>
    )
}

export default MainSection;