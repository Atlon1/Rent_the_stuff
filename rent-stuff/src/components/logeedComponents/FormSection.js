import React, {useState} from "react";
import '../../scss/main.scss';
import shirt from '../../assets/Icon-1.svg';
import Rows from '../../assets/Icon-4.svg';
import decoration from  '../../assets/Decoration.svg';


const FormSection = () => {

    const [radio, setRadio] = useState("");
    const [selectItem, setSelectItem] = useState("-- wybierz --");
    const [localization, setLocalization] = useState("-- wybierz --");
    const [whoHelp, setWhoHelp] = useState("");
    const [curentOrg, setCurentOrg] = useState("");
    const [yellowHeader, setYellowHeader] = useState("Ważne!");
    const [yellowPara, setYellowPara] = useState("Uzupłenij szczegóły dotczące Twoich rzeczy. Dzięki temu\n" +
        "                        będziemy wiedzieć komu najlepiej je przekazać.");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [codePost, setCodePost] = useState("");
    const [telNum, setTelNum] = useState("");
    const [data, setData] = useState("");
    const [hour, setHour] = useState("");
    const [warning, setWarning] = useState("");


    const [btnColorChild, setbtnColorChild] = useState("none");
    const [btnColorMoth, setbtnColorMoth] = useState("none");
    const [btnColorHas, setbtnColorHas] = useState("none");
    const [btnColorSpr, setbtnColorSpr] = useState("none");
    const [btnColorOld, setbtnColorOld] = useState("none");

    const [viewDisplayYellowBar, setViewDisplayYellowBar] = useState('block');
    const [viewDisplayOnePage, setViewDisplayOnePage] = useState('block');
    const [viewDisplayTwoPage, setViewDisplayTwoPage] = useState('none');
    const [viewDisplayThirdPage, setViewDisplayThirdPage] = useState('none');
    const [viewDisplayFourPage, setViewDisplayFourPage] = useState('none');
    const [viewDisplaySummaryPage, setViewDisplaySummaryPage] = useState('none');
    const [viewDisplayEndPage, setViewDisplayEndPage] = useState('none');


    const handleBtnNextPageOne = () => {
        setYellowPara('Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ!')
        setViewDisplayOnePage('none');
        setViewDisplayTwoPage('block');
    }

    const handleBtnNextPageTwo = () => {
        setYellowPara('Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądż celu ich pomocy.')
        setViewDisplayTwoPage('none');
        setViewDisplayThirdPage('block');
        console.log(selectItem);
    }

    const handleBtnBackPageTwo = () => {
        setYellowPara("Uzupłenij szczegóły dotczące Twoich rzeczy. Dzięki temu\n" +
            "                        będziemy wiedzieć komu najlepiej je przekazać.");
        setViewDisplayOnePage('block');
        setViewDisplayTwoPage('none');

    }
    const handleBtnNextPageThird = () => {
        setYellowPara('Podaj adres oraz termin odbioru rzeczy.');
        setViewDisplayThirdPage('none');
        setViewDisplayFourPage('block');
    }

    const handleChildren = () => {
        setWhoHelp("dzieciom");
        setbtnColorChild('#FAD648');
    }
    const handleMother = () => {
        setWhoHelp("samotnym matkom");
        setbtnColorMoth('#FAD648');
    }
    const handleWithHouse = () => {
        setWhoHelp("bezdomnym");
        setbtnColorHas('#FAD648');
    }
    const handleNoSpr = () => {
        setWhoHelp("niepełnosprawnym");
        setbtnColorSpr('#FAD648');
    }
    const handleOlders = () => {
        setWhoHelp("osobom starszym");
        setbtnColorOld('#FAD648');
    }
    const handleBtnBackPageThird = () => {
        setYellowPara('Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ!')
        setViewDisplayThirdPage('none');
        setViewDisplayTwoPage('block');

    }

    const handleBtnNextPageFour = () => {
        setViewDisplayYellowBar('none');
        setViewDisplayFourPage('none');
        setViewDisplaySummaryPage('block');
        console.log(street, city, codePost, telNum, data, hour, warning)
    }

    const handleBtnBackPageFour = () => {
        setYellowPara('Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądż celu ich pomocy.');
        setViewDisplayThirdPage('block');
        setViewDisplayFourPage('none');
    }

    const handleBtnNextPageSummary = () => {
        setViewDisplayEndPage('block');
        setViewDisplaySummaryPage('none');
    }

    const handleBtnBackPageSummary = () => {
        setViewDisplayYellowBar('block');
        setViewDisplayFourPage('block');
        setViewDisplaySummaryPage('none');
    }


    return (<section className='form'>
        <div className="wrapper">
            <div className='form__yellowBar' style={
                {
                    display: viewDisplayYellowBar
                }
            }>
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
                    <select value={selectItem} className='form__pageTwo__select'
                            onChange={e => setSelectItem(e.target.value)}>
                        <option value='0'>{selectItem}</option>
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
            <div className='form__pageThird' style={
                {
                    display: viewDisplayThirdPage
                }
            }>
                <div className='form__pageThird__steps'> Krok 3/4</div>
                <form className='form__pageThird__formSelect'>
                    <div className='form__pageThird__formContent'>Lokalizacja:</div>
                    <select value={localization} className='form__pageThird__select'
                            onChange={e => setLocalization(e.target.value)}>
                        <option value='0'>{localization}</option>
                        <option value='Poznań'>Poznań</option>
                        <option value='Warszawa'>Warszawa</option>
                        <option value='Kraków'>Kraków</option>
                        <option value='Wrocław'>Wrocław</option>
                        <option value='Katowice'>Katowice</option>
                    </select>
                </form>
                <div className='form__pageThird__whoHelp'>
                    <div className='form__pageThird__Header'>Komu chcesz pomóc?</div>
                    <div className='form__pageThird__btnCont'>
                        <button className='form__pageThird__selectBtn' style={
                            {
                                background: btnColorChild
                            }
                        } onClick={handleChildren}>dzieciom
                        </button>
                        <button className='form__pageThird__selectBtn' style={
                            {
                                background: btnColorMoth
                            }
                        } onClick={handleMother}>samotnym matkom
                        </button>
                        <button className='form__pageThird__selectBtn' style={
                            {
                                background: btnColorHas
                            }
                        } onClick={handleWithHouse}>bezdomnym
                        </button>
                        <button className='form__pageThird__selectBtn' style={
                            {
                                background: btnColorSpr
                            }
                        } onClick={handleNoSpr}>niepełnosprawnym
                        </button>
                        <button className='form__pageThird__selectBtn' style={
                            {
                                background: btnColorOld
                            }
                        } onClick={handleOlders}>osobom starszym
                        </button>
                    </div>
                </div>
                <div className='form__pageThird__curentOrganization'>
                    <div className='form__pageThird__curentHeader'>Wpisz nazwę konkretnej organizacji(opcjonalnie)</div>
                    <form>
                        <input className='form__pageThird__curentText' type='text'
                               onChange={e => setCurentOrg(e.target.value)}/>
                    </form>
                </div>
                <button className="form__pageThird__btn" onClick={handleBtnBackPageThird}>Wstecz</button>
                <button className="form__pageThird__btnNext" onClick={handleBtnNextPageThird}>Dalej</button>

            </div>
            <div className='form__pageFour' style={
                {
                    display: viewDisplayFourPage
                }
            }>
                <div className='form__pageFour__steps'> Krok 4/4</div>
                <div className='form__pageFour__header'>Podaj adres oraz termin odbioru rzeczy przez kuriera</div>
                <div className='form__pageFour__container'>
                    <div className='form__pageFour__firstTable'>
                        <div className='form__pageFour__text'>Adres odbioru:</div>
                        <div className='form__pageFour__text__cont'>
                            <div className='form__pageFour__text__content'>Ulica</div>
                            <input className='form__pageFour__text__input' type='text'
                                   onChange={e => setStreet(e.target.value)}/>
                        </div>
                        <div className='form__pageFour__text__cont'>
                            <div className='form__pageFour__text__content'>Miasto</div>
                            <input className='form__pageFour__text__input' type='text'
                                   onChange={e => setCity(e.target.value)}/>
                        </div>
                        <div className='form__pageFour__text__cont'>
                            <div className='form__pageFour__text__content'>Kod pocztowy</div>
                            <input className='form__pageFour__text__input' type='text'
                                   onChange={e => setCodePost(e.target.value)}/>
                        </div>
                        <div className='form__pageFour__text__cont'>
                            <div className='form__pageFour__text__content'>Numer telefonu</div>
                            <input className='form__pageFour__text__input' type='text'
                                   onChange={e => setTelNum(e.target.value)}/>
                        </div>
                    </div>
                    <div className='form__pageFour__firstTable'>
                        <div className='form__pageFour__text'>Termin odbioru:</div>
                        <div className='form__pageFour__text__cont'>
                            <div className='form__pageFour__text__content'>Data</div>
                            <input className='form__pageFour__text__input' type='text'
                                   onChange={e => setData(e.target.value)}/>
                        </div>
                        <div className='form__pageFour__text__cont'>
                            <div className='form__pageFour__text__content'>Godzina</div>
                            <input className='form__pageFour__text__input' type='text'
                                   onChange={e => setHour(e.target.value)}/>
                        </div>
                        <div className='form__pageFour__text__cont'>
                            <div className='form__pageFour__text__content'>Uwagi dla kuriera</div>
                            <textarea className='form__pageFour__text__textarea'
                                      onChange={e => setWarning(e.target.value)}/>
                        </div>
                    </div>
                </div>

                <button className="form__pageFour__btn" onClick={handleBtnBackPageFour}>Wstecz</button>
                <button className="form__pageFour__btnNext" onClick={handleBtnNextPageFour}>Dalej</button>
            </div>
            <div className='form__pageSummary' style={
                {
                    display: viewDisplaySummaryPage
                }
            }>
                <div className='form__pageSummary__header'>Podsumowanie Twojej darowizny</div>
                <div className='form__pageSummary__headerSum'>Oddajesz:</div>
                    <div className='form__pageSummary__headerSum__container'>
                        <div className='form__pageSummary__headerSum__firstRow'>
                            <img className='form__pageSummary__headerSum__img' src={shirt}/>
                            <div className='form__pageSummary__headerSum__text'>{selectItem} worki, {radio}, {whoHelp}</div>
                        </div>
                        <div className='form__pageSummary__headerSum__firstRow'>
                            <img className='form__pageSummary__headerSum__img' src={Rows}/>
                            <div className='form__pageSummary__headerSum__text'>dla lokalizacji: {localization}</div>
                        </div>
                    </div>
                <div className='form__pageSummary__container'>
                    <div className='form__pageSummary__firstTable'>
                        <div className='form__pageSummary__text'>Adres odbioru:</div>
                        <div className='form__pageSummary__text__cont'>
                            <div className='form__pageSummary__text__content'>Ulica</div>
                            <div className='form__pageSummary__text__input'>{street}</div>
                        </div>
                        <div className='form__pageSummary__text__cont'>
                            <div className='form__pageSummary__text__content'>Miasto</div>
                            <div className='form__pageSummary__text__input'>{city}</div>
                        </div>
                        <div className='form__pageSummary__text__cont'>
                            <div className='form__pageSummary__text__content'>Kod pocztowy</div>
                            <div className='form__pageSummary__text__input'>{codePost}</div>
                        </div>
                        <div className='form__pageSummary__text__cont'>
                            <div className='form__pageSummary__text__content'>Numer telefonu</div>
                            <div className='form__pageSummary__text__input'>{telNum}</div>
                        </div>
                    </div>
                    <div className='form__pageSummary__firstTable'>
                        <div className='form__pageSummary__text'>Termin odbioru:</div>
                        <div className='form__pageSummary__text__cont'>
                            <div className='form__pageSummary__text__content'>Data</div>
                            <div className='form__pageSummary__text__input'>{data}</div>
                        </div>
                        <div className='form__pageSummary__text__cont'>
                            <div className='form__pageSummary__text__content'>Godzina</div>
                            <div className='form__pageSummary__text__input'>{hour}</div>
                        </div>
                        <div className='form__pageSummary__text__cont'>
                            <div className='form__pageSummary__text__content'>Uwagi dla kuriera</div>
                            <div className='form__pageSummary__text__input'>{warning}</div>
                        </div>
                    </div>
                </div>
                <button className="form__pageSummary__btn" onClick={handleBtnBackPageSummary}>Wstecz</button>
                <button className="form__pageSummary__btnNext" onClick={handleBtnNextPageSummary}>Potwierdzam</button>
            </div>
            <div className='form__pageEnd' style={
                {
                    display: viewDisplayEndPage
                }
            }>
                <div className='form__pageEnd__header'>Dziękujemy za przesłanie formularza. Na maila prześlemy wszlekie infomracje o odbiorze.</div>
                <img className='form__pageEnd__decoration' src={decoration}/>
            </div>
        </div>
    </section>)
}

export default FormSection;