import React from "react";
import '../scss/main.scss';
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Navigation   = () => {

    return (
        <section className='navigation' id='navigation'>
            <div className='wrapper'>
                <div className='navigation__container'>
                    <div className='navigation__login'>
                        <Link className='navigation__login__login' to="/Login"> Zaloguj</Link>
                        <Link className='navigation__login__register' to="/Register"> Załóż konto</Link>
                    </div>
                    <div className='navigation__section'>
                        <input type='checkbox' className='menu__btn' id="menu__btn"/>
                        <label htmlFor='menu__btn' className='menu__toggle'>
                            <span/>
                            <span/>
                            <span/>
                        </label>
                        <ul className='navigation__list__container'>
                            <li className='list__item'>
                                <div className='list__link'>
                                    <Link to='/Login'>Start</Link>
                                </div>
                            </li>
                            <li className='list__item'>
                                <div className='list__link'>
                                    <HashLink smooth to={'#simpleSteps'}>O co chodzi?</HashLink>
                                </div>
                            </li>
                            <li className='list__item'>
                                <div className='list__link'>
                                    <HashLink smooth to={'#aboutUs'}>O nas</HashLink>
                                </div>
                            </li>
                            <li className='list__item'>
                                <div className='list__link'>
                                    <HashLink smooth to={'#whoHelp'}>Fundacja i organizacje</HashLink>
                                </div>
                            </li>
                            <li className='list__item'>
                                <div className='list__link'>
                                    <Link to='/Login'>Kontakt</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navigation;