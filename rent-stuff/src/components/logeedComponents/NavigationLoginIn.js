import React from "react";
import '../../scss/main.scss';
import {Link} from "react-router-dom";
import {HashLink} from 'react-router-hash-link';
import {auth} from "../../Firebase";
import {useNavigate} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";


const NavigationLoginIn = () => {

    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const signOutClick = () => {
        auth.signOut();
        navigate('/Wylogowano')
    }

    return (
        <section className='navigation' id='navigation'>
            <div className='wrapper'>
                <div className='navigation__container'>
                    <div className='navigation__login'>
                        <div className='navigation__login__login' style={
                            {
                                fontWeight: '700'
                            }
                        }>Cześć! {user.email}</div>

                        <Link className='navigation__login__login' style={
                            {
                                fontWeight: '700'
                            }
                        } to="/UserLoginInHome/FormSection"> Oddaj rzeczy</Link>
                        <button className='navigation__login__register' onClick={() => signOutClick()}>Wyloguj</button>
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
                                    <Link to='/UserLoginInHome'>Start</Link>
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
                                    <HashLink smooth to={'#contact'}>Kontakt</HashLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NavigationLoginIn;