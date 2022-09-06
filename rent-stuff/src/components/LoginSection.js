import React, {useState} from "react";
import '../scss/main.scss';
import decoration from '../assets/Decoration.svg';

const LoginSection = () => {

    const validateEmail = form => {
        if (!form.email){
            return "Podany email jest nie prawidłowy!"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
            return "Zły e-mail!"
        }
        return null
    }

    const validatePassword = form => {
        if (!form.password){
            return "Podane hasło jest nie prawidłowe!"
        } else if (form.password.length < 2){
            return "Podane hasło jest za krótkie!"
        }
    }

    const [emailErr, setEmailErr] = useState(null);
    const [passwordErr, setPasswordErr] = useState(null);
    const [borderColor, setBorderColor] = useState('1px solid black');
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const updateField = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const emailError = validateEmail(form)
        if (emailError ) {
            setEmailErr(emailError )
            setBorderColor('1px solid red')
        }
        const passError = validatePassword(form)
        if (passError) {
            setPasswordErr(passError)
            setBorderColor('1px solid red')
            return
        }
        console.log('form submited', form)
    }

    return (
        <section className='login'>
            <div className='wrapper'>
                <div className='login__container'>
                    <div className='login__title'>Zaloguj się</div>
                     <img src={decoration} className='login__decoration' alt='decoration'/>
                    <form className='login__form'>
                        <div className='login__email'
                             style={
                                 {
                                     borderBottom: borderColor
                                 }
                             }>
                        <label>Email</label>
                        <input
                            type={"email"}
                            name={'email'}
                            onChange={updateField}

                        />
                            <div className='login__error' style={
                                {
                                    color: 'red',
                                    fontSize: '10px',
                                    fontWeight: '700',
                                    marginTop: '15px'
                                }
                            }>{emailErr}</div>
                        </div>
                        <div className='login__email'
                             style={
                                 {
                                     borderBottom: borderColor
                                 }
                             }>
                            <label>Hasło</label>
                            <input
                                type={"password"}
                                name={'password'}
                                onChange={updateField}
                            />
                            <div className='login__error' style={
                                {
                                    color: 'red',
                                    fontSize: '10px',
                                    fontWeight: '700',
                                    marginTop: '15px'
                                }
                            }>{passwordErr}</div>
                        </div>
                    </form>
                    <div className='login__register'>
                        <button className='login__btn'>Załóż konto</button>
                        <button className='login__btn' onClick={handleSubmit}>Zaloguj się</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginSection;