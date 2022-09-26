import React, {useState} from "react";
import '../../scss/main.scss';

const FormSection = () => {

    const [radio, setRadio] = useState("")
    const [selectItem, setSelectItem]= useState("")
    const [yellowHeader, setYellowHeader] = useState("Ważne!")
    const [yellowPara, setYellowPara] = useState("Uzupłenij szczegóły dotczące Twoich rzeczy. Dzięki temu\n" +
        "                        będziemy wiedzieć komu najlepiej je przekazać.");

    const [viewDisplayOnePage, setViewDisplayOnePage] = useState('block');
    const [viewDisplayTwoPage, setViewDisplayTwoPage] = useState('none');
    const [viewDisplayThirdPage, setViewDisplayThirdPage] = useState('none');
    const [viewDisplayFourPage, setViewDisplayFourPage] = useState('none');

    const handleBtnNextPageOne = (e) => {
        setRadio(e.target.value)
        setYellowPara('Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ!')
        setViewDisplayOnePage('none')
        setViewDisplayTwoPage('block')

        console.log(radio)
    }

    const handleBtnNextPageTwo = (e) => {
        setSelectItem(e.target.value)
        setYellowPara('Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądż celu ich pomocy.')
        setViewDisplayTwoPage('none')
        setViewDisplayThirdPage('block')

        console.log(radio,selectItem)
    }

    const handleBtnBackPageTwo = () => {
        setYellowPara("Uzupłenij szczegóły dotczące Twoich rzeczy. Dzięki temu\n" +
            "                        będziemy wiedzieć komu najlepiej je przekazać.")
        setViewDisplayOnePage('block')
        setViewDisplayTwoPage('none')

    }


    return (<section className='form'>
            <div className="wrapper">
                <div className='form__yellowBar'>
                    <div className='form__yellowBar__header'>{yellowHeader}</div>
                    <div className='form__yellowBar__content'>{yellowPara}</div>
                </div>
                <div className='form__pageOne' style={
                    {
                        display: viewDisplayOnePage
                    }
                }>
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
                                                                       value='Ubrania, do wyrzucenia'
                                                                       onChange={e => setRadio(e.target.value)}
                        />Ubrania, do wyrzucenia</label>
                        <label className='form__pageOne__radio'><input type='radio'
                                                                       name='stuff'
                                                                       value='zabawki'
                                                                       onChange={e => setRadio(e.target.value)}
                        />zabawki</label>
                        <label className='form__pageOne__radio'><input type='radio'
                                                                       name='stuff'
                                                                       value='książki'
                                                                       onChange={e => setRadio(e.target.value)}
                        />książki</label>
                        <label className='form__pageOne__radio'><input type='radio'
                                                                       name='stuff'
                                                                       value='Inne'
                                                                       onChange={e => setRadio(e.target.value)}
                        />Inne</label>
                    </form>
                    <button className="form__pageOne__btn" onClick={handleBtnNextPageOne}>Dalej</button>
                </div>
                <div className='form__pageTwo' style={
                    {
                        display: viewDisplayTwoPage
                    }
                }>
                    <div className='form__pageTwo__steps'> Krok 2/4</div>
                    <div className='form__pageTwo__header'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</div>
                    <form className='form__pageTwo__formSelect'>
                        <div className='form__pageTwo__formContent'>Liczba 60l worków:</div>
                        <select value={selectItem} className='form__pageTwo__select' onChange={e => setSelectItem(e.target.value)}>
                            <option value='0'>-- wybierz --</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </form>
                    <button className="form__pageTwo__btn" onClick={handleBtnBackPageTwo}>Wstecz</button>
                    <button className="form__pageTwo__btnNext" onClick={handleBtnNextPageTwo}>Dalej</button>
                </div>
            </div>
        </section>)
}

export default FormSection;