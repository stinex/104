
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import '../../scss/modal.scss';
import axios from 'axios';

export const AddVideoAdmin = ({ active, setActive, setData, data, setP, p }) => {
    const auth = useContext(AuthContext)
    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [year, setYear] = useState()
    const [link, setLink] = useState()

    const { request } = useHttp()

    const addVideotHandler = async () => {
        try {
            const dataFrom = new FormData()
            dataFrom.append('img', img)
            dataFrom.append('name', name)
            dataFrom.append('year', year)
            dataFrom.append('link', link)

            const newData = await axios.post('/api/video/addvideo', dataFrom, {
                headers: {
                    Authorization: `Bearer ${auth.token}`,
                    'Content-type': 'multipart/form-data'
                }
            })

            console.log(newData)
            setP(!p)
            setData(data.push(newData.data))
        } catch (e) { }
        setActive(false)
    }



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
                                name='img'
                                className="autocomplete"
                                placeholder="Заставка"
                                // value={img}
                                onChange={e => setImg(e.target.files[0])} />
                            {/* <label htmlFor="autocomplete-input">Заставка</label> */}
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                id="name"
                                className="autocomplete"
                                placeholder="Название видео"
                                value={name}
                                onChange={e => setName(e.target.value)} />
                            {/* <label htmlFor="autocomplete-input">Название видео</label> */}
                        </div>
                        <div className="input-field">
                            <input
                                type='number'
                                id="year"
                                value={year}
                                onChange={e => setYear(e.target.value)}
                                placeholder="Год"
                                className='datepicker' />
                            {/* <label htmlFor="autocomplete-input">Год</label> */}
                        </div>

                        <div className="input-field">
                            <input
                                type="text"
                                id="link"
                                className="autocomplete "
                                value={link}
                                placeholder="Ссылка на YouTobe видео"
                                onChange={e => setLink(e.target.value)} />
                            {/* <label htmlFor="autocomplete-input">Ссылка на YouTobe видео</label> */}
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