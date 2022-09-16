import React, {useState}  from "react";
import '../scss/main.scss';
import decoration from '../assets/Decoration.svg';
import {Link} from "react-router-dom";
import {createUserWithEmailAndPassword} from "firebase/auth"
import {useNavigate} from 'react-router-dom'
import {auth} from "../Firebase";


const RegisterSection = () => {

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
        return null
    }

    const validateRePassword = form => {
        if (!form.password){
            return "Podane hasło jest nie prawidłowe!"
        } else if (form.password.length < 2){
            return "Podane hasło jest za krótkie!"
        }
        if (form.rePassword !== form.password){
            return 'Hasła nie są identyczne'
        }
        return null
    }

    const [emailErr, setEmailErr] = useState(null);
    const [passwordErr, setPasswordErr] = useState(null);
    const [passwordReErr, setPasswordReErr] = useState(null);
    const [borderColor, setBorderColor] = useState('1px solid black');
    const [form, setForm] = useState({
        email: '',
        password: '',
        rePassword:''
    })
    const navigate = useNavigate();

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
        }
        const passReError = validateRePassword(form)
        if(passReError) {
            setPasswordReErr(passReError)
            setBorderColor('1px solid red')
            return
        }
        createUserWithEmailAndPassword(auth, form.email, form.password)
            .then((auth)=>{navigate('/UserLoginInHome')})
            .catch(error=>console.error(error))
        console.log('form submited', form)
    }

    return (
        <section className='register'>
            <div className='wrapper'>
                <div className='register__container'>
                    <div className='register__title'>Załóż konto</div>
                    <img src={decoration} className='register__decoration' alt='decoration'/>
                    <form className='register__form'>
                        <div className='register__email'
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
                            <div className='register__error' style={
                                {
                                    color: 'red',
                                    fontSize: '10px',
                                    fontWeight: '700',
                                    marginTop: '15px'
                                }
                            }>{emailErr}</div>
                        </div>
                        <div className='register__email'
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
                            <div className='register__error' style={
                                {
                                    color: 'red',
                                    fontSize: '10px',
                                    fontWeight: '700',
                                    marginTop: '15px'
                                }
                            }>{passwordErr}</div>


                        </div>
                        <div className='register__email'
                             style={
                                 {
                                     borderBottom: borderColor
                                 }
                             }>
                            <label>Powtórz Hasło</label>
                            <input
                                type={"password"}
                                name={'rePassword'}
                                onChange={updateField}
                            />
                            <div className='register__error' style={
                                {
                                    color: 'red',
                                    fontSize: '10px',
                                    fontWeight: '700',
                                    marginTop: '15px'
                                }
                            }>{passwordReErr}</div>
                        </div>
                    </form>
                    <div className='register__register'>
                        <button className='register__btn'><Link to="/Login">Zaloguj się</Link></button>
                        <button className='register__btn' onClick={handleSubmit}>Załóż konto</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterSection;