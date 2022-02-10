
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import '../../scss/modal.scss';

export const AddVideoAdmin = ({ active, setActive, setData, data, setP, p }) => {
    const auth = useContext(AuthContext)
    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [year, setYear] = useState()
    const [link, setLink] = useState()

    const { request } = useHttp()

    const addVideotHandler = async () => {
        try {
            const newData = await request('/api/video/addvideo', 'POST', { from: { img, name, year, link } }, {
                Authorization: `Bearer ${auth.token}`
            })
            console.log(newData)
            setP(!p)
            setData(data.push(newData.video))
        } catch (e) { }
        setActive(false)
    }

    useEffect(() => {
        window.M.updateTextFields()
    }, [auth.token]);

    return (
        <div className={active ? 'modal_wrapper open' : 'modal_wrapper'} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>

                <h1>Добавить видео</h1>

                <div className="row">
                    <div className="col s8 offset-s2">
                        <div className="input-field">
                            <input
                                type="file"
                                id="img"
                                className="autocomplete"
                                value={img}
                                onChange={e => setImg(e.target.value)} />
                            <label htmlFor="autocomplete-input">Заставка</label>
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                id="name"
                                className="autocomplete"
                                value={name}
                                onChange={e => setName(e.target.value)} />
                            <label htmlFor="autocomplete-input">Название видео</label>
                        </div>
                        <div className="input-field">
                            <input
                                type='number'
                                id="year"
                                value={year}
                                onChange={e => setYear(e.target.value)}
                                className='datepicker' />
                            <label htmlFor="autocomplete-input">Год</label>
                        </div>

                        <div className="input-field">
                            <input
                                type="text"
                                id="link"
                                className="autocomplete "
                                value={link}
                                onChange={e => setLink(e.target.value)} />
                            <label htmlFor="autocomplete-input">Ссылка на YouTobe видео</label>
                        </div>
                    </div>
                    <div className="col s8 offset-s2">
                        <button className="waves-effect waves-light btn-small" onClick={addVideotHandler} >Добавить</button>
                    </div>
                </div>

            </div>
        </div>
    )
}