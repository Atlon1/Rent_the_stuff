import React from "react";
import '../scss/main.scss';
import decoration from '../assets/Decoration.svg';

const LoginSection = () => {

    return (
        <section className='login'>
            <div className='wrapper'>
                <div className='login__container'>
                    <div className='login__title'>Zaloguj się</div>
                     <img src={decoration} className='login__decoration' alt='decoration'/>
                    <form className='login__form'>
                        <div className='login__email'>
                        <label>Email</label>
                        <input
                            type={"text"}
                            name={'email'}
                        />
                        </div>
                        <div className='login__email'>
                            <label>Hasło</label>
                            <input
                                type={"password"}
                                name={'email'}
                            />
                        </div>
                    </form>
                    <div className='login__register'>
                        <button className='login__btn'>Załóż konto</button>
                        <button className='login__btn'>Zaloguj się</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginSection;