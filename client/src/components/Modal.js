
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";
import '../scss/modal.scss';

export const Modal = ({ active, setActive, setData, data, setP, p }) => {
    const auth = useContext(AuthContext)
    const [city, setCity] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState()
    const [link, setLink] = useState()

    const { request } = useHttp()

    const addConsertHandler = async () => {
        try {
            const newData = await request('/api/concert/addconcert', 'POST', { from: { city, location, date, link } }, {
                Authorization: `Bearer ${auth.token}`
            })
            setP(!p)
            setData(data.push(newData.concert))
        } catch (e) { }
        setActive(false)
    }

    useEffect(() => {
        // window.M.updateTextFields()
    }, [auth.token]);

    return (
        <div className={active ? 'modal_wrapper open' : 'modal_wrapper'} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>

                <h1>Добавить концер</h1>

                <div className="row">
                    <div className="col s8 offset-s2">
                        <div className="input-field">
                            <input
                                type="text"
                                id="city"
                                className="autocomplete"
                                placeholder="Город"
                                value={city}
                                onChange={e => setCity(e.target.value)} />
                            {/* <label htmlFor="autocomplete-input">Город</label> */}
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                id="locatin"
                                className="autocomplete"
                                placeholder="Место проведения концерта"
                                value={location}
                                onChange={e => setLocation(e.target.value)} />
                            {/* <label htmlFor="autocomplete-input">Место</label> */}
                        </div>
                        <div className="input-field">
                            <input
                                type='date'
                                id="date"
                                value={date}
                                onChange={e => setDate(e.target.value)}
                                className='datepicker' />
                            {/* <label htmlFor="autocomplete-input">Дата</label> */}
                        </div>

                        <div className="input-field">
                            <input
                                type="text"
                                id="link"
                                className="autocomplete "
                                placeholder="Ссылка на билеты"
                                value={link}
                                onChange={e => setLink(e.target.value)} />
                            {/* <label htmlFor="autocomplete-input">Ссылка на билеты</label> */}
                        </div>
                    </div>
                    <div className="col s8 offset-s2">
                        <button className="waves-effect waves-light btn-small" onClick={addConsertHandler} >Добавить</button>
                    </div>
                </div>

            </div>
        </div>
    )
}