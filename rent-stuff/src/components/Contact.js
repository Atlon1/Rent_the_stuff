import React, {useState} from "react";
import '../scss/main.scss';
import decoration from '../assets/Decoration.svg';
import facebook from '../assets/Facebook.svg';
import instagram from '../assets/Instagram.svg';


const Contact = () => {

    const validateName = form => {
        if (!form.name) {
            return "Podane imię jest nie prawidłowe!"
        } else if (form.name.length < 2) {
            return "Imię jest za krótkie!"
        }
        return null
    }

    const validateEmail = form => {
        if (!form.email) {
            return "Podany email jest nie prawidłowy!"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
            return "Zły e-mail!"
        }
        return null
    }

    const validateText = form => {
        if (!form.text) {
            return "Pole nie może być pustę!"
        } else if (form.text.length < 120) {
            return "Wiadomość musi mieć conajmniej 120 znaków!"
        }
        return null
    }

    const [nameErr, setNameErr] = useState(null);
    const [emailErr, setEmailErr] = useState(null);
    const [textErr, setTextErr] = useState(null);
    const [form, setForm] = useState({
        name: '',
        email: '',
        text: ''
    });
    const [borderColor, setBorderColor] = useState('1px solid black');
    const [agree, setAgree] = useState(<div/>)


    const updateField = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const nameError = validateName(form)
        if (nameError) {
            setNameErr(nameError)
            setBorderColor('1px solid red')
        }
        const emailError = validateEmail(form)
        if (emailError) {
            setEmailErr(emailError)
            setBorderColor('1px solid red')
        }
        const textError = validateText(form)
        if (textError) {
            setTextErr(textError)
            setBorderColor('1px solid red')
            return
        }
        console.log('form submited', form)
        return setAgree(
            <div className="Form_validate"
                 style={
                     {
                         color: '#49953a',
                         width: '230px',
                         textAlign: 'center',
                         fontWeight: '700',
                         marginBottom: '20px'
                     }
                 }>
                Wiadomość została wysłana! Wkrótce się skontaktujemy.
            </div>
        )

    }

    return (
        <section className='contact' id='contact'>
            <div className='wrapper'>
                <div className='contact__container'>
                    <div className='contact__background'/>
                    <div className='contact__content'>
                        <h7>Skontaktuj się z nami</h7>
                        <img src={decoration} className='contact__decoration' alt='decoration'/>
                        {agree}
                        <form className='contact__inputCont'>
                            <div className='contact__formCont'>
                                <div className='contact__input'
                                     style={
                                         {
                                             borderBottom: borderColor,
                                             margin: "8px"
                                         }
                                     }>
                                    <label>Wpisz sowje imię</label><input
                                    placeholder="Maciej"
                                    type="text"
                                    name="name"
                                    onChange={updateField}
                                />
                                    <div className='contact__error' style={
                                        {
                                            color: 'red',
                                            fontSize: '10px',
                                            fontWeight: '700',
                                            marginTop: '20px'
                                        }
                                    }>{nameErr}</div>
                                </div>
                                <div className='contact__input'
                                     style={
                                         {
                                             borderBottom: borderColor,
                                             margin: "8px"
                                         }
                                     }>
                                    <label>Wpisz swój email</label><input
                                    placeholder="abc@yx.pl"
                                    type="email"
                                    name="email"
                                    onChange={updateField}
                                />
                                    <div className='contact__error' style={
                                        {
                                            color: 'red',
                                            fontSize: '10px',
                                            fontWeight: '700',
                                            marginTop: '20px'
                                        }
                                    }>{emailErr}</div>
                                </div>
                            </div>
                            <div className='contact__textarea'
                                 style={
                                     {
                                         borderBottom: borderColor,
                                     }
                                 }>
                                <label>Wpisz swoją wiadomość</label>
                                <textarea
                                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                    name="text"
                                    onChange={updateField}
                                />
                            </div>
                            <div className='contact__error' style={
                                {
                                    color: 'red',
                                    fontSize: '10px',
                                    fontWeight: '700',
                                    marginTop: '10px',
                                    marginLeft: '8px'
                                }
                            }>{textErr}</div>
                        </form>
                        <button className='contact__submit' onClick={handleSubmit}>Wyślij</button>
                    </div>
                </div>
                <div className='contact__fotter'>
                    <div className='contact__copywrite'>Copyright by Atlon</div>
                    <div className='contact__fbIN'>
                        <img src={facebook} className='contact__facebook' alt='facebook'/>
                        <img src={instagram} className='contact__instagram' alt='instagram'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;


