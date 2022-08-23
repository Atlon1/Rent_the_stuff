import React from "react";
import '../scss/main.scss';
import backgorundThree from '../assets/3 Columns Background.png'

const ThreeColumn = () => {

    return (
        <section className='three__column'>
            <div className='wrapper'>
                <img className='three__column__background' src={backgorundThree}/>
                <div className='three__column__container'>
                    <div className='three__column__description'>
                        <div className='three__column__firstCont'>
                            <h2>10</h2>
                            <h3>ODDANYCH WORKÓW</h3>
                            <p className='three__column__text'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                                elementuma. Aliquam erat volutpat.</p>
                        </div>
                        <div className='three__column__secCont'>
                            <h2>5</h2>
                            <h3>WSPARTYCH ORGANIZACJI</h3>
                            <p className='three__column__text'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                                elementuma. Aliquam erat volutpat.</p>
                        </div>
                        <div className='three__column__thirdCont'>
                            <h2>10</h2>
                            <h3>ZORGANIZOWANYCH ZBIÓREK</h3>
                            <p className='three__column__text'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                                elementuma. Aliquam erat volutpat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThreeColumn;