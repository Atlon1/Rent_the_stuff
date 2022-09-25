import React, {useState} from "react";
import '../../scss/main.scss';

const FormSection = () => {

    const [radio, setRadio] = useState("")

    const handleBtn = (e) => {
        setRadio(e.target.value)
        console.log(radio)
    }


    return (<section className='form'>
            <div className="wrapper">
                <div className='form__yellowBar'>
                    <div className='form__yellowBar__header'>Ważne!</div>
                    <div className='form__yellowBar__content'>Uzupłenij szczegóły dotczące Twoich rzeczy. Dzięki temu
                        będziemy wiedzieć komu najlepiej je przekazać.
                    </div>
                </div>
                <div className='form__pageOne'>
                    <div className='form__pageOne__steps'> Krok 1/4</div>
                    <div className='form__pageOne__header'>Zaznacz co chcesz oddać:</div>
                    <form className='form__pageOne__formRadio'>
                        <label className='form__pageOne__radio'><input type='radio'
                                                                       name='stuff'
                                                                       value='Ubrania, które nadaja sie do
                            ponownego użycia'
                                                                       onChange={e => setRadio(e.target.value)}
                        />Ubrania, które nadaja sie do
                            ponownego użycia</label>
                        <label className='form__pageOne__radio'><input type='radio'
                                                                       name='stuff'
                                                                       value={radio}
                        />Ubrania, do wyrzucenia</label>
                        <label className='form__pageOne__radio'><input type='radio'
                                                                       name='stuff'
                                                                       value={radio}
                        />zabawki</label>
                        <label className='form__pageOne__radio'><input type='radio'
                                                                       name='stuff'
                                                                       value={radio}
                        />książki</label>
                        <label className='form__pageOne__radio'><input type='radio'
                                                                       name='stuff'
                                                                       value={radio}
                        />Inne</label>
                    </form>
                    <button className="form__pageOne__btn" onClick={handleBtn}>Dalej</button>
                </div>
            </div>
        </section>)
}

export default FormSection;